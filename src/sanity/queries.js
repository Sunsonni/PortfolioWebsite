import groq from 'groq'

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage
  }
`

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    body
  }
`

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    link,
    mainImage,
    tags
  }
`

export const PROJECT_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    link,
    mainImage,
    tags
  }
`
