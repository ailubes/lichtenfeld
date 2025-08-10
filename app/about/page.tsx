import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-light">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 font-serif text-center">
          Про ферму Ліхтенфельд
        </h1>

        {/* Founder Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif">
                Олександр Доброжанський
              </h2>
              <div className="space-y-3 text-neutral-600">
                <p>
                  <strong className="text-primary-600">Засновник ферми, ветеран АТО</strong>
                </p>
                <p>
                  З 2014 по 2016 рік служив снайпером-інструктором, навчив майже 100 українських снайперів. 
                  Після повернення з фронту вирішив кардинально змінити життя.
                </p>
                <p>
                  "На війні я почав розуміти, що справді має цінність. Це не машини і гроші, а родина."
                </p>
                <p>
                  Маючи декілька вищих освіт та досвід роботи директором з маркетингу в мережах супермаркетів, 
                  Олександр вирішив створити щось справжнє - органічну ферму в селі Кудрявка.
                </p>
                <p>
                  Навчався сироварінню в Швейцарії, закінчив Сорбонну. Створює сири за рецептами, 
                  яким сотні років, використовуючи тільки екологічні інгредієнти.
                </p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/founder/alexander-dobrozhanski-portrait.png"
                alt="Олександр Доброжанський"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Farm History */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif">
            Історія ферми
          </h2>
          <div className="space-y-4 text-neutral-600">
            <div className="flex gap-4">
              <span className="text-primary-600 font-bold">2016</span>
              <p>Заснування ферми після повернення з АТО. Початок експериментів з сироварінням.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary-600 font-bold">2017</span>
              <p>Навчання в Швейцарії, освоєння альпійських технік сироваріння.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary-600 font-bold">2018</span>
              <p>Запуск виробництва 8 видів сиру. Перші постійні клієнти.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary-600 font-bold">2019</span>
              <p>Розширення асортименту, початок виробництва алкогольних напоїв.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary-600 font-bold">2025</span>
              <p>1 млн грн річного обороту, 12-18 тисяч відвідувачів сайту щодня.</p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif">
            Локація - село Кудрявка
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-neutral-600">
              <p>
                <strong>Історична німецька колонія</strong>, заснована в XIX столітті. 
                Сусіднє село Яснопілля - це прямий переклад з німецької "Lichtenfeld".
              </p>
              <p>
                Розташована далеко від промислових зон, в екологічно чистому районі 
                Березівського району Одеської області.
              </p>
              <p>
                Родючі чорноземи, південне сонце та чисте повітря створюють ідеальні 
                умови для органічного фермерства.
              </p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h3 className="font-semibold text-primary-700 mb-2">Адреса ферми:</h3>
              <p className="text-neutral-700">
                вул. Квіткова, 7<br/>
                с. Кудрявка<br/>
                Березівський район<br/>
                Одеська область<br/>
                67310, Україна
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-serif">
            Наша філософія
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-4xl mb-3 block">🌿</span>
              <h3 className="font-semibold text-primary-600 mb-2">100% Екологічно</h3>
              <p className="text-sm text-neutral-600">
                Тільки натуральні інгредієнти, без консервантів та штучних добавок
              </p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-3 block">👐</span>
              <h3 className="font-semibold text-primary-600 mb-2">Ручна робота</h3>
              <p className="text-sm text-neutral-600">
                Кожен сир - це результат ручної праці та уваги до деталей
              </p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-3 block">❤️</span>
              <h3 className="font-semibold text-primary-600 mb-2">З любов'ю</h3>
              <p className="text-sm text-neutral-600">
                Ми вкладаємо душу в кожен продукт, який виробляємо
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-cheese-yellow/20 rounded-lg">
            <p className="text-center text-neutral-700 italic">
              "Я роблю сири так, як робили майстри в Альпах та Британії за сотні років до народження Луї Пастера"
            </p>
            <p className="text-center text-sm text-neutral-600 mt-2">
              - Олександр Доброжанський
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}