"use client";

import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Journey } from "@/lib/journeys";
import { tripTypeLabel, tripTypeOptions, type TripType } from "@/lib/trip-options";
import { TripCard } from "./trip-card";

const categories = ["all", ...tripTypeOptions.map(({ value }) => value)] as const;

function categoryLabel(category: "all" | TripType) {
  return category === "all" ? "All Trips" : tripTypeLabel[category];
}

export function TripsExplorer({ journeys }: Readonly<{ journeys: readonly Journey[] }>) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | TripType>("all");

  const visible = useMemo(() => journeys.filter((journey) => {
    const searchText = `${journey.title} ${journey.description} ${journey.category}`.toLowerCase();
    return searchText.includes(query.trim().toLowerCase()) && (category === "all" || category === journey.category);
  }), [category, journeys, query]);
  const hasActiveFilter = category !== "all" || query.trim().length > 0;

  const clear = () => { setQuery(""); setCategory("all"); };

  useEffect(() => {
    const filterByTravelStyle = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest<HTMLElement>("[data-trip-category]");
      const nextCategory = trigger?.dataset.tripCategory;
      if (!nextCategory || !tripTypeOptions.some(({value}) => value === nextCategory)) return;

      setQuery("");
      setCategory(nextCategory as TripType);
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
          <div className="trips-filter__pills" aria-label="Journey categories">{categories.map((item) => <button className={category === item ? "is-active" : ""} type="button" key={item} onClick={() => setCategory(item)}>{categoryLabel(item)}</button>)}</div>
          <div className="trips-filter__result"><strong>Showing {visible.length} Unforgettable {visible.length === 1 ? "Journey" : "Journeys"}</strong><span /></div>
        </div>
      </section>
      <section className="all-trips-section" id="all-trips">
        <div className="journey-shell">
          <div className="journey-heading journey-heading--left"><p>Complete Catalogue</p><h2>Explore All Journeys</h2></div>
          {visible.length ? <div className={`all-trips-grid${hasActiveFilter ? " is-filtered" : ""}`}>{visible.map((journey, index) => <TripCard key={journey.slug} journey={journey} priority={index === 0} />)}</div> : <div className="trips-empty" role="status"><Search aria-hidden="true" /><h3>No journeys match those filters.</h3><p>Try a broader search or let our local team design one around you.</p><button type="button" onClick={clear}><X aria-hidden="true" />Clear filters</button></div>}
        </div>
      </section>
    </>
  );
}
