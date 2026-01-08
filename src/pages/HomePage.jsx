import React, { useState } from 'react'
import { Search } from 'lucide-react'
import VendorCard from '../components/VendorCard'
import { vendors, categories } from '../data/mockData'

export default function HomePage({ onVendorSelect }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVendors = vendors.filter(vendor => {
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-24 pb-8">
      <div className="container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome to Street Food</h1>
          <p className="text-lg opacity-90">Order authentic Kenyan street food delivered to your door</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search vendors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Vendors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map(vendor => (
            <VendorCard 
              key={vendor.id} 
              vendor={vendor}
              onClick={() => onVendorSelect(vendor)}
            />
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-lg">No vendors found</p>
          </div>
        )}
      </div>
    </div>
  )
}
