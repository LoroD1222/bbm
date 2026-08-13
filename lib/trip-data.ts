import {cache} from 'react'
import type {Journey} from './journeys'
import {RELATED_TRIPS_BY_TYPE_QUERY, TRIP_BY_SLUG_QUERY, TRIP_SLUGS_QUERY, TRIPS_FOR_LIST_QUERY} from './queries'
import {client} from './sanity'
import type {TripType} from './trip-options'
import type {TripPageData} from './trip-types'
import type {TRIPS_FOR_LIST_QUERY_RESULT} from '../sanity.types'

export const getTripBySlug = cache(async (slug: string): Promise<TripPageData | null> => {
  const trip = await client.fetch(
    TRIP_BY_SLUG_QUERY,
    {slug},
    {cache: 'no-store'},
  )

  if (!trip) return null

  const relatedTrips = await client.fetch(
    RELATED_TRIPS_BY_TYPE_QUERY,
    {id: trip._id, tripType: trip.tripType},
    {cache: 'no-store'},
  )

  return {...trip, relatedTrips}
})

export async function getTripSlugs() {
  return client.fetch(
    TRIP_SLUGS_QUERY,
    {},
    {cache: 'no-store'},
  )
}

const badgeLabel: Record<string, string> = {
  'best-seller': 'Best Seller',
  new: 'New',
  'family-favourite': 'Family Favourite',
  'luxury-pick': 'Luxury Pick',
}

/** The catalogue is Sanity-backed. An outage must not reintroduce retired trip content. */
export const getTripsForList = cache(async (): Promise<readonly Journey[]> => {
  try {
    const trips = await client.fetch<TRIPS_FOR_LIST_QUERY_RESULT>(
      TRIPS_FOR_LIST_QUERY,
      {},
      {cache: 'no-store'},
    )

    return trips.map((trip) => ({
      slug: trip.slug,
      category: trip.tripType as TripType,
      tag: trip.badge ? badgeLabel[trip.badge] : undefined,
      duration: `${trip.days} ${trip.days === 1 ? 'Day' : 'Days'} / ${trip.nights} ${trip.nights === 1 ? 'Night' : 'Nights'}`,
      title: trip.title,
      description: trip.summary,
      price: `${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(trip.startingPrice)} USD`,
      image: trip.imageUrl ?? undefined,
    }))
  } catch (error) {
    console.error('Unable to load Sanity trips for the catalogue.', error)
    return []
  }
})
