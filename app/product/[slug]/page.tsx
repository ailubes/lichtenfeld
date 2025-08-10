import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products-data'
import { Phone, MessageCircle, ChevronLeft } from 'lucide-react'

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  
  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.category.includes(product.category[0]) && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-cream-light">
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/catalog" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Повернутися до каталогу
        </Link>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl p-6 md:p-8">
          {/* Product Image */}
          <div className="relative h-96 md:h-full min-h-[400px]">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
            {product.status === 'out' && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                <span className="bg-white px-4 py-2 rounded-lg text-lg font-semibold">
                  Немає в наявності
                </span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2 font-serif">
              {product.title}
            </h1>
            {product.titleEn && (
              <p className="text-lg text-neutral-500 mb-4">{product.titleEn}</p>
            )}
            
            <div className="mb-6">
              <span className="text-3xl font-bold text-primary-600">{product.price}</span>
              {product.weight && (
                <span className="text-neutral-600 ml-2">/ {product.weight}</span>
              )}
            </div>

            <div className="mb-6">
              {product.status !== 'out' ? (
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  В наявності
                </span>
              ) : (
                <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium">
                  Немає в наявності
                </span>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-neutral-900 mb-3">Опис</h2>
              <p className="text-neutral-600 leading-relaxed">{product.longDescription}</p>
            </div>



            {/* Order Actions */}
            {product.status !== 'out' && (
              <div className="border-t pt-6">
                <p className="text-neutral-600 mb-4">
                  Для замовлення зв'яжіться з нами:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+380671328859"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Зателефонувати
                  </a>
                  <a
                    href="https://wa.me/380671328859"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-serif">
              Схожі продукти
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.slug} href={`/product/${relatedProduct.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-lg font-bold text-primary-600">
                        {relatedProduct.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}