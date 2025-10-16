import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container-custom px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-center">
            Hubungi Kami
          </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 📍 Bagian Kiri: Google Maps */}
          <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ">
            <iframe
              title="Lokasi Usaha"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.671168263181!2d112.66594097385683!3d-7.390695572756918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e353938c4f99%3A0xdc90545f5abd3aff!2sUD.ASYILA%20MAJUN!5e0!3m2!1sid!2sid!4v1760565849547!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* 📞 Bagian Kanan: Informasi Kontak */}
          <div className="h-[400px] w-full flex flex-col justify-center bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Informasi Kontak
            </h3>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 w-6 h-6 mt-1" />
                <p>
                  Dukuh, Bangsri, Kec. Sukodono, Kabupaten Sidoarjo, Jawa Timur 61258
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-blue-600 w-6 h-6 mt-1" />
                <p>
                  <a href="tel:+6281234567890" className="hover:underline">
                    +62 812-3421-6803
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-blue-600 w-6 h-6 mt-1" />
                <p>
                  <a href="mailto:info@usahakita.com" className="hover:underline">
                    asyilamajun@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 w-6 h-6 mt-1" />
                <p>Senin – Minggu: 07.00 – 17.00</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/62812342168030"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-green-700 transition"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
