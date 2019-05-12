import slugify from 'slugify'

import * as wow from './world-of-warcraft.mdx'

const content = [wow].map((c: Content) => ({
  ...c,
  meta: {
    ...c.meta,
    slug: slugify((c.meta.title || '').toLowerCase())
  }
}))

export const get = slug => content.find(c => c.meta.slug === slug)

export interface Content {
  default: (props) => JSX.Element
  meta: ContentMeta
  videos?: ContentVideo[]
}

export interface ContentVideo {
  title: string
  items: string[]
}

export interface ContentMeta {
  title: string
  img: string
  rating: number
  slug?: string
  published?: Date
  style?: string[]
  types?: string[]
}

export default content
