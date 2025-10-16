// hooks/useCart.js
import { useState, useEffect } from 'react'

export function useCart() {
  const [cart, setCart] = useState({})

  // Load cart from localStorage on mount
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

  const addToCart = (productId, quantity = 1) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + quantity
    }))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      setCart(prev => ({
        ...prev,
        [productId]: quantity
      }))
    }
  }

  const removeFromCart = (productId) => {
    setCart(prev => {
      const newCart = { ...prev }
      delete newCart[productId]
      return newCart
    })
  }

  const clearCart = () => {
    setCart({})
  }

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, qty) => total + qty, 0)
  }

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems
  }
}