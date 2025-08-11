import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPost, getLatestPosts, blogPosts } from '@/lib/blog-data'
import { Calendar, User, ChevronLeft, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Стаття не знайдена',
    }
  }

  return {
    title: `${post.title} | Блог Ліхтенфельд`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const otherPosts = getLatestPosts(3).filter(p => p.id !== post.id)

  return (
    <article className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-primary-200">Головна</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/blog" className="hover:text-primary-200">Блог</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-primary-100 truncate max-w-xs">{post.title}</li>
            </ol>
          </nav>
          
          <Link 
            href="/blog" 
            className="inline-flex items-center text-primary-100 hover:text-white mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Повернутися до блогу
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-primary-100">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('uk-UA', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            {post.category && (
              <span className="bg-primary-700 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            {/* Featured Image */}
            {post.image && (
              <div className="relative h-96 mb-8 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-20">📰</span>
                </div>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg prose-neutral max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-4">
                Поділитися статтею:
              </h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://lichtenfeld.com.ua/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(`https://lichtenfeld.com.ua/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {otherPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">
                Інші статті
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPosts.slice(0, 2).map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer">
                      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                        <span>{new Date(relatedPost.date).toLocaleDateString('uk-UA')}</span>
                        <span>•</span>
                        <span>{relatedPost.author}</span>
                      </div>
                      <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <span className="inline-flex items-center text-primary-600 text-sm font-semibold group">
                        Читати далі
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}