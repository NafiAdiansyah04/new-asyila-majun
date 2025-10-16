'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Majun Lembar',
    description: 'Kain majun tanpa jahit dari potongan perca pilihan. Cocok untuk membersihkan oli, debu, dan cairan di area kerja industri atau bengkel.',
    price: '5000',
    originalPrice: '8000',
    features: ['Daya serap tinggi', 'Tidak mudah robek', 'Ekonomis', 'Bisa digunakan berulang'],
    image: '/assets/majun-lembar.webp',
    badge: ''
  },
  {
    id: 2,
    name: 'Majun Jahit',
    description: 'Varian majun yang dijahit rapi di tepiannya, memberikan ketahanan ekstra saat digunakan. Ideal untuk pembersihan di area kerja berat seperti pabrik, bengkel, dan gudang.',
    price: '10000',
    originalPrice: '15000',
    features: ['Tahan lama', 'Tidak mudah terurai', 'Nyaman digunakan', 'Daya serap optimal'],
    image: '/assets/majun-jahit.webp',
    badge: 'Best Seller'
  },
  {
    id: 3,
    name: 'Majun Jahit Putih',
    description: 'Kain majun jahit berwarna putih yang bersih dan lembut, cocok untuk industri makanan, medis, atau elektronik.',
    price: '17500',
    originalPrice: '20000',
    features: ['Warna putih bersih', 'Lembut dan aman untuk permukaan sensitif', 'Tahan lama dan kuat', 'Cepat Kering'],
    image: '/assets/majun-putih.webp',
    badge: 'Popular Choice'
  },
  {
    id: 4,
    name: 'Lap Microfiber',
    description: 'Lap microfiber premium untuk hasil pembersihan maksimal tanpa meninggalkan bekas. Cocok untuk kendaraan, kaca, peralatan elektronik, dan rumah tangga.',
    price: '5000',
    originalPrice: '7000',
    features: ['Serat halus dan lembut', 'Menyerap debu & air dengan cepat', 'Tidak meninggalkan goresan', 'Tahan lama'],
    image: '/assets/microfiber.webp',
    badge: 'New Arrival'
  }
]

const WHATSAPP_NUMBER = '6285743460518'

export default function Products() {
  const [cart, setCart] = useState({})
  const [showCartModal, setShowCartModal] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cleanweave-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cleanweave-cart', JSON.stringify(cart))
  }, [cart])

  // Update quantity for a product
  const updateQuantity = (productId, change) => {
    setCart(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 1) + change)
    }))
  }

  // Add product to cart
  const addToCart = (product) => {
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }))
    setShowCartModal(true)
  }

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev }
      delete newCart[productId]
      return newCart
    })
  }

  // Clear entire cart
  const clearCart = () => {
    setCart({})
    setCustomerInfo({ name: '', email: '', phone: '' })
  }

  // Calculate total items in cart
  const getTotalItems = () => {
    return Object.values(cart).reduce((total, qty) => total + qty, 0)
  }

  // Calculate total price
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, qty]) => {
      const product = products.find(p => p.id === parseInt(productId))
      const price = parseFloat(product?.price.replace('$', '') || '0')
      return total + (price * qty)
    }, 0)
  }

  // Get cart items with details
  const getCartItems = () => {
    return Object.entries(cart)
      .filter(([_, qty]) => qty > 0)
      .map(([productId, qty]) => {
        const product = products.find(p => p.id === parseInt(productId))
        return {
          ...product,
          quantity: qty,
          total: parseFloat(product?.price.replace('$', '') || '0') * qty
        }
      })
  }

  // Generate professional WhatsApp message
  const generateWhatsAppMessage = () => {
    const cartItems = getCartItems()
    const itemsText = cartItems.map(item => 
      `• ${item.quantity}x ${item.name} - Rp.${item.price}`
    ).join('\n')

    const total = getTotalPrice().toFixed(2)

    const message = `
*PESANAN BARU - Asyila Majun*

📦 *DETAIL PRODUK:*
${itemsText}

💰 *TOTAL:* Rp.${total.toLocaleString('id-ID')}
📅 *TANGGAL:* ${new Date().toLocaleDateString('id-ID')}

*DATA CUSTOMER:*
Nama: ${customerInfo.name}
Email: ${customerInfo.email || 'Tidak diisi'}
Telepon: ${customerInfo.phone || 'Tidak diisi'}

📋 *MOHON INFORMASIKAN:*
1. 📍 Alamat pengiriman lengkap
2. 💳 Metode pembayaran yang diinginkan
3. 📝 Catatan khusus (jika ada)

🚀 *PROSES SELANJUTNYA:*
1. Konfirmasi stok & total biaya
2. Pembayaran
3. Pengiriman produk
4. Konfirmasi penerimaan

Terima kasih atas pesanannya! 🙏
`;
 
const encodedMessage = encodeURIComponent(message);
return encodedMessage;
  }

  // Send order via WhatsApp
  const sendWhatsAppOrder = () => {
    const encodedMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    // Reset cart and close modal after short delay
    setTimeout(() => {
      setShowCartModal(false)
      clearCart()
    }, 1000)
  }

  const cartItems = getCartItems()

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Koleksi Produk Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Setiap jenis dirancang untuk daya serap tinggi, tahan lama, dan efisien digunakan di lingkungan kerja.
          </p>
        </div>

        {/* Cart Indicator */}
        {getTotalItems() > 0 && (
          <div className="fixed top-24 right-4 z-50 animate-bounce">
            <button 
              onClick={() => setShowCartModal(true)}
              className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-primary-dark transition-all duration-300 hover:scale-110 relative"
            >
              <span className="text-xl">🛒</span>
              <span className="absolute -top-2 -right-2 bg-accent text-white text-sm rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="p-6">
                {/* Product Image */}
                <div className="flex justify-center ">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="w-32 h-32 object-cover"></Image>
                </div>
                
                {/* Product Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl font-bold text-primary">Rp.{product.price}</span>
                  <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors hover:border-primary"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">
                      {cart[product.id] || 1}
                    </span>
                    <button 
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors hover:border-primary"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  {cart[product.id] ? `Update Cart (${cart[product.id]})` : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Modal */}
        {showCartModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-hidden shadow-lg animate-slideUp">
            <div className="overflow-y-auto max-h-[90vh] rounded-3xl">
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">🛒 Keranjang Belanja</h3>
                  <button 
                    onClick={() => setShowCartModal(false)}
                    className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Cart Items */}
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-gray-600">Keranjang Anda masih kosong</p>
                    <button 
                      onClick={() => setShowCartModal(false)}
                      className="btn-primary mt-4"
                    >
                      Lanjutkan Belanja
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-3">
                            <Image src={item.image} alt={item.name} width={50} height={50} />
                            <div>
                              <div className="font-semibold text-gray-800">{item.name}</div>
                              <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">Rp.{item.total.toFixed(2)}</div>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 text-sm hover:text-red-700 transition-colors mt-1"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Customer Info Form */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">📋 Data Diri Anda</h4>
                      <div className="space-y-3">
                        <div>
                          <input
                            type="text"
                            placeholder="Nama Lengkap *"
                            value={customerInfo.name}
                            onChange={(e) => setCustomerInfo(prev => ({...prev, name: e.target.value}))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                          />
                          <p className="text-xs text-gray-500 mt-1">Wajib diisi</p>
                        </div>
                        <input
                          type="email"
                          placeholder="Email"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo(prev => ({...prev, email: e.target.value}))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                        <input
                          type="tel"
                          placeholder="Nomor WhatsApp"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo(prev => ({...prev, phone: e.target.value}))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    {/* Total */}
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-primary text-xl">Rp.{getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button 
                        onClick={sendWhatsAppOrder}
                        disabled={!customerInfo.name}
                        className={`w-full py-4 rounded-lg transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 ${
                          customerInfo.name 
                            ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5' 
                            : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        }`}
                      >
                        <span>📱</span>
                        <span>Pesan via WhatsApp</span>
                      </button>

                      <button 
                        onClick={clearCart}
                        className="w-full border border-gray-300 text-gray-600 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Kosongkan Keranjang
                      </button>
                    </div>

                    <p className="text-center text-gray-600 text-sm mt-3">
                      Anda akan diarahkan ke WhatsApp untuk menyelesaikan pesanan
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </section>
  )
}