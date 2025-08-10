import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products-data'

export default function GoatCheesePage() {
  const goatCheeses = products.filter(p => p.category === 'goat-cheese')

  return (
    <div className="min-h-screen bg-cream-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 font-serif text-center">
          Козині сири
        </h1>
        <p className="text-lg text-neutral-600 mb-8 text-center">
          Каталонські та іспанські рецепти з особливим характером
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goatCheeses.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.available && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                        Немає в наявності
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-neutral-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-neutral-600 mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{product.price}</span>
                    {product.available && (
                      <span className="text-xs text-green-600 font-medium">В наявності</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-6">
          <h2 className="text-xl font-bold text-neutral-900 mb-4 font-serif">Про наші козині сири</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary-600 mb-2">Особливості козиних сирів</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Молоко від Зааненських та Нубійських кіз</li>
                <li>• Більш виражений смак та аромат</li>
                <li>• Традиційні каталонські рецепти</li>
                <li>• Витримка від 3 місяців</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary-600 mb-2">Унікальні технології</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Винне плавання протягом 4 тижнів</li>
                <li>• Холодне копчення 2 тижні</li>
                <li>• Натуральна пліснява</li>
                <li>• Ручна робота на всіх етапах</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-cheese-yellow/20 rounded-lg">
            <p className="text-sm text-neutral-700">
              <strong>Цікавий факт:</strong> Козині сири легше засвоюються організмом та містять менше лактози, 
              що робить їх ідеальними для людей з чутливим травленням.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}