import React, { useState } from 'react'
import { ArrowLeft, MapPin, Phone, Clock } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { vendors } from '../data/mockData'

export default function CheckoutPage({ onBack, onOrderComplete }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'mpesa'
  })

  const items = useCartStore(state => state.items)
  const total = useCartStore(state => state.getTotal())
  const selectedVendorId = useCartStore(state => state.selectedVendor)
  const vendor = vendors.find(v => v.id === selectedVendorId)
  const finalTotal = total + (vendor?.deliveryFee || 0)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitOrder = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in all fields')
      return
    }
    setStep(3)
  }

  const handleCompleteOrder = () => {
    const order = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      vendor: vendor?.name,
      items: items,
      total: finalTotal,
      deliveryTime: vendor?.deliveryTime,
      address: formData.address,
      status: 'confirmed',
      timestamp: new Date().toLocaleString()
    }
    onOrderComplete(order)
  }

  return (
    <div className="pt-24 pb-8">
      <div className="container max-w-2xl">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-orange-500 font-semibold mb-6 hover:opacity-80 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        {step === 1 && (
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h1 className="text-3xl font-bold mb-6">Delivery Details</h1>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="07XXXXXXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Delivery Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your delivery address"
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="mpesa">M-Pesa</option>
                  <option value="cash">Cash on Delivery</option>
                  <option value="card">Card</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleSubmitOrder}
              className="w-full btn-primary py-3 font-bold"
            >
              Continue to Review
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h1 className="text-3xl font-bold mb-6">Order Review</h1>
            
            <div className="space-y-6">
              {/* Vendor Info */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">From</p>
                <p className="text-xl font-bold">{vendor?.name}</p>
              </div>

              {/* Items */}
              <div>
                <h3 className="font-bold mb-3">Items</h3>
                <div className="space-y-2">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>KSh {item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-orange-500 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Delivery Address</p>
                    <p className="font-semibold">{formData.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">Contact</p>
                    <p className="font-semibold">{formData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">Estimated Delivery</p>
                    <p className="font-semibold">{vendor?.deliveryTime}</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>KSh {vendor?.deliveryFee}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-orange-500">KSh {finalTotal}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setStep(1)}
                  className="flex-1 btn-secondary py-3 font-bold"
                >
                  Edit
                </button>
                <button 
                  onClick={handleCompleteOrder}
                  className="flex-1 btn-primary py-3 font-bold"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-2xl p-8 shadow-md text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">Your order has been placed successfully</p>
            
            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-600 mb-2">Order ID</p>
              <p className="text-2xl font-bold text-orange-500">#ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>

            <button 
              onClick={onBack}
              className="w-full btn-primary py-3 font-bold"
            >
              Track Order
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
