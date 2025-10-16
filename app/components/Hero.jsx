import Image from 'next/image'
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Solusi Lap Industri yang{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-200">
                  Bersih
                </span>{' '}
                dan Efisien.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Kami menyediakan kain majun dari bahan perca berkualitas tinggi yang tersedia dalam varian tanpa jahit, jahit, dan putih.
                Ideal untuk kebutuhan industri, bengkel, pabrik, dan perawatan mesin.
Dapat membersihkan kotoran dengan maksimal, tahan lama, dan ramah lingkungan.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="btn-primary">
                Koleksi Produk
              </a>
              <a href="#features" className="btn-secondary">
                Selengkapnya
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">10K+</div>
                <div className="text-gray-600">Produk Terjual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-gray-600">Customer Puas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">4.9★</div>
                <div className="text-gray-600">Penilaian Rata-Rata</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="relative aspect-square rounded-2xl flex items-center justify-center overflow-hidden">
              {/* Background Image */}
              <Image
                src="/assets/bg-hero.webp" // ganti sesuai nama file gambar background kamu
                alt="Background Hero Asyila Majun"
                fill
                priority
                className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay semi-transparan opsional biar teks/gambar di atas tetap terlihat */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

              {/* Product Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"></div>

                  <Image
                    src="/assets/hero.webp"
                    alt="Kain Majun Asyila"
                    fill
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-accent/20 rounded-full animate-bounce" />
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-secondary/20 rounded-full animate-bounce delay-75" />
              <div className="absolute top-1/2 right-8 w-6 h-6 bg-primary/20 rounded-full animate-bounce delay-150" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}