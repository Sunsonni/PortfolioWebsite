import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client.js'

const builder = createImageUrlBuilder(client)

/**
 * Build a CDN URL for a Sanity image reference.
 * Always chain .width()/.height() so you request only the size you render.
 */
export const urlFor = (source) => builder.image(source)
