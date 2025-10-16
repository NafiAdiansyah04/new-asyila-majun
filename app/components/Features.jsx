// app/components/Features.jsx
const features = [
  {
    icon: '💧',
    title: 'Daya Serap Tinggi',
    description: 'Menyerap oli, air, dan kotoran dengan cepat, ideal untuk area kerja industri dan bengkel.'
  },
  {
    icon: '🌿',
    title: 'Ramah Lingkungan',
    description: 'Terbuat dari bahan perca daur ulang berkualitas, membantu mengurangi limbah tekstil.'
  },
  {
    icon: '✨',
    title: 'Bersih Maksimal',
    description: 'Tidak meninggalkan serat atau bekas pada permukaan logam, kaca, dan mesin.'
  },
  {
    icon: '🔄',
    title: 'Tahan Lama',
    description: 'Kain kuat dan tidak mudak robek, dapat digunakan berulang kali untuk berbagai kebutuhan.'
  },
  {
    icon: '🧽',
    title: 'Serbaguna',
    description: 'Aman digunakan untuk memberihkan logam, kaca, cat, dan permukaan lainnya.'
  },
  {
    icon: '⚡',
    title: 'Quick Dry',
    description: 'Mudah dicuci dan cepat kering, mencegah bau dan jamur.'
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Kenapa memilih Asyila Majun?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kain majun kami dibuat dari bahan perca pilihan yang telah melalui proses sortir dan pemotongan rapi.
Tersedia dalam varian tanpa jahit, jahit, dan putih, cocok untuk kebutuhan industri, bengkel, dan pabrik.
Lebih hemat, ramah lingkungan, dan tahan lama.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}