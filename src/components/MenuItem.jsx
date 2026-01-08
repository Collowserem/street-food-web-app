import React from 'react'
import { Plus, Minus } from 'lucide-react'

export default function MenuItem({ item, onAdd, quantity = 0 }) {
  return (
    <div className="card p-4 flex justify-between items-start gap-4">
      <div className="flex-1">
        <div className="text-4xl mb-2">{item.image}</div>
        <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        <p className="text-lg font-bold text-orange-500">KSh {item.price}</p>
      </div>
      
      {quantity === 0 ? (
        <button 
          onClick={() => onAdd(item)}
          className="btn-primary whitespace-nowrap"
        >
          Add
        </button>
      ) : (
        <div className="flex items-center gap-2 bg-orange-100 rounded-lg p-2">
          <button 
            onClick={() => onAdd(item, -1)}
            className="p-1 hover:bg-orange-200 rounded transition"
          >
            <Minus size={16} />
          </button>
          <span className="font-bold w-6 text-center">{quantity}</span>
          <button 
            onClick={() => onAdd(item, 1)}
            className="p-1 hover:bg-orange-200 rounded transition"
          >
            <Plus size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
