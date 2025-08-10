import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products-data'
import { cn } from '@/lib/utils'
import { ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={cn('group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300', className)}>
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-cream to-cheese-yellow">
          {product.images && product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">🧀</span>
            </div>
          )}
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.badges.slice(0, 2).map((badge, index) => (
              <span
                key={index}
                className={cn(
                  'px-2 py-1 text-xs font-medium rounded-full',
                  badge === 'Обмежена партія' || badge === 'limited'
                    ? 'bg-orange-100 text-orange-700'
                    : badge === 'Новинка'
                    ? 'bg-green-100 text-green-700'
                    : badge === 'Копчений'
                    ? 'bg-amber-100 text-amber-700'
                    : badge === 'У вині'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-primary-100 text-primary-700'
                )}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Status indicator */}
          {product.status === 'limited' && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                Обмежено
              </span>
            </div>
          )}
          {product.status === 'out' && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 bg-neutral-500 text-white text-xs font-medium rounded-full">
                Немає
              </span>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-lg text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
            {product.title}
          </h3>
          {product.titleEn && (
            <p className="text-sm text-neutral-500 mb-2">{product.titleEn}</p>
          )}
          <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                {product.price}
              </span>
              <span className="text-sm text-neutral-500 ml-1">
                {product.priceUnit}
              </span>
            </div>
            
            <button
              className={cn(
                'p-2 rounded-full transition-all',
                product.status === 'out'
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white'
              )}
              disabled={product.status === 'out'}
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}