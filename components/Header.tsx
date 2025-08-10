'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Каталог', href: '/catalog' },
  { name: 'Про ферму', href: '/about' },
  { name: 'Блог', href: '/blog' },
  { name: 'Відгуки', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Контакти', href: '/contacts' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/lichtenfeld-logo.png"
              alt="Lichtenfeld"
              width={130}
              height={130}
              className="h-16 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone and Cart */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+380671328859"
              className="hidden sm:flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">067 132 8859</span>
            </a>
            <button className="p-2 text-neutral-700 hover:text-primary-600 transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <div className="py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-neutral-200">
              <a
                href="tel:+380671328859"
                className="flex items-center space-x-2 py-2 px-4 text-primary-600 hover:bg-neutral-50 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>067 132 8859</span>
              </a>
              <a
                href="tel:+380961314758"
                className="flex items-center space-x-2 py-2 px-4 text-primary-600 hover:bg-neutral-50 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>096 131 4758</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}