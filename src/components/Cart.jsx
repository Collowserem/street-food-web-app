import React from 'react'
import { X, Trash2, Plus, Minus } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { vendors } from '../data/mockData'

export default function Cart({ isOpen, onClose, onCheckout }) {
  const items = useCartStore(state => state.items)
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const removeItem = useCartStore(state => state.removeItem)
  const total = useCartStore(state => state.getTotal())
  const selectedVendorId = useCartStore(state => state.selectedVendor)
  const vendor = vendors.find(v => v.id === selectedVendorId)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end md:items-center justify-center">
      <div className="bg-white w-full md:max-w-md rounded-t-2xl md:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <>
            {vendor && (
              <div className="p-4 bg-orange-50 border-b">
                <p className="text-sm text-gray-600">From</p>
                <p className="font-bold text-lg">{vendor.name}</p>
              </div>
            )}

            <div className="p-4 space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{item.name}</h4>
                    <p className="text-orange-500 font-semibold">KSh {item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-white rounded transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-white rounded transition"
                    >
                      <Plus size={16} />
                    </button>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-red-100 text-red-500 rounded transition ml-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-white border-t p-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>KSh {vendor?.deliveryFee || 0}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-orange-500">KSh {total + (vendor?.deliveryFee || 0)}</span>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full btn-primary py-3 font-bold"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
