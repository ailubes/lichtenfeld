import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-data'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог | Органічна ферма Ліхтенфельд',
  description: 'Новини ферми, історії про сироваріння, поради та рецепти від Олександра Доброжанського',
  openGraph: {
    title: 'Блог ферми Ліхтенфельд',
    description: 'Історії з життя органічної ферми',
  },
}

export default function BlogPage() {
  const sortedPosts = blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Блог ферми
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Історії з життя ферми, секрети сироваріння, новини та корисні поради
          </p>
          {/* Breadcrumbs */}
          <nav className="mt-6 text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-primary-200">Головна</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-primary-100">Блог</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Post */}
        {sortedPosts[0] && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">
              Головна стаття
            </h2>
            <Link href={`/blog/${sortedPosts[0].slug}`}>
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">📰</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(sortedPosts[0].date).toLocaleDateString('uk-UA')}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {sortedPosts[0].author}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 font-serif">
                      {sortedPosts[0].title}
                    </h3>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {sortedPosts[0].excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-semibold group">
                      Читати далі
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        )}

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full">
                <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-30">📝</span>
                  </div>
                  {post.category && (
                    <span className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('uk-UA')}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 text-sm font-semibold">
                    Читати →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif">
            Слідкуйте за новинами
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Підписуйтесь на наші соціальні мережі, щоб першими дізнаватися про нові статті, 
            продукти та акції
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.facebook.com/organicfarmlichtenfeld"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://t.me/organicfarmlichtenfeld"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://www.instagram.com/lichtenfeld_farm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}