import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products-data'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Каталог сирів та напоїв | Органічна ферма Ліхтенфельд',
  description: 'Купити органічні сири та алкогольні напої від ферми Ліхтенфельд. Швейцарські сири, козині сири, плісняві сири, абсент, джин, бурбон. Доставка по всій Україні.',
  keywords: 'купити сир україна, органічний сир, козиний сир, швейцарський сир, грюйєр, чеддер, стілтон, абсент, джин, бурбон, крафтові напої',
  openGraph: {
    title: 'Каталог продукції | Ліхтенфельд',
    description: 'Органічні сири та напої від української ферми',
    images: ['/images/products/cheese-lichtenfeld-gruyere-1.jpg'],
  },
}

export default function CatalogPage() {
  const cheeseSets = products.filter(p => p.category.includes('set'))
  const cowCheeses = products.filter(p => p.category.includes('cow-hard'))
  const goatCheeses = products.filter(p => p.category.includes('goat'))
  const spirits = products.filter(p => p.category.includes('drink'))

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
            Каталог продукції
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Органічні сири та напої від ферми Ліхтенфельд. Традиційні рецепти, 
            ручна робота, натуральні інгредієнти.
          </p>
          {/* Breadcrumbs */}
          <nav className="mt-6 text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-primary-200">Головна</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-primary-100">Каталог</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <a href="#sets" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            🧀 Сирні сети
          </a>
          <a href="#cow" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            🐄 Коров'ячі сири
          </a>
          <a href="#goat" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            🐐 Козині сири
          </a>
          <a href="#spirits" className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            🥃 Алкогольні напої
          </a>
        </div>

        {/* Cheese Sets */}
        <section id="sets" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 font-serif">
              Сирні сети
            </h2>
            <span className="text-sm text-neutral-600">{cheeseSets.length} товарів</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheeseSets.map((product) => (
              <article key={product.slug} itemScope itemType="https://schema.org/Product">
                <Link href={`/product/${product.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                    <div className="relative h-56 w-full">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.status === 'out' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                            Немає в наявності
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-neutral-900 mb-2" itemProp="name">
                        {product.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3 line-clamp-2" itemProp="description">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <span className="text-xl font-bold text-primary-600" itemProp="price">
                            {product.price}
                          </span>
                          <meta itemProp="priceCurrency" content="UAH" />
                        </div>
                        {product.status !== 'out' && (
                          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                            В наявності
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Cow Cheeses */}
        <section id="cow" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 font-serif">
              Коров'ячі сири
            </h2>
            <span className="text-sm text-neutral-600">{cowCheeses.length} товарів</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cowCheeses.map((product) => (
              <article key={product.slug} itemScope itemType="https://schema.org/Product">
                <Link href={`/product/${product.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.status === 'out' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                            Немає в наявності
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-neutral-900 mb-1" itemProp="name">
                        {product.title}
                      </h3>
                      {product.titleEn && (
                        <p className="text-xs text-neutral-500 mb-2">{product.titleEn}</p>
                      )}
                      <p className="text-xs text-neutral-600 mb-2 line-clamp-2" itemProp="description">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <span className="text-lg font-bold text-primary-600" itemProp="price">
                            {product.price}
                          </span>
                          <meta itemProp="priceCurrency" content="UAH" />
                        </div>
                        {product.status !== 'out' && (
                          <span className="text-xs text-green-600 font-medium">✓</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Goat Cheeses */}
        <section id="goat" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 font-serif">
              Козині сири
            </h2>
            <span className="text-sm text-neutral-600">{goatCheeses.length} товарів</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goatCheeses.map((product) => (
              <article key={product.slug} itemScope itemType="https://schema.org/Product">
                <Link href={`/product/${product.slug}`}>
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.status === 'out' && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-white px-3 py-1 rounded-lg text-sm font-semibold">
                            Немає в наявності
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-neutral-900 mb-1" itemProp="name">
                        {product.title}
                      </h3>
                      {product.titleEn && (
                        <p className="text-xs text-neutral-500 mb-2">{product.titleEn}</p>
                      )}
                      <p className="text-xs text-neutral-600 mb-2 line-clamp-3" itemProp="description">
                        {product.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <span className="text-lg font-bold text-primary-600" itemProp="price">
                            {product.price}
                          </span>
                          <meta itemProp="priceCurrency" content="UAH" />
                        </div>
                        {product.status !== 'out' && (
                          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                            В наявності
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Spirits */}
        <section id="spirits" className="mb-12">
          <div className="bg-neutral-900 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif">
                Алкогольні напої
              </h2>
              <span className="text-sm text-neutral-400">{spirits.length} товарів</span>
            </div>
            <p className="text-neutral-300 mb-8 max-w-3xl">
              Авторські дистиляти та настоянки за старовинними рецептами. Абсент за французьким рецептом 1872 року, 
              джин за рецептом Томаса Дакіна 1761 року, бурбон на карпатському дубі.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spirits.map((product) => (
                <article key={product.slug} itemScope itemType="https://schema.org/Product">
                  <Link href={`/product/${product.slug}`}>
                    <div className="bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-all duration-300 overflow-hidden cursor-pointer group">
                      <div className="relative h-56 bg-gradient-to-br from-neutral-700 to-neutral-900">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          className="object-contain p-6"
                        />
                        {product.status === 'out' && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="bg-white text-neutral-900 px-3 py-1 rounded-lg text-sm font-semibold">
                              Немає в наявності
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg mb-1" itemProp="name">
                          {product.title}
                        </h3>
                        {product.titleEn && (
                          <p className="text-sm text-neutral-400 mb-2">{product.titleEn}</p>
                        )}
                        <p className="text-sm text-neutral-300 mb-3 line-clamp-3" itemProp="description">
                          {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                            <span className="text-xl font-bold text-cheese-golden" itemProp="price">
                              {product.price}
                            </span>
                            <meta itemProp="priceCurrency" content="UAH" />
                          </div>
                          {product.weight && (
                            <span className="text-sm text-neutral-400">{product.weight}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif">
            Про нашу продукцію
          </h2>
          <div className="prose prose-neutral max-w-none">
            <p>
              Органічна ферма "Ліхтенфельд" пропонує широкий асортимент натуральних сирів та алкогольних напоїв 
              власного виробництва. Всі наші продукти виготовляються вручну за традиційними рецептами з використанням 
              тільки екологічних інгредієнтів.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Наші сири</h3>
            <p>
              Ми виробляємо понад 20 видів сирів: від класичних швейцарських твердих сортів до вишуканих плісняви сирів. 
              Використовуємо непастеризоване молоко від місцевих фермерів, що дозволяє зберегти всі корисні властивості 
              та отримати насичений смак.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Алкогольні напої</h3>
            <p>
              Наші дистиляти та настоянки виготовляються за автентичними рецептами XVIII-XIX століть. Абсент "Ван Гог" 
              за французьким рецептом Dale Pendell's Pharmako/Poeia 1872 року, джин у стилі Bombay Sapphire за рецептом 
              Томаса Дакіна 1761 року, бурбон на карпатському дубі.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}