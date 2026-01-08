import React from 'react'
import { ArrowLeft, Star, Clock, MapPin } from 'lucide-react'
import MenuItem from '../components/MenuItem'
import { useCartStore } from '../store/cartStore'

export default function VendorPage({ vendor, onBack }) {
  const items = useCartStore(state => state.items)
  const addItem = useCartStore(state => state.addItem)
  const updateQuantity = useCartStore(state => state.updateQuantity)

  const handleAddItem = (item, quantityChange = 1) => {
    const existingItem = items.find(i => i.id === item.id)
    if (existingItem) {
      updateQuantity(item.id, existingItem.quantity + quantityChange)
    } else {
      addItem(item, vendor.id)
    }
  }

  const getItemQuantity = (itemId) => {
    const item = items.find(i => i.id === itemId)
    return item?.quantity || 0
  }

  return (
    <div className="pt-24 pb-8">
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-orange-500 font-semibold mb-6 hover:opacity-80 transition"
        >
          <ArrowLeft size={20} />
          Back to Vendors
        </button>

        {/* Vendor Header */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-md">
          <div className="flex items-start gap-6 mb-6">
            <div className="text-8xl">{vendor.image}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{vendor.name}</h1>
              <p className="text-gray-600 mb-4">{vendor.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{vendor.rating}</span>
                  <span className="text-gray-600">({vendor.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={18} />
                  <span>{vendor.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={18} />
                  <span>{vendor.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <div className="space-y-4">
            {vendor.menu.map(item => (
              <MenuItem 
                key={item.id}
                item={item}
                onAdd={handleAddItem}
                quantity={getItemQuantity(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
