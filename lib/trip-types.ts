import type {TripType} from './trip-options'

export type TripImage = {
  _key?: string
  src?: string
  alt: string
  asset?: {
    _id: string
    url: string
  } | null
  crop?: {
    _type?: 'sanity.imageCrop'
    top: number
    bottom: number
    left: number
    right: number
  } | null
  hotspot?: {
    _type?: 'sanity.imageHotspot'
    x: number
    y: number
    height: number
    width: number
  } | null
}

export type RelatedTrip = {
  _id: string
  title: string
  slug: string
  tripType: TripType
  coverImage: TripImage | null
  days: number
  nights: number
  startingPrice: number
}

/** The small, editor-friendly content contract for a separate trip page. */
export type TripPageData = {
  _id: string
  _updatedAt?: string
  title: string
  slug: string
  tripType: TripType
  badge?: string | null
  coverImage: TripImage | null
  summary: string
  days: number
  nights: number
  startingPrice: number
  itineraryPdfUrl?: string | null
  atAGlance: string[]
  overview: string
  highlights: string[]
  itinerary: Array<{
    _key: string
    locations: string[]
    description: string
    activities: string[]
    meals: string[]
    overnightType: string
    accommodationName?: string | null
  }>
  seasonalRates: Array<{
    _key: string
    season: string
    months: string[]
    customLabel?: string | null
    priceForTwo: number
    priceForFour: number
    priceForSixPlus: number
  }>
  included: string[]
  extraIncluded: string[]
  excluded: string[]
  extraExcluded: string[]
  accommodationOptions: Array<{
    _key: string
    level: string
    image: TripImage | null
    description: string
    packageNote?: string | null
  }>
  gallery: TripImage[]
  relatedTrips: RelatedTrip[]
}
