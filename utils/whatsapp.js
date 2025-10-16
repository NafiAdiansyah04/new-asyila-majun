// utils/whatsapp.js
export const generateOrderMessage = (cartItems, customerInfo = {}) => {
  const itemsText = cartItems.map(item => 
    `• ${item.quantity}x ${item.name} - ${item.price} each`
  ).join('%0A')

  const total = cartItems.reduce((sum, item) => 
    sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0
  ).toFixed(2)

  const customerDetails = customerInfo.name ? 
    `%0A%0ACustomer Details:%0AName: ${customerInfo.name}%0AEmail: ${customerInfo.email || 'Not provided'}` 
    : ''

  const message = `🛒 *NEW ORDER - CLEANWEAVE PRO* 🛒

*Order Summary:*
${itemsText}

*Total Amount:* $${total}
*Order Date:* ${new Date().toLocaleDateString('id-ID')}${customerDetails}

%0A
Please provide:
1. Shipping address
2. Preferred payment method
3. Any special instructions

Thank you! 🙏`

  return encodeURIComponent(message)
}

export const sendWhatsAppOrder = (phoneNumber, message) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}