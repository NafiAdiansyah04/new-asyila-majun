import Image from "next/image"

const testimonials = [
  {
    name: 'Hendra',
    role: 'Owner FnB',
    content: 'Majun Jahit Putih, kain lembut dan nyaman, cocok untuk industri makanan dan harga terjangkau.',
    rating: 5,
    avatar: '/assets/owner-fnb.webp'
  },
  {
    name: 'Ali',
    role: 'Mekanik Motor',
    content: 'Kain majun lembar yang nyaman digunakan, cocok untuk membersihkan oli, debu, dan cairan di bengkel motor.',
    rating: 5,
    avatar: '/assets/mekanik-motor.webp'
  },
  {
    name: 'Rizky',
    role: 'Owner Showroom',
    content: 'Majun jahit dan lap microfiber. Harga murah dan cocok untuk kendaraan, kaca, dan interior mobil.',
    rating: 5,
    avatar: '/assets/owner-showroom.webp'
  }
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ulasan Pelanggan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai ulasan dari pelanggan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <StarRating rating={testimonial.rating} />
              <div className="flex justify-center">
                <Image src={testimonial.avatar} width={100} height={100} alt={testimonial.name} className="rounded-full"/>
                </div>
              <p className="text-gray-600 italic mb-6 text-center leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="text-center">
                <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                <div className="text-primary font-medium">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t-2 border-gray-200 pt-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Produk Terjual</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600 font-medium">Customer</div>
          </div>
        </div>
      </div>
    </section>
  )
}