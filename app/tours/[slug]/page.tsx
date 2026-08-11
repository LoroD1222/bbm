import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {TripDetail} from '@/components/trip-detail'
import {tripImageUrl} from '@/lib/sanity-image'
import {getTripBySlug, getTripSlugs} from '@/lib/trip-data'

type TripPageProps = {
  params: Promise<{slug: string}>
}

export async function generateStaticParams() {
  try {
    return await getTripSlugs()
  } catch (error) {
    console.error('Unable to pre-render Sanity trip slugs.', error)
    return []
  }
}

export async function generateMetadata({params}: TripPageProps): Promise<Metadata> {
  const {slug} = await params
  const trip = await getTripBySlug(slug)
  if (!trip) return {}
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

export default async function TripPage({params}: TripPageProps) {
  const {slug} = await params
  const trip = await getTripBySlug(slug)
  if (!trip) notFound()

  return <TripDetail trip={trip} />
}
