import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products-data'

export default function CheeseSetsPage() {
  const cheeseSets = products.filter(p => p.category === 'cheese-sets')

  return (
    <div className="min-h-screen bg-cream-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 font-serif text-center">
          Сирні сети
        </h1>
        <p className="text-lg text-neutral-600 mb-8 text-center">
          Ідеальний вибір для знайомства з нашими сирами
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cheeseSets.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group">
                <div className="relative h-64 w-full">
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
                <div className="p-6">
                  <h3 className="font-bold text-xl text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-neutral-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                    {product.available && (
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Замовити
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-neutral-900 mb-4 font-serif">Про наші сирні сети</h2>
          <div className="space-y-3 text-neutral-600">
            <p>
              <strong>Сирний сет "Му"</strong> - це 9 різновидів сирів з коров'ячого молока, включаючи тверді альпійські сири, 
              плісняві сири та копчені варіанти. Ідеально для великої компанії або для тих, хто хоче спробувати весь асортимент 
              наших коров'ячих сирів.
            </p>
            <p>
              <strong>Сирний сет "Мє"</strong> - це 6 різновидів козиних сирів, від класичної Гаррочі до унікального Аркоіріс. 
              Козині сири мають більш виражений смак та особливу текстуру, яка сподобається справжнім гурманам.
            </p>
            <p>
              Всі сири в сетах упаковані окремо та марковані. До кожного сету додається опис сирів та рекомендації щодо вживання.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}