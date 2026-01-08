import React, { useState } from 'react'
import Header from './components/Header'
import Cart from './components/Cart'
import HomePage from './pages/HomePage'
import VendorPage from './pages/VendorPage'
import CheckoutPage from './pages/CheckoutPage'
import OrdersPage from './pages/OrdersPage'
import AccountPage from './pages/AccountPage'
import { useCartStore } from './store/cartStore'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedVendor, setSelectedVendor] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [orders, setOrders] = useState([])
  const clearCart = useCartStore(state => state.clearCart)

  const handleVendorSelect = (vendor) => {
    setSelectedVendor(vendor)
    setCurrentPage('vendor')
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    setCurrentPage('checkout')
  }

  const handleOrderComplete = (order) => {
    setOrders([order, ...orders])
    clearCart()
    setCurrentPage('orders')
  }

  const handleBack = () => {
    if (currentPage === 'vendor') {
      setSelectedVendor(null)
      setCurrentPage('home')
    } else if (currentPage === 'checkout') {
      setCurrentPage('home')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      {currentPage === 'home' && (
        <HomePage onVendorSelect={handleVendorSelect} />
      )}

      {currentPage === 'vendor' && selectedVendor && (
        <VendorPage vendor={selectedVendor} onBack={handleBack} />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage onBack={handleBack} onOrderComplete={handleOrderComplete} />
      )}

      {currentPage === 'orders' && (
        <OrdersPage orders={orders} />
      )}

      {currentPage === 'account' && (
        <AccountPage onLogout={() => setCurrentPage('home')} />
      )}
    </div>
  )
}

export default App
