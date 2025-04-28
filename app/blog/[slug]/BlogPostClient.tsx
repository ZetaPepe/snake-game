"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerIn } from "@/components/animations/stagger-in"
import { ScrollFade } from "@/components/animations/scroll-fade"
import { PageTransition } from "@/components/animations/page-transition"

export default function BlogPostClient({ post, slug }: { post: any; slug: string }) {
  const { toast } = useToast()

  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : `https://yoursite.com/blog/${slug}`
    const text = `Check out this article: ${post.title}`

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        // Copy to clipboard
        if (typeof navigator !== "undefined") {
          navigator.clipboard.writeText(url)
          toast({
            title: "Link copied",
            description: "The article link has been copied to your clipboard.",
          })
        }
        return
    }

    if (shareUrl && typeof window !== "undefined") {
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <header className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Neural<span className="text-purple-500">Pulse</span>
            </Link>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-950 hover:text-white"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const newsletterSection = document.getElementById("newsletter")
                  if (newsletterSection) {
                    newsletterSection.scrollIntoView({ behavior: "smooth" })
                  } else {
                    window.location.href = "/#newsletter"
                  }
                }
              }}
            >
              Subscribe
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <Link href="/articles/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to articles
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 text-sm text-purple-500 mb-4">
                <BrainCircuit className="h-5 w-5" />
                <span>{post.category}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div>{post.date}</div>
                <div>By {post.author}</div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 mb-8">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Article hero image showing GAN-generated art"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex justify-between items-center mb-8">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                    onClick={() => handleShare("twitter")}
                  >
                    <Twitter className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                    onClick={() => handleShare("facebook")}
                  >
                    <Facebook className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                    onClick={() => handleShare("linkedin")}
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 border-gray-800 hover:bg-gray-900"
                  onClick={() => handleShare("clipboard")}
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </FadeIn>

            <ScrollFade>
              <article className="prose prose-invert prose-purple max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
            </ScrollFade>

            <ScrollFade>
              <div className="border-t border-gray-800 mt-12 pt-8">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <StaggerIn>
                  <div className="grid md:grid-cols-2 gap-6">
                    {post.relatedPosts.map((relatedPost, index) => (
                      <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Link href={`/blog/${relatedPost.slug}`} className="group">
                          <div className="space-y-3">
                            <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-purple-500/50 transition-colors">
                              <Image
                                src={relatedPost.image || "/placeholder.svg"}
                                alt={`${relatedPost.title} thumbnail`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 text-xs text-purple-500 mb-2">
                                <BrainCircuit className="h-4 w-4" />
                                <span>{relatedPost.category}</span>
                              </div>
                              <h3 className="font-medium group-hover:text-purple-400 transition-colors">
                                {relatedPost.title}
                              </h3>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </StaggerIn>
              </div>
            </ScrollFade>
          </div>
        </main>

        <footer className="border-t border-gray-800 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Link href="/" className="text-xl font-bold tracking-tighter">
                Neural<span className="text-purple-500">Pulse</span>
              </Link>
              <p className="text-gray-400 text-sm mt-4 mb-6">
                Exploring the cutting edge of artificial intelligence and machine learning.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} NeuralPulse. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  )
}
