import Link from 'next/link'
import Image from 'next/image'
import { Phone, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-cream-light via-white to-cheese-yellow/10 overflow-hidden">
      {/* Hero Background Image - using multiple cheese images */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero/lichtenfeld-main-hero-bg.jpg"
            alt="Органічні сири Ліхтенфельд - традиційне сироваріння"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-20 lg:py-32 flex justify-center">
          <div className="max-w-3xl text-center">
            {/* Veteran Status Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Олександр - ветеран АТО • Снайпер-інструктор 2014-2016
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 font-serif leading-tight">
              Справжні швейцарські сири
              <span className="text-primary-600 block mt-2">від українського майстра</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-700 mb-4 leading-relaxed font-medium">
              "Я роблю сири так, як робили майстри в Альпах та Британії за сотні років до народження Луї Пастера"
            </p>
            
            <p className="text-base md:text-lg text-neutral-600 mb-8">
              100% екологічні інгредієнти. Тільки свіже молоко, сичужний фермент та сіль. 
              <strong className="text-neutral-800"> Нічого зайвого.</strong> Ручна робота. Малі партії.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm justify-center">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-primary-600">1M₴</span>
                <span className="text-neutral-600">річний оборот</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-primary-600">12-18K</span>
                <span className="text-neutral-600">відвідувачів щодня</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-primary-600">4.8★</span>
                <span className="text-neutral-600">рейтинг (331 відгук)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-lg group"
              >
                Переглянути каталог
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="tel:+380671328859"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  <span className="flex flex-col items-start">
                    <span className="text-xs text-neutral-500">Олександр</span>
                    <span>067 132 8859</span>
                  </span>
                </a>
                <a
                  href="tel:+380961314758"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  <span className="flex flex-col items-start">
                    <span className="text-xs text-neutral-500">Олена</span>
                    <span>096 131 4758</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Production Methods */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🏔️</span>
                <span className="text-neutral-700 font-medium">Швейцарська школа</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">⏰</span>
                <span className="text-neutral-700 font-medium">4 години чеддерінгу</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🍷</span>
                <span className="text-neutral-700 font-medium">Витримка у вині</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">🔥</span>
                <span className="text-neutral-700 font-medium">14 днів копчення</span>
              </div>
            </div>

            {/* Location */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600">
                <strong>Органічна ферма "Ліхтенфельд"</strong> • 
                с. Кудрявка, Березівський район, Одеська область • 
                Доставка по всій Україні Новою Поштою
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}