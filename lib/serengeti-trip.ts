import {detailAssets} from './journeys'
import type {TripImage, TripPageData} from './trip-types'

const image = (src: string, alt: string): TripImage => ({src, alt})

/** Keeps the designed page available until the matching Trip is published. */
export const serengetiTripFallback: TripPageData = {
  _id: 'fallback-serengeti-adventure',
  title: '4 Nights Serengeti Adventure',
  slug: 'serengeti-adventure',
  tripType: 'private-safari',
  badge: 'best-seller',
  coverImage: image(detailAssets.heroSavannah, 'Lion on the Serengeti plains'),
  summary: "A private safari through Tanzania's most iconic wilderness—wildlife encounters, golden horizons, and unforgettable game drives designed exactly around how you want to travel.",
  days: 5,
  nights: 4,
  startingPrice: 1650,
  atAGlance: ['private-4x4-safari', 'serengeti', 'all-inclusive', 'adventure'],
  overview: "This private journey takes you deep into the world's most famous wildlife sanctuary. With your own private vehicle and dedicated local guide, explore the endless plains at your own pace, tracking the Great Migration, searching for the Big Five, and resting in beautiful authentic bush camps.",
  highlights: [
    'Private guide and dedicated 4×4 safari vehicle',
    '100% customizable daily game-drive schedules',
    'Handpicked tented camps in migration hot-spots',
    'Gateway assistance from Arusha to departure',
  ],
  itinerary: [
    {_key: 'day-1', locations: ['arusha'], description: 'Touch down at Kilimanjaro International Airport. Your private guide meets you and transfers you to your peaceful lodge before the trip briefing.', activities: ['arrival', 'airport-transfer', 'free-time'], meals: ['dinner'], overnightType: 'hotel', accommodationName: 'Gran Melia Arusha'},
    {_key: 'day-2', locations: ['serengeti'], description: 'Travel to the legendary Serengeti and begin your first game drive as golden light settles over the savannah.', activities: ['domestic-flight', 'afternoon-game-drive', 'sundowner'], meals: ['breakfast', 'lunch', 'dinner'], overnightType: 'tented-camp', accommodationName: 'Serengeti Acacia Bliss Camp'},
    {_key: 'day-3', locations: ['serengeti'], description: 'Explore the vast plains in search of lions, elephants, giraffes, leopards, and the seasonal Great Migration herds.', activities: ['full-day-game-drive', 'bush-lunch'], meals: ['breakfast', 'lunch', 'dinner'], overnightType: 'tented-camp', accommodationName: 'Serengeti safari camp'},
    {_key: 'day-4', locations: ['serengeti'], description: 'Choose an optional sunrise balloon flight, then continue with wildlife drives, sundowners, and a final campfire dinner.', activities: ['balloon-safari', 'full-day-game-drive', 'sundowner', 'bush-dinner'], meals: ['breakfast', 'lunch', 'dinner'], overnightType: 'tented-camp', accommodationName: 'Serengeti safari camp'},
    {_key: 'day-5', locations: ['serengeti', 'arusha'], description: 'Take a final early-morning wildlife drive before flying or driving onward to Arusha, with extensions available on request.', activities: ['morning-game-drive', 'departure-transfer', 'optional-extension'], meals: ['breakfast'], overnightType: 'no-overnight'},
  ],
  seasonalRates: [
    {_key: 'low', season: 'low', months: ['apr', 'may'], priceForTwo: 1720, priceForFour: 1480, priceForSixPlus: 1350},
    {_key: 'mid', season: 'mid', months: ['jan', 'feb', 'mar', 'nov'], priceForTwo: 1890, priceForFour: 1650, priceForSixPlus: 1510},
    {_key: 'peak', season: 'peak', months: ['jun', 'jul', 'aug', 'sep', 'oct', 'dec'], priceForTwo: 2250, priceForFour: 1950, priceForSixPlus: 1820},
  ],
  included: ['private-4x4', 'professional-guide', 'airport-transfers', 'park-fees', 'concession-fees', 'full-board-meals', 'accommodation', 'unlimited-game-drives', 'bottled-water'],
  extraIncluded: [],
  excluded: ['international-flights', 'visa-fees', 'travel-insurance', 'tips-gratuities', 'balloon-safari', 'alcoholic-drinks', 'laundry'],
  extraExcluded: [],
  accommodationOptions: [
    {_key: 'classic-stay', level: 'classic', image: image(detailAssets.lodgeClassic, 'Classic safari tent beside an acacia tree at dusk'), description: 'Immerse yourself in nature in our authentic luxury walk-in tents. Enjoy comfortable real beds, ensuite bathrooms with hot bucket showers, and cool evenings spent around the campfire.', packageNote: 'Featured in our standard package'},
    {_key: 'comfort-stay', level: 'comfort', image: image(detailAssets.lodgeComfort, 'Comfort safari lodge with a pool overlooking the Serengeti'), description: 'Handpicked stylish stone and timber safari lodges. Features beautiful infinity pools overlooking savannah valleys, robust amenities, panoramic restaurant views, and complete protection from the elements.', packageNote: 'Optional upgrade from +$150/night'},
    {_key: 'luxury-stay', level: 'luxury', image: image(detailAssets.lodgePremium, 'Premium safari camp deck looking over the Serengeti at sunset'), description: 'For the ultimate wilderness indulgence. Intimate permanent camps built on elevated timber decks, with private plunge pools, gourmet dining, butler service, and direct wildlife migration paths.', packageNote: 'Premium upgrade from +$450/night'},
  ],
  gallery: [
    image(detailAssets.galleryOne, 'Leopard resting in a tree'),
    image(detailAssets.galleryTwo, 'Sunset game drive'),
    image(detailAssets.galleryThree, 'Great Migration herd'),
  ],
  relatedTrips: [],
}
