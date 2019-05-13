export const get = slug => {
  if (process.env.reviews.includes(slug)) {
    return {
      ...require(`./${slug}`),
      img: require(`./${slug}/bg.jpg`),
      html: require(`./${slug}/content.md`)
    }
  }

  return {}
}

export const all = () => process.env.reviews.map(get)

export interface Content {
  html: string
  img: string
  meta: ContentMeta
  videos?: ContentVideo[]
}

export interface ContentVideo {
  title: string
  items: string[]
}

export interface ContentMeta {
  title: string
  rating: number
  slug?: string
  published?: Date
  style?: string[]
  types?: string[]
}

export default reviews
