import {createImageUrlBuilder, type SanityImageSource} from '@sanity/image-url'
import {dataset, projectId} from './sanity'
import type {TripImage} from './trip-types'

const builder = createImageUrlBuilder({projectId, dataset})

export function tripImageUrl(image: TripImage, width: number, height: number) {
  if (image.src) return image.src

  return builder
    .image(image as SanityImageSource)
    .width(width)
    .height(height)
    .fit('crop')
    .auto('format')
    .url()
}
