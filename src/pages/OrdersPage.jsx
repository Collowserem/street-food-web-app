import React from 'react'
import { Clock, MapPin, CheckCircle, TrendingUp } from 'lucide-react'

export default function OrdersPage({ orders }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'preparing': return 'bg-yellow-100 text-yellow-800'
      case 'on-way': return 'bg-purple-100 text-purple-800'
      case 'delivered': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch(status) {
      case 'confirmed': return '📋'
      case 'preparing': return '👨‍🍳'
      case 'on-way': return '🚴'
      case 'delivered': return '✅'
      default: return '📦'
    }
  }

  return (
    <div className="pt-24 pb-8">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-md">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-gray-600 text-lg">No orders yet</p>
            <p className="text-gray-500 mt-2">Start ordering to see your orders here</p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-bold text-lg">{order.id}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)} {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </div>
                </div>

                <div className="mb-4 pb-4 border-b">
                  <p className="font-bold text-lg mb-2">{order.vendor}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    {order.items.map((item, i) => (
                      <p key={i}>{item.name} x {item.quantity}</p>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-orange-500" />
                    <span>{order.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-orange-500" />
                    <span>{order.deliveryTime}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-semibold">Total</span>
                  <span className="text-2xl font-bold text-orange-500">KSh {order.total}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
