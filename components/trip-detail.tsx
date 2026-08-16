import {Binoculars, CalendarCheck, Car, Check, Clock3, Hotel, MapPin, Star, SunMedium, X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  accommodationOptionTitle,
  atAGlanceLabel,
  formatMonths,
  itineraryActivityLabel,
  overnightTypeLabel,
  seasonLabel,
  serviceLabel,
  tripTypeLabel,
} from '@/lib/trip-options'
import {detailAssets} from '@/lib/journeys'
import {tripImageUrl} from '@/lib/sanity-image'
import type {TripImage, TripPageData} from '@/lib/trip-types'
import {Experience} from './experience'
import {GalleryLightbox} from './gallery-lightbox'
import {JourneyButton} from './journey-button'
import {JourneyFooter} from './journey-footer'
import {JourneyForm} from './journey-form'
import {TripTypeIcon} from './trip-type-icon'

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const mealLabel: Record<string, string> = {
  breakfast: 'Breakfast',
  lunch: 'Lunch',
  dinner: 'Dinner',
}

const travelerReviews = [
  {image: '/assets/testimonials/bbm-guests-vehicle.jpg', quote: 'Our tailor-made safari across the Serengeti and Ngorongoro Crater exceeded every expectation. Seeing the Great Migration up close was a life-changing moment. Everything was timed perfectly.', name: 'Sarah & David K.', trip: 'Bush & Beach Safari - 12 Days'},
  {image: '/assets/testimonials/bbm-guests-tarangire.jpg', quote: 'Climbing Mount Kilimanjaro via Lemosho was tough, but the BBM team guided us with unbelievable care and expertise. Pushing through summit night was made possible by their incredible crew.', name: 'Marcus Chen', trip: 'Kilimanjaro Climb Machame - 8 Days'},
  {image: '/assets/testimonials/bbm-guests-safari-vehicle.jpg', quote: 'Zanzibar was pure paradise. Combining our dusty game drives with quiet, breezy beaches in Stone Town was the ultimate itinerary layout. Having a single contact made it so stress-free.', name: 'Elena Petrova', trip: 'Wildlife & Zanzibar - 10 Days'},
] as const

function duration(days: number, nights: number) {
  return `${days} ${days === 1 ? 'Day' : 'Days'} / ${nights} ${nights === 1 ? 'Night' : 'Nights'}`
}

function labelFor(labels: Record<string, string>, value: string) {
  return labels[value] ?? value
}

function hasTripImage(image: TripImage | null | undefined): image is TripImage {
  return Boolean(image?.src || image?.asset?.url)
}

function imageUrl(image: TripImage | null | undefined, width: number, height: number) {
  return hasTripImage(image) ? tripImageUrl(image, width, height) : null
}

function TripImageSlot({
  image,
  alt = '',
  width,
  height,
  sizes,
  priority = false,
}: Readonly<{
  image?: TripImage | null
  alt?: string
  width: number
  height: number
  sizes: string
  priority?: boolean
}>) {
  const src = imageUrl(image, width, height)
  return src ? <Image src={src} alt={alt} fill sizes={sizes} priority={priority} /> : null
}

export function TripDetail({trip}: Readonly<{trip: TripPageData}>) {
  const tripDuration = duration(trip.days, trip.nights)
  const includedItems = [...trip.included.map((item) => labelFor(serviceLabel, item)), ...trip.extraIncluded]
  const excludedItems = [...trip.excluded.map((item) => labelFor(serviceLabel, item)), ...trip.extraExcluded]
  const media = [trip.coverImage, ...trip.gallery]
  const galleryItems = trip.gallery.slice(0, 3).map((image) => ({
    src: tripImageUrl(image, 1600, 1200),
    alt: image.alt,
    label: image.alt,
  }))
  const travelStyle = trip.atAGlance[0] ? labelFor(atAGlanceLabel, trip.atAGlance[0]) : tripTypeLabel[trip.tripType]
  const locations = trip.itinerary.flatMap((item) => item.locations)
  const start = locations[0] ? labelFor(atAGlanceLabel, locations[0]) : 'Tanzania'
  const finish = locations.at(-1) ? labelFor(atAGlanceLabel, locations.at(-1)!) : 'Tanzania'
  const travelMonths = [...new Set(trip.seasonalRates.flatMap((rate) => rate.months))]
  const bestTime = travelMonths.length ? formatMonths(travelMonths) : 'Year-round'
  const overviewFacts = [
    {title: 'Duration', value: tripDuration, icon: Clock3},
    {title: 'Travel style', value: travelStyle, icon: Car},
    {title: 'Best time', value: bestTime, icon: SunMedium},
    {title: 'Accommodation', value: `${trip.accommodationOptions.length || 'Flexible'} stay options`, icon: Hotel},
    {title: 'Trip focus', value: trip.atAGlance.slice(1, 3).map((item) => labelFor(atAGlanceLabel, item)).join(' · ') || tripTypeLabel[trip.tripType], icon: Binoculars},
    {title: 'Start / end', value: start === finish ? start : `${start} / ${finish}`, icon: MapPin},
  ]

  return (
    <Experience>
      <main className="journeys-page detail-page" id="top">
        <nav className="detail-subnav" aria-label="Trip page sections">
          <div className="journey-shell">
            <div>
              <a href="#overview">Overview</a>
              <a href="#itinerary">Itinerary</a>
              <a href="#pricing">Pricing</a>
              <a href="#included">Included</a>
              <a href="#enquiry" data-plan-trip>Enquire</a>
            </div>
            <p>
              From <strong>{usd.format(trip.startingPrice)} USD</strong>
              <a href="#enquiry" data-plan-trip>Plan Your Trip</a>
            </p>
          </div>
        </nav>

        <section className="detail-hero" aria-labelledby="detail-title">
          <div className="detail-pattern" aria-hidden="true" />
          <div className="journey-shell detail-hero__layout">
            <div className="detail-hero__copy" data-reveal>
              <p className="journey-eyebrow"><TripTypeIcon tripType={trip.tripType} aria-hidden="true" />{tripTypeLabel[trip.tripType]}</p>
              <p className="detail-breadcrumbs">Tours / {tripTypeLabel[trip.tripType]} / {trip.title}</p>
              <h1 id="detail-title">{trip.title}</h1>
              <p>{trip.summary}</p>
              <div className="detail-hero__facts">
                <span><Clock3 aria-hidden="true" />{tripDuration}</span>
                {trip.atAGlance.slice(0, 3).map((item, index) => {
                  const Icon = index === 0 ? Car : index === 1 ? MapPin : CalendarCheck
                  return <span key={item}><Icon aria-hidden="true" />{labelFor(atAGlanceLabel, item)}</span>
                })}
              </div>
              <div className="detail-hero__actions">
                <div>
                  <JourneyButton href="#enquiry">Request This Trip</JourneyButton>
                  <JourneyButton href={trip.itineraryPdfUrl ?? '#itinerary'} secondary>{trip.itineraryPdfUrl ? 'Download Itinerary' : 'View Itinerary'}</JourneyButton>
                </div>
                <aside>
                  <span>Starting Price</span>
                  <strong>{usd.format(trip.startingPrice)} <small>USD</small></strong>
                  <p>Per person · based on four travellers. Flexible dates and tailored stays.</p>
                </aside>
              </div>
            </div>
            <div className="detail-hero__collage" data-reveal aria-label={trip.coverImage ? trip.coverImage.alt : undefined}>
              <div className="detail-media-slot"><TripImageSlot image={media[0]} alt={media[0]?.alt ?? ''} width={720} height={820} sizes="19.375rem" priority /></div>
              <div>
                <span className="detail-media-slot"><TripImageSlot image={media[1]} alt={media[1]?.alt ?? ''} width={520} height={420} sizes="16.25rem" /></span>
                <span className="detail-media-slot"><TripImageSlot image={media[2]} alt={media[2]?.alt ?? ''} width={520} height={420} sizes="16.25rem" /></span>
              </div>
            </div>
          </div>
        </section>

        <section className="detail-overview" id="overview">
          <div className="journey-shell">
            <div className="detail-overview__intro" data-reveal>
              <div><p className="journey-eyebrow journey-eyebrow--pill">The Experience</p><h2>Explore Tanzania at your own pace</h2><p>{trip.overview}</p></div>
              <aside><h3>Why you&apos;ll love this trip</h3><ul>{trip.highlights.map((highlight) => <li key={highlight}><Check aria-hidden="true" />{highlight}</li>)}</ul></aside>
            </div>
            <div className="detail-overview__facts">{overviewFacts.map((fact, index) => { const Icon = fact.icon; return <article key={fact.title} data-reveal style={{transitionDelay: `${index * 45}ms`}}><Icon aria-hidden="true" /><span>{fact.title}</span><strong>{fact.value}</strong></article> })}</div>
          </div>
        </section>

        <section className="detail-itinerary" id="itinerary">
          <div className="journey-shell">
            <div className="journey-heading journey-heading--left" data-reveal><p>Daily Plan</p><h2>Your journey, day by day</h2><span>Each day has a clear plan, with enough flexibility to follow wildlife conditions, weather, and your interests.</span></div>
            <ol>{trip.itinerary.map((item, index) => {
              const stay = [labelFor(overnightTypeLabel, item.overnightType), item.accommodationName].filter(Boolean).join(' · ')
              const route = item.locations.map((location) => labelFor(atAGlanceLabel, location)).join(' to ') || `Day ${index + 1}`
              const itineraryImage = trip.gallery[index]
              return <li key={item._key} data-reveal><span className="detail-itinerary__day">Day {index + 1}</span><article><div><h3>{route}</h3><p>{item.description}</p><ul>{item.activities.map((activity) => <li key={activity}><Check aria-hidden="true" />{labelFor(itineraryActivityLabel, activity)}</li>)}</ul><footer><span>Meals: {item.meals.length ? item.meals.map((meal) => labelFor(mealLabel, meal)).join(', ') : 'Not listed'}</span><span>Accommodation: {stay || 'Not listed'}</span></footer></div><div className="detail-itinerary__image detail-media-slot"><TripImageSlot image={itineraryImage} alt={itineraryImage?.alt ?? ''} width={560} height={460} sizes="17.5rem" /></div></article>{index < trip.itinerary.length - 1 && <i aria-hidden="true" />}</li>
            })}</ol>
          </div>
        </section>

        <section className="detail-pricing" id="pricing"><div className="detail-pattern" aria-hidden="true" /><div className="journey-shell"><div className="journey-heading journey-heading--left journey-heading--inverse" data-reveal><p>Pricing &amp; Seasons</p><h2>Choose the travel period that suits you</h2><span>Prices are per person in USD and vary by season, group size, and accommodation level.</span></div><div className="detail-pricing__layout" data-reveal><div className="detail-pricing__table" role="table" aria-label={`${trip.title} seasonal prices`}><div className="detail-pricing__row detail-pricing__head" role="row"><span>Season</span><span>2 Travellers</span><span>4 Travellers</span><span>6+ Travellers</span></div>{trip.seasonalRates.map((rate) => <div className="detail-pricing__row" role="row" key={rate._key}><span><strong>{rate.season === 'custom' ? rate.customLabel || 'Custom season' : labelFor(seasonLabel, rate.season)}</strong><small>{formatMonths(rate.months)}</small></span><span>{usd.format(rate.priceForTwo)} <small>Per person</small></span><span>{usd.format(rate.priceForFour)} <small>Per person</small></span><span>{usd.format(rate.priceForSixPlus)} <small>Per person</small></span></div>)}</div><aside><div className="detail-pricing__visual detail-media-slot"><TripImageSlot image={trip.coverImage} alt={trip.coverImage?.alt ?? ''} width={680} height={460} sizes="21.25rem" /></div><p><strong>Included at every level</strong>Private guide, planned logistics, and the services listed for this trip.</p></aside></div><div className="detail-pricing__cta"><p>Your final quote is tailored to your dates, party size, accommodation level, and optional experiences.</p><JourneyButton href="#enquiry">Create My Custom Safari</JourneyButton><small>No obligation. Local safari experts reply within 24 hours.</small></div></div></section>

        <section className="detail-included" id="included"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Trip Specifics</p><h2>What&apos;s included and excluded</h2></div><div className="detail-included__grid"><article data-reveal><h3><Check aria-hidden="true" />Included in your trip</h3><ul>{includedItems.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article><article data-reveal><h3><X aria-hidden="true" />Not included in your trip</h3><ul>{excludedItems.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul></article></div></div></section>

        <section className="detail-reviews" aria-labelledby="detail-reviews-title">
          <div className="journey-shell">
            <div className="center-heading center-heading--dark" data-reveal>
              <p className="yellow-label">Reviews</p>
              <h2 id="detail-reviews-title">What Our Travelers Say</h2>
              <p className="verified"><Image src="/assets/tripadvisor-icon.png" alt="" width={24} height={24} aria-hidden="true" />Verified by TripAdvisor</p>
            </div>
            <div className="review-grid">
              {travelerReviews.map((review, index) => (
                <article className="review-card" key={review.name} data-reveal style={{transitionDelay: `${index * 75}ms`}}>
                  <div className="review-card__image image-frame"><Image src={review.image} alt="" fill sizes="(max-width: 47.5rem) 88vw, 31vw" /></div>
                  <div className="review-card__content">
                    <div className="stars" aria-label="5 out of 5 stars">{Array.from({length: 5}, (_, star) => <Star key={star} aria-hidden="true" />)}</div>
                    <blockquote>“{review.quote}”</blockquote>
                    <footer><strong>{review.name}</strong><span>{review.trip}</span></footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {trip.accommodationOptions.length > 0 && <section className="detail-lodges"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Where You&apos;ll Sleep</p><h2>Choose your stay style</h2><span>Pick one level or mix different accommodation levels across the itinerary.</span></div><div className="detail-lodges__grid">{trip.accommodationOptions.map((option, index) => {
          const image = hasTripImage(option.image) ? option.image : null
          return <article className={image ? undefined : 'detail-lodges__card--text-only'} key={option._key} data-reveal style={{transitionDelay: `${index * 65}ms`}}>{image && <div className="detail-media-slot"><TripImageSlot image={image} alt={image.alt ?? ''} width={900} height={650} sizes="(max-width: 43.75rem) 88vw, 31vw" /></div>}{option.packageNote && <span>{option.packageNote}</span>}<h3>{labelFor(accommodationOptionTitle, option.level)}</h3><p>{option.description}</p></article>
        })}</div></div></section>}

        {galleryItems.length > 0 && <section className="detail-gallery"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Captured Moments</p><h2>{trip.title} gallery</h2></div><GalleryLightbox items={galleryItems} /></div></section>}

        {trip.relatedTrips.length > 0 && <section className="detail-related"><div className="journey-shell"><div className="journey-heading journey-heading--left" data-reveal><p>Continue The Adventure</p><h2>Continue your Tanzania journey</h2></div><div className="detail-related__grid">{trip.relatedTrips.map((related, index) => <article key={related._id} data-reveal style={{transitionDelay: `${index * 65}ms`}}><div className="detail-media-slot"><TripImageSlot image={related.coverImage} alt={related.coverImage?.alt ?? ''} width={900} height={620} sizes="(max-width: 43.75rem) 88vw, 31vw" /></div><p>{tripTypeLabel[related.tripType]}<span>{duration(related.days, related.nights)}</span></p><h3>{related.title}</h3><footer><strong>From {usd.format(related.startingPrice)} USD</strong><Link href={related._id.startsWith('fallback-') ? '/#contact' : `/tours/${related.slug}`}>View Trip</Link></footer></article>)}</div></div></section>}

        <section className="detail-enquiry" id="enquiry"><Image className="detail-enquiry__background" src={detailAssets.enquiry} alt="" fill sizes="100vw" /><div className="journey-shell detail-enquiry__layout"><div data-reveal><h2>Ready to plan {trip.title}?</h2><p>Share your preferred dates, group size, and travel priorities. Our Arusha-based team will refine this itinerary around you.</p><ul><li><Check aria-hidden="true" />Tailor-made arrangements</li><li><Check aria-hidden="true" />Local team based in Arusha</li><li><Check aria-hidden="true" />Flexible itinerary adjustments</li></ul></div><div data-reveal><JourneyForm title="Plan Your Trip" buttonLabel="Get Started" /></div></div></section>
        <JourneyFooter />
      </main>
    </Experience>
  )
}
