import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4 text-primary-400">Lichtenfeld</h3>
            <p className="text-neutral-300 mb-4">
              Справжні сири від майстра-сировара Олександра Доброжанського
            </p>
            <p className="text-sm text-neutral-400 italic">
              "Я роблю сири так, як робили майстри в Альпах та Британії сотні років тому"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Каталог</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/sets" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Сирні сети
                </Link>
              </li>
              <li>
                <Link href="/catalog/cow" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Коров'ячі сири
                </Link>
              </li>
              <li>
                <Link href="/catalog/goat" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Козині сири
                </Link>
              </li>
              <li>
                <Link href="/catalog/blue" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  Плісняві сири
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Контакти</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-primary-400" />
                <div>
                  <a href="tel:+380671328859" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    067 132 8859
                  </a>
                  <br />
                  <a href="tel:+380961314758" className="text-neutral-300 hover:text-primary-400 transition-colors">
                    096 131 4758
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-primary-400" />
                <a href="mailto:info@lichtenfeld.com.ua" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  info@lichtenfeld.com.ua
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Адреса ферми</h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 mt-1 text-primary-400 flex-shrink-0" />
              <p className="text-neutral-300">
                вул. Квіткова 7,<br />
                с. Кудрявка,<br />
                Березівський район,<br />
                Одеська область, 67310
              </p>
            </div>
            <div className="mt-4 flex items-start space-x-2">
              <Clock className="w-4 h-4 mt-1 text-primary-400" />
              <p className="text-neutral-300">
                Пн-Сб: 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Lichtenfeld. Всі права захищені.
            </p>
            <p className="text-neutral-500 text-sm mt-4 md:mt-0">
              Зараз ферму веде дружина Олена, поки Олександр захищає країну
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}