import { getAllPostSlugs, getPostData } from "@/lib/blog-utils"
import BlogPostClient from "./BlogPostClient"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} slug={params.slug} />
}
