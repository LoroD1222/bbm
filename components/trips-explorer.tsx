"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { journeys } from "@/lib/journeys";
import { TripCard } from "./trip-card";

const categories = ["All Trips", "Safari", "Kilimanjaro Treks", "Safari + Zanzibar", "Beach Escapes", "Family Trips", "Honeymoon Specials", "Luxury Escapes"] as const;

function matchesCategory(category: string, journeyCategory: string) {
  if (category === "All Trips") return true;
  const rules: Record<(typeof categories)[number], readonly string[]> = {
    "All Trips": [],
    Safari: ["Safari", "Private safari", "Wildlife"],
    "Kilimanjaro Treks": ["Mountain trek"],
    "Safari + Zanzibar": ["Safari + Beach"],
    "Beach Escapes": ["Beach"],
    "Family Trips": ["Family"],
    "Honeymoon Specials": ["Honeymoon"],
    "Luxury Escapes": ["Luxury"],
  };
  return rules[category as (typeof categories)[number]]?.includes(journeyCategory) ?? true;
}

export function TripsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All Trips");
  const [duration, setDuration] = useState("all");
  const [budget, setBudget] = useState("all");
  const [destination, setDestination] = useState("");

  const visible = useMemo(() => journeys.filter((journey) => {
    const searchText = `${journey.title} ${journey.description} ${journey.category}`.toLowerCase();
    const price = Number(journey.price.replace(/[^0-9]/g, ""));
    const durationMatch = duration === "all" || (duration === "short" ? Number(journey.duration.split(" ")[0]) <= 5 : Number(journey.duration.split(" ")[0]) > 5);
    const budgetMatch = budget === "all" || (budget === "under-2000" ? price < 2000 : budget === "2000-3500" ? price >= 2000 && price <= 3500 : price > 3500);
    const destinationMatch = !destination || searchText.includes(destination.toLowerCase());
    return searchText.includes(query.trim().toLowerCase()) && destinationMatch && matchesCategory(category, journey.category) && durationMatch && budgetMatch;
  }), [budget, category, destination, duration, query]);

  const clear = () => { setQuery(""); setCategory("All Trips"); setDuration("all"); setBudget("all"); setDestination(""); };

  useEffect(() => {
    const filterByTravelStyle = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest<HTMLElement>("[data-trip-category]");
      const nextCategory = trigger?.dataset.tripCategory;
      if (!nextCategory || !categories.includes(nextCategory as (typeof categories)[number])) return;

      setQuery("");
      setDuration("all");
      setBudget("all");
      setDestination("");
      setCategory(nextCategory as (typeof categories)[number]);
    };

    document.addEventListener("click", filterByTravelStyle);
    return () => document.removeEventListener("click", filterByTravelStyle);
  }, []);

  return (
    <>
      <section className="trips-filter" aria-label="Find a Tanzania journey">
        <div className="journey-shell">
          <form className="trips-filter__search" onSubmit={(event) => event.preventDefault()} role="search">
            <Search aria-hidden="true" /><label className="sr-only" htmlFor="trip-search">Search journeys</label><input id="trip-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search trips, parks, or destinations..." /><button type="submit">Find Journeys</button>
          </form>
          <div className="trips-filter__selects">
            <label>Trip Type<select value={category} onChange={(event) => setCategory(event.target.value as (typeof categories)[number])}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label>Duration<select value={duration} onChange={(event) => setDuration(event.target.value)}><option value="all">Any duration</option><option value="short">Up to 5 days</option><option value="long">6+ days</option></select></label>
            <label>Destination<select value={destination} onChange={(event) => setDestination(event.target.value)}><option value="">Any destination</option><option value="Serengeti">Serengeti</option><option value="Kilimanjaro">Kilimanjaro</option><option value="Zanzibar">Zanzibar</option><option value="Ngorongoro">Ngorongoro</option></select></label>
            <label>Budget<select value={budget} onChange={(event) => setBudget(event.target.value)}><option value="all">Any budget</option><option value="under-2000">Under $2,000</option><option value="2000-3500">$2,000–$3,500</option><option value="over-3500">Over $3,500</option></select></label>
            <label>Best Time to Travel<select defaultValue="all"><option value="all">All year</option><option>June–October</option><option>December–March</option><option>April–May</option></select></label>
          </div>
          <div className="trips-filter__pills" aria-label="Journey categories">{categories.map((item) => <button className={category === item ? "is-active" : ""} type="button" key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <div className="trips-filter__result"><strong>Showing {visible.length} Unforgettable {visible.length === 1 ? "Journey" : "Journeys"}</strong><span /></div>
        </div>
      </section>
      <section className="all-trips-section" id="all-trips">
        <div className="journey-shell">
          <div className="journey-heading journey-heading--left"><p>Complete Catalogue</p><h2>Explore All Journeys</h2></div>
          {visible.length ? <div className="all-trips-grid">{visible.map((journey, index) => <TripCard key={journey.slug} journey={journey} priority={index === 0} />)}</div> : <div className="trips-empty" role="status"><Search aria-hidden="true" /><h3>No journeys match those filters.</h3><p>Try a broader search or let our local team design one around you.</p><button type="button" onClick={clear}><X aria-hidden="true" />Clear filters</button></div>}
        </div>
      </section>
    </>
  );
}
