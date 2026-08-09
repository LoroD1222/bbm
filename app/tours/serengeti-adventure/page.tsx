import { Binoculars, CalendarCheck, Car, Check, Clock3, Hotel, MapPin, Star, SunMedium, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/components/experience";
import { JourneyButton } from "@/components/journey-button";
import { JourneyFooter } from "@/components/journey-footer";
import { JourneyForm } from "@/components/journey-form";
import { detailAssets } from "@/lib/journeys";

const overviewFacts = [
  { title: "Duration", value: "5 Days / 4 Nights", icon: Clock3 },
  { title: "Group Type", value: "Private Customized Safari", icon: Car },
  { title: "Best Time", value: "June–Oct / Dec–March", icon: SunMedium },
  { title: "Accommodations", value: "Luxury Tents & Lodges", icon: Hotel },
  { title: "Wildlife Focus", value: "Big Five & Great Migration", icon: Binoculars },
  { title: "Start / End", value: "Arusha Gateway", icon: MapPin },
] as const;

const itinerary = [
  { day: "Day 1", title: "Welcome to Tanzania & Arusha Arrival", text: "Touch down at Kilimanjaro International Airport. Your private guide greets you with a warm ‘Karibu’ and transfers you to your peaceful lodge. Spend the afternoon relaxing before your trip briefing.", bullets: ["Airport meet & greet", "Private lodge transfer", "Pre-safari briefing"], meals: "Dinner included", stay: "Gran Melia Arusha", image: detailAssets.dayOne },
  { day: "Day 2", title: "Journey Into The Great Serengeti Plains", text: "Embark on a scenic flight or drive to the legendary Serengeti. Your afternoon game drive begins immediately upon entering the park. Watch the golden light wash over the endless savannah.", bullets: ["Scenic flight to Serengeti", "First savannah game drive", "Sunset campfire welcome"], meals: "Breakfast, Lunch, Dinner", stay: "Serengeti Acacia Bliss Camp", image: detailAssets.dayTwo },
  { day: "Day 3", title: "Full-Day Safari & Great Migration Tracking", text: "Explore the vast Serengeti plains in search of lions, elephants, giraffes, leopards, and the seasonal Great Migration herds. Full day of game driving with picnic lunch in the bush.", bullets: ["Wildlife photography", "Picnic lunch", "Unlimited game-drive mileage"], meals: "Breakfast, Lunch, Dinner", stay: "Serengeti safari camp", image: detailAssets.dayOne },
  { day: "Day 4", title: "Sunrise Hot-Air Balloon & Savannah Wonders", text: "Optional early-morning hot-air balloon safari over the plains, followed by a full day of game drives. Evening sundowners and final campfire dinner under the stars.", bullets: ["Game drives", "Sundowner", "Campfire dinner"], meals: "Breakfast, Lunch, Dinner", stay: "Serengeti safari camp", image: detailAssets.dayTwo },
  { day: "Day 5", title: "Morning Wildlife Drive & Onward Departure", text: "Final early-morning game drive with last wildlife sightings. Transfer to Serengeti airstrip or overland to Arusha, with optional extensions to Zanzibar or Ngorongoro Crater.", bullets: ["Morning game drive", "Transfer to airstrip/Arusha", "Optional onward extension"], meals: "Breakfast", stay: "End of safari", image: detailAssets.dayOne },
] as const;

const pricing = [
  { season: "Low Season", note: "April–May · Green season flora", two: "$1,720 USD", four: "$1,480 USD", six: "$1,350 USD" },
  { season: "Mid Season", note: "Jan–March · Nov · Good wildlife viewing", two: "$1,890 USD", four: "$1,650 USD", six: "$1,510 USD" },
  { season: "High / Peak Season", note: "June–Oct · Dec · Great Migration period", two: "$2,250 USD", four: "$1,950 USD", six: "$1,820 USD" },
] as const;

const included = ["Private custom 4×4 stretch safari Land Cruiser with pop-up roof", "Services of a professional, English-speaking local safari guide", "All national park entry fees, transit fees, and concession fees", "Full board accommodation and meals while on safari", "Arrival and departure airport transfers in Arusha", "Daily unlimited mileage game drives in the Serengeti", "Unlimited bottled drinking water inside the safari vehicle"] as const;
const excluded = ["International flights to/from Kilimanjaro Airport", "Tanzanian tourist visa fees and comprehensive travel insurance", "Tips and gratuities for your safari guide and camp staff", "Optional hot-air balloon safari flight in Serengeti", "Alcoholic drinks and premium soft drinks unless specified", "Laundry, telephone calls, and items of a personal nature"] as const;

const lodges = [
  { title: "Classic Safari Tents", text: "Immerse yourself in nature in authentic luxury walk-in tents with comfortable beds, ensuite bathrooms, and evenings around the campfire.", label: "Featured in our standard package", image: detailAssets.lodgeClassic },
  { title: "Comfort Lodges", text: "Handpicked stone and timber safari lodges with infinity pools, robust amenities, panoramic restaurant views, and complete comfort.", label: "Optional upgrade from +$150/night", image: detailAssets.lodgeComfort },
  { title: "Premium Luxury Camps", text: "Intimate permanent camps on elevated decks, with private plunge pools, gourmet dining, butler service, and direct wildlife paths.", label: "Premium upgrade from +$450/night", image: detailAssets.lodgePremium },
] as const;

const reviews = [
  { quote: "Seeing the river crossing up close was a surreal moment. Our private Land Cruiser was incredibly comfortable, and having our own guide meant we could stay out as late as we wanted tracking leopards.", name: "Marcus & Jennifer S.", place: "San Francisco, USA · 4 Nights Serengeti Adventure", avatar: detailAssets.avatarOne },
  { quote: "BBM Tours exceeded every expectation. The Acacia Bliss Camp was pure magic—hearing the lions call at night while inside our tent is something we will never forget.", name: "David & Sarah K.", place: "London, UK · Custom Bush & Beach Safari", avatar: detailAssets.avatarTwo },
  { quote: "The team’s local Arusha base makes a massive difference. Everything from airport reception to flights and park briefings was perfectly smooth.", name: "Elena Petrova", place: "Munich, Germany · Serengeti & Ngorongoro Escape", avatar: detailAssets.avatarThree },
] as const;

export default function SerengetiAdventurePage() {
  return (
    <Experience>
      <main className="journeys-page detail-page" id="top">
        <nav className="detail-subnav" aria-label="Trip page sections"><div className="journey-shell"><div><a href="#overview">Overview</a><a href="#itinerary">Itinerary</a><a href="#pricing">Pricing</a><a href="#included">Included</a><a href="#reviews">Reviews</a></div><p>From <strong>$1,650 USD</strong><a href="#enquiry">Plan Your Trip</a></p></div></nav>

        <section className="detail-hero" aria-labelledby="detail-title">
          <div className="detail-pattern" aria-hidden="true" />
          <div className="journey-shell detail-hero__layout">
            <div className="detail-hero__copy" data-reveal>
              <p className="journey-eyebrow">Private Safari</p><p className="detail-breadcrumbs">Tours / Safari / Serengeti Adventure</p>
              <h1 id="detail-title">4 Nights Serengeti Adventure</h1>
              <p>A private safari through Tanzania&apos;s most iconic wilderness—wildlife encounters, golden horizons, and unforgettable game drives designed exactly around how you want to travel.</p>
              <div className="detail-hero__facts"><span><Clock3 aria-hidden="true" />5 Days / 4 Nights</span><span><Car aria-hidden="true" />Private 4×4 Safari</span><span><MapPin aria-hidden="true" />Serengeti Park</span><span><CalendarCheck aria-hidden="true" />All-Year Adventure</span></div>
              <div className="detail-hero__actions"><div><JourneyButton href="#enquiry">Request This Trip</JourneyButton><JourneyButton href="#itinerary" secondary>Download Itinerary</JourneyButton></div><aside><span>Starting Price</span><strong>$1,650 <small>USD</small></strong><p>per person · based on 4 travellers. Flexible dates & tailor-made stays.</p></aside></div>
            </div>
            <div className="detail-hero__collage" data-reveal><div><Image src={detailAssets.heroJeep} alt="Safari vehicle in the Serengeti" fill priority sizes="16.25rem" /></div><div><Image src={detailAssets.heroSavannah} alt="Lion on the Serengeti" fill priority sizes="22.5rem" /></div><span><i><Image src={detailAssets.heroSunset} alt="Safari vehicle at sunset" fill priority sizes="13.125rem" /></i><i><Image src={detailAssets.dayTwo} alt="Serengeti sunset" fill priority sizes="13.125rem" /></i></span></div>
          </div>
        </section>

        <section className="detail-overview" id="overview">
          <div className="journey-shell">
            <div className="detail-overview__intro" data-reveal><div><p className="journey-eyebrow">The Experience</p><h2>An Unforgettable Serengeti Safari</h2><p>This private journey takes you deep into the world&apos;s most famous wildlife sanctuary. With your own private vehicle and dedicated local guide, explore the endless plains at your own pace, tracking the Great Migration, searching for the Big Five, and resting in beautiful authentic bush camps.</p></div><aside><h3>Why You&apos;ll Love This Trip</h3><ul><li><Check aria-hidden="true" />Private guide and dedicated 4×4 safari vehicle</li><li><Check aria-hidden="true" />100% customizable daily game-drive schedules</li><li><Check aria-hidden="true" />Handpicked tented camps in migration hot-spots</li><li><Check aria-hidden="true" />Gateway assistance from Arusha to departure</li></ul></aside></div>
            <div className="detail-overview__facts">{overviewFacts.map((fact, index) => { const Icon = fact.icon; return <article key={fact.title} data-reveal style={{ transitionDelay: `${index * 45}ms` }}><Icon aria-hidden="true" /><span>{fact.title}</span><strong>{fact.value}</strong></article>; })}</div>
          </div>
        </section>

        <section className="detail-itinerary" id="itinerary">
          <div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Daily Plan</p><h2>Your Serengeti Journey Day-By-Day</h2><span>A perfectly balanced mix of exciting wildlife tracking, scenic overland transfers, and relaxing stays in handpicked camps. Fully flexible according to your daily energy and preferences.</span></div>
            <ol>{itinerary.map((item, index) => <li key={item.day} data-reveal><span className="detail-itinerary__day">{item.day}</span><article><div><h3>{item.title}</h3><p>{item.text}</p><ul>{item.bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" />{bullet}</li>)}</ul><footer><span>Meals: {item.meals}</span><span>Accommodation: {item.stay}</span></footer></div><div className="detail-itinerary__image"><Image src={item.image} alt="" fill sizes="17.5rem" /></div></article>{index < itinerary.length - 1 && <i aria-hidden="true" />}</li>)}</ol>
          </div>
        </section>

        <section className="detail-pricing" id="pricing"><div className="detail-pattern" aria-hidden="true" /><div className="journey-shell"><div className="journey-heading journey-heading--left journey-heading--inverse" data-reveal><p>Pricing & Seasons</p><h2>Choose The Safari Style That Suits You</h2><span>Our prices adjust to seasonal park fees, group size, and lodge preferences. Estimates below are for our signature 4-night Serengeti safari.</span></div><div className="detail-pricing__layout"><div className="detail-pricing__table" role="table" aria-label="Serengeti safari prices"><div className="detail-pricing__row detail-pricing__head" role="row"><span>Season</span><span>2 Travellers</span><span>4 Travellers</span><span>6+ Travellers</span></div>{pricing.map((row) => <div className="detail-pricing__row" role="row" key={row.season}><span><strong>{row.season}</strong><small>{row.note}</small></span><span>{row.two}<small>pp</small></span><span>{row.four}<small>pp</small></span><span>{row.six}<small>pp</small></span></div>)}</div><aside><div className="detail-pricing__visual"><Image src={detailAssets.pricing} alt="Safari at sunset" fill sizes="21.25rem" /></div><p><strong>What&apos;s included at every level</strong>Private vehicle · Professional guide · All park fees</p></aside></div><div className="detail-pricing__cta"><p>Your final price depends on travel dates, group size, accommodation level, and optional experiences. Our specialists plan exactly to your budget.</p><JourneyButton href="#enquiry">Create My Custom Safari</JourneyButton><small>No obligation. Local safari experts reply within 24 hours.</small></div></div></section>

        <section className="detail-included" id="included"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Trip Specifics</p><h2>What&apos;s Included & Excluded</h2></div><div className="detail-included__grid"><article data-reveal><h3><Check aria-hidden="true" />Included in your trip</h3><ul>{included.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article><article data-reveal><h3><X aria-hidden="true" />Not included in your trip</h3><ul>{excluded.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul></article></div></div></section>

        <section className="detail-lodges"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Where You&apos;ll Sleep</p><h2>Sleep Close to the Wild</h2><span>Choose from three handpicked lodging tiers. You can easily mix and match style levels across your itinerary.</span></div><div className="detail-lodges__grid">{lodges.map((lodge, index) => <article key={lodge.title} data-reveal style={{ transitionDelay: `${index * 65}ms` }}><div><Image src={lodge.image} alt="" fill sizes="(max-width: 43.75rem) 88vw, 31vw" /></div><h3>{lodge.title}</h3><p>{lodge.text}</p><span>{lodge.label}</span></article>)}</div></div></section>

        <section className="detail-gallery"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Captured Moments</p><h2>Serengeti Safari Gallery</h2></div><div className="detail-gallery__grid" data-reveal><div><Image src={detailAssets.galleryOne} alt="Leopard resting in a tree" fill sizes="45rem" /><span>Big Five Encounters</span></div><div><Image src={detailAssets.galleryTwo} alt="Sunset game drive" fill sizes="27.5rem" /><span>Golden-hour game drives</span></div><div><Image src={detailAssets.galleryThree} alt="Great Migration herd" fill sizes="27.5rem" /><span>The Great Migration</span></div></div></div></section>

        <section className="detail-reviews" id="reviews"><div className="journey-shell"><div className="trips-reviews__heading" data-reveal><div><p className="journey-eyebrow">Testimonials</p><h2>What Our Travellers Say</h2></div><span><Image src="/assets/tripadvisor-icon.png" alt="" width={18} height={18} />Loved by safari travellers on TripAdvisor</span></div><div className="detail-reviews__grid">{reviews.map((review, index) => <article key={review.name} data-reveal style={{ transitionDelay: `${index * 65}ms` }}><div className="detail-reviews__stars">{Array.from({ length: 5 }, (_, star) => <Star key={star} aria-hidden="true" />)}</div><blockquote>“{review.quote}”</blockquote><footer><Image src={review.avatar} alt="" width={44} height={44} /><span><strong>{review.name}</strong><small>{review.place}</small></span></footer></article>)}</div></div></section>

        <section className="detail-related"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Continue The Adventure</p><h2>Continue Your Tanzania Journey</h2></div><div className="detail-related__grid">{[
          { category: "Wildlife", duration: "4 Days / 3 Nights", title: "Ngorongoro Crater Escape", price: "From $1,420 USD", image: detailAssets.relatedOne },
          { category: "Classic", duration: "7 Days / 6 Nights", title: "Northern Circuit Safari Major", price: "From $2,850 USD", image: detailAssets.relatedTwo },
          { category: "Bush & Beach", duration: "10 Days / 9 Nights", title: "Serengeti & Zanzibar Escape", price: "From $3,680 USD", image: detailAssets.relatedThree },
        ].map((trip, index) => <article key={trip.title} data-reveal style={{ transitionDelay: `${index * 65}ms` }}><div><Image src={trip.image} alt="" fill sizes="(max-width: 43.75rem) 88vw, 31vw" /></div><p>{trip.category}<span>{trip.duration}</span></p><h3>{trip.title}</h3><footer><strong>{trip.price}</strong><Link href="/#contact">View Trip</Link></footer></article>)}</div></div></section>

        <section className="detail-enquiry" id="enquiry"><Image className="detail-enquiry__background" src={detailAssets.enquiry} alt="" fill sizes="100vw" /><div className="journey-shell detail-enquiry__layout"><div data-reveal><h2>Ready for your Serengeti Adventure?</h2><p>Tell us your preferred dates, group size, and what kind of traveler you are. Our Arusha-based team will design the perfect custom itinerary for you.</p><ul><li><Check aria-hidden="true" />100% tailor-made packages built from scratch</li><li><Check aria-hidden="true" />Local operator based in Arusha — direct rates</li><li><Check aria-hidden="true" />Unlimited itinerary adjustments</li></ul></div><div data-reveal><JourneyForm title="Plan Your Trip" buttonLabel="Get Started" /></div></div></section>
        <JourneyFooter />
      </main>
    </Experience>
  );
}
