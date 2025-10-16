// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Asyila Majun | Supplier Kain Majun',
    template: '%s | Asyila Majun',
  },
  description:
    'Asyila Majun adalah supplier kain majun terpercaya yang menyediakan berbagai jenis lap dari kain perca — mulai dari majun putih, majun jahit, hingga majun tanpa jahit. Cocok untuk kebutuhan industri, bengkel, pabrik, dan usaha pembersihan dengan kualitas terbaik dan harga bersaing.',
  authors: [{ name: 'Asyila Majun' }],
  creator: 'Asyila Majun',
  metadataBase: new URL('https://asyilamajun.com'),
  openGraph: {
    title: 'Asyila Majun | Supplier Kain Majun',
    description:
      'Supplier kain majun berkualitas untuk industri, bengkel, dan pabrik. Tersedia majun putih, jahit, dan tanpa jahit dengan harga terjangkau.',
    type: 'website',
    locale: 'id-ID',
    siteName: 'Asyila Majun',
    icons:{
      icon: '/assets/favicon-new.ico',
      apple: '/assets/apple-touch-icon.png',
      shortcut: '/assets/favicon-new.ico',
      alt: 'Asyila Majun'
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}