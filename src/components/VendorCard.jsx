import React from 'react'
import { Star, Clock, MapPin } from 'lucide-react'

export default function VendorCard({ vendor, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="card p-4 cursor-pointer transform hover:-translate-y-2 transition-all"
    >
      <div className="text-6xl mb-3 text-center">{vendor.image}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{vendor.name}</h3>
      <p className="text-sm text-gray-600 mb-3">{vendor.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">{vendor.rating}</span>
          <span className="text-gray-600">({vendor.reviews})</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={16} />
          <span>{vendor.deliveryTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} />
          <span>{vendor.location}</span>
        </div>
      </div>
      
      <button className="w-full btn-primary">
        View Menu
      </button>
    </div>
  )
}
