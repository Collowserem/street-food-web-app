import React from 'react'
import { User, Phone, MapPin, LogOut } from 'lucide-react'

export default function AccountPage({ onLogout }) {
  const userInfo = {
    name: 'John Doe',
    phone: '+254712345678',
    email: 'john@example.com',
    address: 'Westlands, Nairobi'
  }

  return (
    <div className="pt-24 pb-8">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-3xl">
              👤
            </div>
            <div>
              <h2 className="text-2xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-600">{userInfo.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone size={20} className="text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold">{userInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin size={20} className="text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Default Address</p>
                <p className="font-semibold">{userInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-xl font-bold mb-4">Settings</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition font-semibold">
              📍 Saved Addresses
            </button>
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition font-semibold">
              💳 Payment Methods
            </button>
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition font-semibold">
              🔔 Notifications
            </button>
            <button className="w-full text-left p-4 hover:bg-gray-50 rounded-lg transition font-semibold">
              ❓ Help & Support
            </button>
          </div>
        </div>

        {/* Logout */}
        <button 
          onClick={onLogout}
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  )
}
