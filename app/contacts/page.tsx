import { Phone, Mail, MapPin, MessageCircle, CreditCard } from 'lucide-react'

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-cream-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 font-serif text-center">
          Контакти
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-6 font-serif">
              Зв'язатися з нами
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900">Телефони</p>
                  <a href="tel:+380671328859" className="text-primary-600 hover:text-primary-700">
                    +380 67 132 88 59
                  </a>
                  <span className="text-neutral-600 text-sm"> - Олександр (сировар, засновник)</span>
                  <br/>
                  <a href="tel:+380961314758" className="text-primary-600 hover:text-primary-700">
                    +380 96 131 47 58
                  </a>
                  <span className="text-neutral-600 text-sm"> - Олена (логістика, фінанси)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900">Email</p>
                  <a href="mailto:dobrozhanskiy@gmail.com" className="text-primary-600 hover:text-primary-700">
                    dobrozhanskiy@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <p className="font-semibold text-neutral-900">Адреса ферми</p>
                  <p className="text-neutral-600">
                    вул. Квіткова, 7<br/>
                    с. Кудрявка, Березівський район<br/>
                    Одеська область, 67310<br/>
                    Україна
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary-600" />
                Месенджери
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://wa.me/380671328859" className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition-colors">
                  WhatsApp
                </a>
                <a href="viber://chat?number=380671328859" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-700 transition-colors">
                  Viber
                </a>
                <a href="https://t.me/organicfarmlichtenfeld" className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-600 transition-colors">
                  Telegram
                </a>
                <a href="https://m.me/organicfarmlichtenfeld" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors">
                  Messenger
                </a>
              </div>
            </div>
          </div>

          {/* Payment & Delivery */}
          <div className="bg-white rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-neutral-900 mb-6 font-serif">
              Оплата та доставка
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary-600" />
                  Способи оплати
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Картка ПриватБанку</li>
                  <li>• Картка Monobank</li>
                  <li>• Картка Кредобанк</li>
                  <li>• Картка ПУМБ</li>
                  <li>• Картка Банк Восток</li>
                  <li>• PayPal</li>
                  <li>• SWIFT перекази (UAH, USD, EUR, PLN)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Доставка</h3>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-neutral-700">
                    <strong>Нова Пошта</strong> - доставка по всій Україні
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    Відправка в день замовлення або наступного дня. 
                    Термін доставки 1-2 дні.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 mb-3">Графік роботи</h3>
                <p className="text-neutral-600">
                  Понеділок - П'ятниця: 9:00 - 18:00<br/>
                  Субота: 10:00 - 16:00<br/>
                  Неділя: вихідний
                </p>
                <p className="text-sm text-neutral-500 mt-2">
                  Замовлення через сайт приймаються цілодобово
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Order Form */}
        <div className="bg-white rounded-xl p-6 md:p-8 mt-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-neutral-900 mb-6 font-serif text-center">
            Швидке замовлення
          </h2>
          <div className="text-center space-y-4">
            <p className="text-neutral-600">
              Для швидкого замовлення зателефонуйте нам або напишіть в месенджер
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Написати в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}