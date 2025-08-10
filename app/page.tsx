import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts, products } from '@/lib/products-data'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Award, Truck, Shield } from 'lucide-react'

export default function Home() {
  const featuredProducts = getFeaturedProducts()
  const cheeseSets = products.filter(p => p.category.includes('set'))
  const spirits = products.filter(p => p.category.includes('drink'))

  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, background: 'red', color: 'white', padding: '10px' }}>
        Debug: Main page rendered
      </div>
      <Hero />

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-900 mb-4">
              Популярне з сиросховища
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Найулюбленіші сири наших клієнтів - від класичного Чеддера до унікального копченого Рамсеса
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredProducts.slice(0, 10).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/catalog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
            >
              Переглянути всі сири
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cheese Sets */}
      <section className="section-padding bg-gradient-to-br from-cream-light to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-900 mb-4">
              Сирні сети для знайомства
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Ідеальний спосіб спробувати різноманіття наших сирів
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cheeseSets.map((set) => (
              <div key={set.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-cheese-yellow to-cheese-golden flex items-center justify-center">
                  <span className="text-8xl opacity-50">
                    {set.slug === 'mu-set' ? '🐄' : '🐐'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-serif text-neutral-900 mb-2">
                    {set.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {set.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary-600">
                      {set.price} грн
                    </span>
                    <Link
                      href={`/product/${set.slug}`}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Детальніше
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spirits Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Алкогольні напої
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Авторські настоянки та дистиляти за старовинними рецептами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spirits.map((spirit) => (
              <Link key={spirit.slug} href={`/product/${spirit.slug}`}>
                <div className="bg-neutral-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="relative h-64 bg-gradient-to-br from-neutral-700 to-neutral-900">
                    <Image
                      src={spirit.images[0]}
                      alt={spirit.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-8"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif mb-2">
                      {spirit.title}
                    </h3>
                    {spirit.titleEn && (
                      <p className="text-neutral-400 text-sm mb-3">{spirit.titleEn}</p>
                    )}
                    <p className="text-neutral-300 text-sm mb-4 line-clamp-2">
                      {spirit.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cheese-golden">
                        {spirit.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/catalog#spirits"
              className="inline-flex items-center text-cheese-golden hover:text-cheese-yellow font-semibold group"
            >
              Переглянути всі напої
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-900 mb-6">
                Філософія майстра
              </h2>
            </div>

            <div className="bg-cream-light rounded-2xl p-8 md:p-12">
              <blockquote className="text-lg md:text-xl text-neutral-700 italic leading-relaxed mb-6">
                "Я роблю сири так, як робили майстри в Альпах та Британії за сотні років до народження 
                Луї Пастера та кокосової олії. Я не використовую промислового обладнання. 
                Тільки сировар, котел, весло, молоко, мій досвід та натхнення"
              </blockquote>
              <p className="text-right text-neutral-600 font-medium">
                — Олександр Доброжанський, майстер-сировар
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥛</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Тільки натуральне</h3>
                <p className="text-neutral-600">
                  Свіже молоко, сичужний фермент, сіль. Нічого зайвого
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👐</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Ручна робота</h3>
                <p className="text-neutral-600">
                  4 години ручного чеддерінгу, без промислового обладнання
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⏳</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Час і терпіння</h3>
                <p className="text-neutral-600">
                  Витримка від 2 місяців до року для кожного сиру
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/about"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group"
              >
                Дізнатися більше про ферму
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-gradient-to-br from-white to-cream-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-900 mb-4">
              Що кажуть наші клієнти
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Найкращі сири в Україні! Чеддер просто неймовірний, нагадує справжній англійський. 
                Дякую за вашу працю!"
              </p>
              <p className="font-medium text-neutral-900">Марія К.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "Рамсес копчений - це щось неймовірне! Такого смаку я не зустрічав навіть у Європі. 
                Обов'язково замовлю ще!"
              </p>
              <p className="font-medium text-neutral-900">Андрій П.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-neutral-700 mb-4">
                "П'яна Горроча - мій фаворит! Козиний сир у вині - це геніально. 
                Дякую, що робите такі шедеври!"
              </p>
              <p className="font-medium text-neutral-900">Оксана Л.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-1">10+ років</h3>
              <p className="text-sm text-neutral-600">досвіду сироваріння</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-1">100%</h3>
              <p className="text-sm text-neutral-600">натуральні інгредієнти</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-1">Доставка</h3>
              <p className="text-sm text-neutral-600">по всій Україні</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold mb-1">500+</h3>
              <p className="text-sm text-neutral-600">задоволених клієнтів</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order - Real Information from Oleksandr */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Як ми працюємо
            </h2>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto">
              Умови оформлення замовлення, доставки та розрахунків
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">Важлива інформація від Олександра:</h3>
            <ul className="space-y-3 text-primary-100">
              <li>📌 Я не передзвоню для підтвердження - у мене немає відділу продаж 😊</li>
              <li>📌 Якщо отримали листа на email - замовлення у базі стопудово!</li>
              <li>📌 Відправка на наступний день після замовлення</li>
              <li>📌 Два види розрахунку: післяплата або на банківську картку</li>
              <li>📌 Відправляю "НА ДОВІРУ" - спочатку товар, потім оплата</li>
              <li>📌 Дружина розсилає SMS з номером ТТН та сумою до сплати</li>
              <li>📌 Сума у кошику НЕ дорівнює реальній вартості (зважую по факту)</li>
              <li>📌 Кожен сорт сиру підписаний</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Способи оплати:</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Картки для оплати:</p>
                <ul className="space-y-1 text-primary-100">
                  <li>💳 ПриватБанк: 5168 7520 1898 8694</li>
                  <li>💳 Monobank: 5375 4141 2085 3749</li>
                  <li>💳 Також приймаємо: Кредобанк, ПУМБ, Банк Восток</li>
                  <li>💳 PayPal для міжнародних платежів</li>
                  <li>💳 SWIFT (UAH, USD, EUR, PLN)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">Як сири переносять доставку:</h3>
              <div className="space-y-2 text-sm text-primary-100">
                <p>🧀 Мої сири спокійно переносять поїздку Новою поштою!</p>
                <p>Просте порівняння - сосиски та Хамон:</p>
                <p>• Сосиски псуються - Хамон ні. Чому?</p>
                <p>• У Хамоні час і печера сформували потужну мікрофлору</p>
                <p>• Мій сир - як Хамон. Його захищає жива флора!</p>
                <p className="font-semibold">6-й рік відправок Новою поштою без проблем!</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 inline-block">
              <p className="text-lg font-semibold mb-2">Питання? Дзвоніть або пишіть:</p>
              <p className="text-2xl font-bold mb-1">📞 067 132 88 59</p>
              <p className="text-sm">Олександр - завжди відповідаю!</p>
              <div className="flex gap-3 mt-4 justify-center">
                <a href="viber://chat?number=380671328859" className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
                  Viber
                </a>
                <a href="https://wa.me/380671328859" className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700">
                  WhatsApp
                </a>
                <a href="https://t.me/organicfarmlichtenfeld" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-neutral-900 mb-4">
              Про нас пишуть
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-neutral-600">Цензор.нет</div>
            <div className="text-2xl font-bold text-neutral-600">Agravery</div>
            <div className="text-2xl font-bold text-neutral-600">АрміяINFORM</div>
            <div className="text-2xl font-bold text-neutral-600">YouTube</div>
          </div>
        </div>
      </section>
    </>
  )
}