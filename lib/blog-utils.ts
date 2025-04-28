import { blogPosts } from "./data"

export function getAllPostSlugs() {
  return Object.keys(blogPosts)
}

export function getPostData(slug: string) {
  return blogPosts[slug]
}

export function getAllPosts() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
    ...blogPosts[slug],
  }))
}
