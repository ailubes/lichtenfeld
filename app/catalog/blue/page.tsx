import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/lib/products-data'

export default function BlueCheesePage() {
  const blueCheeses = products.filter(p => 
    p.name.toLowerCase().includes('альбіон') || 
    p.name.toLowerCase().includes('камбоцола') ||
    p.name.toLowerCase().includes('кабралес') ||
    p.name.toLowerCase().includes('аркоіріс')
  )

  return (
    <div className="min-h-screen bg-cream-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 font-serif text-center">
          Плісняві сири
        </h1>
        <p className="text-lg text-neutral-600 mb-8 text-center">
          Для справжніх гурманів та любителів насиченого смаку
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blueCheeses.map((product) => (
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
          <h2 className="text-xl font-bold text-neutral-900 mb-4 font-serif">Про плісняві сири</h2>
          <div className="space-y-4 text-neutral-600">
            <p>
              Плісняві сири - це вершина сироварського мистецтва. Вони вимагають особливих умов дозрівання 
              та ретельного контролю на кожному етапі виробництва.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary-600 mb-2">Наші плісняві сири</h3>
                <ul className="space-y-2">
                  <li>• <strong>Альбіон</strong> - класичний стілтон з коров'ячого молока</li>
                  <li>• <strong>Камбоцола</strong> - ніжний сир з декількома видами плісняви</li>
                  <li>• <strong>Кабралес</strong> - іспанський блакитний сир з козиного молока</li>
                  <li>• <strong>Аркоіріс</strong> - унікальний козиний сир, вимочений у вині</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary-600 mb-2">Як подавати</h3>
                <ul className="space-y-2">
                  <li>• З медом та горіхами</li>
                  <li>• З грушами або виноградом</li>
                  <li>• З червоним вином або портвейном</li>
                  <li>• На крекерах або свіжому хлібі</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>Порада:</strong> Дайте сиру "подихати" 20-30 хвилин при кімнатній температурі 
                перед подачею - це розкриє весь букет смаків та ароматів.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}