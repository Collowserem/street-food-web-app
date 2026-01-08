import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  items: [],
  selectedVendor: null,

  addItem: (item, vendorId) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id && i.vendorId === vendorId)
    if (existingItem) {
      return {
        items: state.items.map(i =>
          i.id === item.id && i.vendorId === vendorId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
    }
    return {
      items: [...state.items, { ...item, vendorId, quantity: 1 }],
      selectedVendor: vendorId
    }
  }),

  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(i => i.id !== itemId)
  })),

  updateQuantity: (itemId, quantity) => set((state) => ({
    items: state.items.map(i =>
      i.id === itemId
        ? { ...i, quantity: Math.max(0, quantity) }
        : i
    ).filter(i => i.quantity > 0)
  })),

  clearCart: () => set({ items: [], selectedVendor: null }),

  getTotal: () => {
    const state = get()
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },

  getItemCount: () => {
    const state = get()
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }
}))
