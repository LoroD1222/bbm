import type {Metadata} from 'next'
import {cache} from 'react'
import {TripDetail} from '@/components/trip-detail'
import {serengetiTripFallback} from '@/lib/serengeti-trip'
import {tripImageUrl} from '@/lib/sanity-image'
import {getTripBySlug} from '@/lib/trip-data'

const getSerengetiTrip = cache(async () => {
  try {
    return (await getTripBySlug('serengeti-adventure')) ?? serengetiTripFallback
  } catch (error) {
    console.error('Unable to load the Serengeti trip from Sanity; using the local fallback.', error)
    return serengetiTripFallback
  }
})

export async function generateMetadata(): Promise<Metadata> {
  const trip = await getSerengetiTrip()
  const socialImage = trip.coverImage
  const socialImageUrl = socialImage ? tripImageUrl(socialImage, 1200, 630) : null

  return {
    title: `${trip.title} | BBM Safaris`,
    description: trip.summary,
    openGraph: {
      title: trip.title,
      description: trip.summary,
      images: socialImageUrl?.startsWith('https://')
        ? [{url: socialImageUrl, alt: socialImage?.alt ?? ''}]
        : undefined,
    },
  }
}

export default async function SerengetiAdventurePage() {
  return <TripDetail trip={await getSerengetiTrip()} />
}
