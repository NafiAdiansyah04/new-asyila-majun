// app/components/Header.jsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Image
                src="/assets/apple-touch-icon.png"
                alt="Logo Asyila Majun"
                width={40}
                height={40}
                className="object-cover rounded-full"
                priority
              />
            </div>
            <span className="text-xl font-bold text-gray-800">Asyila Majun</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
              Keunggulan
            </a>
            <a href="#products" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
              Produk
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
              Ulasan
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium">
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#products" 
              className="btn-primary py-3 px-6 text-base"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 py-4 border-t' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Keunggulan
            </a>
            <a 
              href="#products" 
              className="text-gray-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Review
            </a>
            <a 
              href="#faq" 
              className="text-gray-600 hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#products" 
              className="btn-primary text-center py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}