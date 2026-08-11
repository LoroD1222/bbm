import {defineQuery} from 'next-sanity'

export const TRIP_BY_SLUG_QUERY = defineQuery(`
  *[_type == "trip" && slug.current == $slug][0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    tripType,
    badge,
    coverImage {asset->{_id, url}, alt, hotspot, crop},
    summary,
    days,
    nights,
    startingPrice,
    "itineraryPdfUrl": itineraryPdf.asset->url,
    atAGlance,
    overview,
    highlights,
    itinerary[] {
      _key,
      locations,
      description,
      activities,
      "meals": coalesce(meals, []),
      overnightType,
      accommodationName
    },
    seasonalRates[] {
      _key,
      season,
      months,
      customLabel,
      priceForTwo,
      priceForFour,
      priceForSixPlus
    },
    included,
    "extraIncluded": coalesce(extraIncluded, []),
    "excluded": coalesce(excluded, []),
    "extraExcluded": coalesce(extraExcluded, []),
    "accommodationOptions": coalesce(accommodationOptions[] {
      _key,
      level,
      image {asset->{_id, url}, alt, hotspot, crop},
      description,
      packageNote
    }, []),
    "gallery": coalesce(gallery[] {
      _key,
      asset->{_id, url},
      alt,
      hotspot,
      crop
    }, [])
  }
`)

export const RELATED_TRIPS_BY_TYPE_QUERY = defineQuery(`
  *[
    _type == "trip" &&
    _id != $id &&
    tripType == $tripType &&
    defined(slug.current)
  ] | order(_createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    tripType,
    coverImage {asset->{_id, url}, alt, hotspot, crop},
    days,
    nights,
    startingPrice
  }
`)

export const TRIPS_FOR_LIST_QUERY = defineQuery(`
  *[_type == "trip" && defined(slug.current)] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    tripType,
    badge,
    summary,
    days,
    nights,
    startingPrice,
    "imageUrl": coverImage.asset->url
  }
`)

export const TRIP_SLUGS_QUERY = defineQuery(`
  *[_type == "trip" && defined(slug.current)][]{"slug": slug.current}
`)
