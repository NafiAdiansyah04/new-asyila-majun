// app/page.js
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}