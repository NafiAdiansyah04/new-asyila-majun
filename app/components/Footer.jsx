import Image from 'next/image';

// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
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
              <span className="text-2xl font-bold">Asyila Majun</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Kami adalah perusahaan yang bergerak di bidang pembuatan kain majun. Kami menggunakan bahan perca pilihan yang telah melalui proses sortir dan pemotongan rapi. Tersedia dalam varian tanpa jahit, jahit, dan putih, cocok untuk kebutuhan industri, bengkel, dan pabrik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navigasi</h3>
            <ul className="space-y-3">
              {['Keunggulan', 'Produk', 'Ulasan', 'Kontak'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Kontak & Bantuan</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <span>📧</span>
                <span>asyilamajun@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>📞</span>
                <span>0812-3421-6803</span>
              </li>
              <li className="flex items-center space-x-3">
                <span>🕒</span>
                <span>Senin – Minggu: 07.00 – 17.00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
            © 2024 Asyila Majun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}