import React from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

export default function Header({ onCartClick, currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const itemCount = useCartStore(state => state.getItemCount())

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-lg">
      <div className="container flex justify-between items-center py-4">
        <div 
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
          onClick={() => setCurrentPage('home')}
        >
          <span className="text-3xl">🍲</span>
          <div>
            <h1 className="text-2xl font-bold text-orange-500">Street Food</h1>
            <p className="text-xs text-gray-600">Nairobi's Best</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`font-medium transition ${currentPage === 'home' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('orders')}
            className={`font-medium transition ${currentPage === 'orders' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
          >
            My Orders
          </button>
          <button 
            onClick={() => setCurrentPage('account')}
            className={`font-medium transition ${currentPage === 'account' ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
          >
            Account
          </button>
        </nav>

        <button 
          onClick={onCartClick}
          className="relative p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <ShoppingCart size={24} className="text-orange-500" />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>

        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            <button 
              onClick={() => { setCurrentPage('home'); setIsOpen(false) }}
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('orders'); setIsOpen(false) }}
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              My Orders
            </button>
            <button 
              onClick={() => { setCurrentPage('account'); setIsOpen(false) }}
              className="text-gray-700 hover:text-orange-500 font-medium py-2"
            >
              Account
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
