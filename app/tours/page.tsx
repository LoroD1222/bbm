import { ArrowUpRight, Binoculars, Compass, Mail, Phone, ShieldCheck, Star, UsersRound } from "lucide-react";
import Image from "next/image";
import { Experience } from "@/components/experience";
import { JourneyButton } from "@/components/journey-button";
import { JourneyFooter } from "@/components/journey-footer";
import { JourneyForm } from "@/components/journey-form";
import { TripsExplorer } from "@/components/trips-explorer";
import {getTripsForList} from "@/lib/trip-data";

const travelStyles = [
  { title: "Wildlife Safaris", text: "Untamed natural encounters.", image: "/assets/figma/pages/style-wildlife.png", category: "wildlife-safari" },
  { title: "Kilimanjaro Treks", text: "Climb the roof of Africa.", image: "/assets/figma/pages/style-kilimanjaro.png", category: "mountain-trekking" },
  { title: "Safari + Beach", text: "Bush encounters & coastal relaxation.", image: "/assets/figma/pages/style-bush-beach.png", category: "safari-plus-beach" },
  { title: "Tailor-Made Journeys", text: "Built 100% around your dream.", image: "/assets/figma/pages/style-tailor.png", category: "private-safari" },
] as const;

const benefits = [
  { title: "Tanzania-Based Experts", text: "Working locally out of Arusha, planning every game drive, stay, and permit ourselves.", icon: Binoculars },
  { title: "Flexible Tailor-Made Itineraries", text: "Every journey is customized around your personal dates, budget, and exact pace.", icon: Compass },
  { title: "Handpicked Guides & Stays", text: "We partner with trusted lodges and source veteran park rangers with decades of wisdom.", icon: UsersRound },
  { title: "Personal 24/7 Support", text: "Total peace of mind with dedicated local coordinators from booking to departure.", icon: ShieldCheck },
] as const;

const reviews = [
  { image: "/assets/figma/pages/trips-review-01.png", quote: "Our tailor-made safari across the Serengeti and Ngorongoro Crater exceeded every expectation. Seeing the Great Migration up close was a life-changing moment. Everything was timed perfectly.", name: "Sarah & David K.", trip: "Bush & Beach Safari - 12 Days" },
  { image: "/assets/figma/pages/trips-review-02.png", quote: "Climbing Mount Kilimanjaro via Lemosho was tough, but the BBM team guided us with unbelievable care and expertise. Pushing through summit night was made possible by their incredible crew.", name: "Marcus Chen", trip: "Kilimanjaro Climb Machame - 8 Days" },
  { image: "/assets/figma/pages/trips-review-03.png", quote: "Zanzibar was pure paradise. Combining our dusty game drives with quiet, breezy beaches in Stone Town was the ultimate itinerary layout. Having a single contact made it so stress-free.", name: "Elena Petrova", trip: "Wildlife & Zanzibar - 10 Days" },
] as const;

export default async function ToursPage() {
  return (
    <Experience>
      <main className="journeys-page" id="top">
        <section className="trips-hero" aria-labelledby="trips-title">
          <div className="journey-shell trips-hero__layout">
            <div className="trips-hero__copy" data-reveal>
              <p className="journey-eyebrow">Explore Tanzania</p>
              <h1 id="trips-title">Find Your Perfect Tanzania Journey</h1>
              <p>From wildlife-packed safaris to Kilimanjaro climbs and Zanzibar escapes, discover trips designed around unforgettable moments.</p>
              <div className="trips-hero__actions"><JourneyButton href="/#contact">Plan a custom trip</JourneyButton><JourneyButton href="#all-trips" secondary>See classic routes</JourneyButton></div>
              <div className="trips-hero__metrics"><div><strong>100%</strong><span>Tailor-Made Route Design</span></div><i /><div><strong>120+</strong><span>Summits of Kilimanjaro</span></div></div>
            </div>
            <div className="trips-hero__collage" data-reveal>
              <div className="trips-hero__mountain"><Image src="/assets/figma/pages/trips-hero-mountain.png" alt="Mount Kilimanjaro at dawn" fill priority sizes="19.375rem" /></div>
              <div><span><Image src="/assets/figma/pages/trips-hero-safari.png" alt="Elephants on the savanna" fill priority sizes="16.25rem" /></span><span><Image src="/assets/figma/pages/trips-hero-beach.png" alt="Zanzibar lagoon and boat" fill priority sizes="16.25rem" /></span></div>
            </div>
          </div>
        </section>

        <TripsExplorer journeys={await getTripsForList()} />

        <section className="travel-styles">
          <div className="journey-shell">
            <div className="journey-heading journey-heading--center journey-heading--inverse" data-reveal><p>Choose Your Adventure</p><h2>Browse by Travel Style</h2></div>
            <div className="travel-styles__grid">{travelStyles.map((style, index) => <article key={style.title} data-reveal style={{ transitionDelay: `${index * 65}ms` }}><div><Image src={style.image} alt="" fill sizes="(max-width: 43.75rem) 86vw, 24vw" /></div><h3>{style.title}</h3><p>{style.text}</p><a href="#all-trips" data-trip-category={style.category}>Explore Style <ArrowUpRight aria-hidden="true" /></a></article>)}</div>
          </div>
        </section>

        <section className="journey-benefits">
          <div className="journey-shell">
            <div className="journey-heading journey-heading--center" data-reveal><p>The BBM Advantage</p><h2>Local Expertise. Unforgettable Journeys.</h2></div>
            <div className="journey-benefits__grid">{benefits.map((benefit, index) => { const Icon = benefit.icon; return <article key={benefit.title} data-reveal style={{ transitionDelay: `${index * 60}ms` }}><span><Icon aria-hidden="true" /></span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>; })}</div>
          </div>
        </section>

        <section className="trips-reviews">
          <div className="journey-shell">
            <div className="trips-reviews__heading" data-reveal><div><p className="journey-eyebrow journey-eyebrow--pill">Reviews</p><h2>What Our Travelers Say</h2></div><span><Image src="/assets/tripadvisor-icon.png" alt="" width={18} height={18} />Verified by TripAdvisor</span></div>
            <div className="trips-reviews__grid">{reviews.map((review, index) => <article key={review.name} data-reveal style={{ transitionDelay: `${index * 70}ms` }}><div><Image src={review.image} alt="" fill sizes="(max-width: 43.75rem) 84vw, 31vw" /></div><p className="trips-reviews__stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <Star key={star} aria-hidden="true" />)}</p><blockquote>“{review.quote}”</blockquote><footer><strong>{review.name}</strong><span>{review.trip}</span></footer></article>)}</div>
          </div>
        </section>

        <section className="custom-trip" id="custom-trip">
          <Image className="custom-trip__background" src="/assets/figma/pages/detail-enquiry.png" alt="" fill sizes="100vw" />
          <div className="journey-shell custom-trip__layout">
            <div data-reveal><p className="journey-eyebrow">Tailor-Made Tanzania</p><h2>Not seeing your perfect trip?</h2><p>Tell us how you want to travel and our local experts will design a Tanzania journey completely around you. Routes, park permits, lodgings, and flights managed in one single plan.</p><ul><li><Mail aria-hidden="true" />info@bbmsafaris.com</li><li><Phone aria-hidden="true" />+255 757 662 052</li></ul></div>
            <div data-reveal><JourneyForm /></div>
          </div>
        </section>
        <JourneyFooter />
      </main>
    </Experience>
  );
}
