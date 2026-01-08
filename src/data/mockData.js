export const vendors = [
  {
    id: 1,
    name: 'Nyama Choma Kings',
    category: 'Grilled Meat',
    rating: 4.8,
    reviews: 245,
    deliveryTime: '20-30 min',
    deliveryFee: 50,
    image: '🔥',
    description: 'Best grilled meat in Nairobi',
    location: 'Westlands',
    menu: [
      { id: 101, name: 'Nyama Choma (500g)', price: 350, image: '🥩', description: 'Tender grilled beef' },
      { id: 102, name: 'Chicken Nyama (500g)', price: 300, image: '🍗', description: 'Grilled chicken pieces' },
      { id: 103, name: 'Goat Meat (500g)', price: 400, image: '🐐', description: 'Premium goat meat' },
      { id: 104, name: 'Mixed Grill (1kg)', price: 650, image: '🍖', description: 'Beef, chicken, and goat' },
      { id: 105, name: 'Ugali & Sukuma', price: 150, image: '🌾', description: 'Traditional sides' }
    ]
  },
  {
    id: 2,
    name: 'Samosa Express',
    category: 'Snacks',
    rating: 4.6,
    reviews: 189,
    deliveryTime: '15-20 min',
    deliveryFee: 30,
    image: '🥟',
    description: 'Crispy samosas and pastries',
    location: 'CBD',
    menu: [
      { id: 201, name: 'Samosa (5 pcs)', price: 100, image: '🥟', description: 'Meat-filled samosas' },
      { id: 202, name: 'Mandazi (6 pcs)', price: 80, image: '🍩', description: 'Fried dough pastries' },
      { id: 203, name: 'Chapati (3 pcs)', price: 60, image: '🥞', description: 'Soft flatbread' },
      { id: 204, name: 'Bhajia (200g)', price: 70, image: '🌶️', description: 'Spiced potato fritters' },
      { id: 205, name: 'Vegetable Samosa (5 pcs)', price: 90, image: '🥬', description: 'Veggie-filled samosas' }
    ]
  },
  {
    id: 3,
    name: 'Githeri & Beans',
    category: 'Traditional',
    rating: 4.7,
    reviews: 156,
    deliveryTime: '25-35 min',
    deliveryFee: 40,
    image: '🌽',
    description: 'Authentic Kenyan traditional food',
    location: 'Eastleigh',
    menu: [
      { id: 301, name: 'Githeri (Regular)', price: 120, image: '🌽', description: 'Corn and beans mix' },
      { id: 302, name: 'Beans & Ugali', price: 130, image: '🍲', description: 'Beans with cornmeal' },
      { id: 303, name: 'Irio (Mashed Potatoes)', price: 100, image: '🥔', description: 'Mashed potato mix' },
      { id: 304, name: 'Sukuma Wiki Plate', price: 110, image: '🥬', description: 'Collard greens with ugali' },
      { id: 305, name: 'Matoke (Banana)', price: 140, image: '🍌', description: 'Steamed banana dish' }
    ]
  },
  {
    id: 4,
    name: 'Juice & Smoothie Bar',
    category: 'Beverages',
    rating: 4.5,
    reviews: 203,
    deliveryTime: '10-15 min',
    deliveryFee: 25,
    image: '🧃',
    description: 'Fresh juices and smoothies',
    location: 'Karen',
    menu: [
      { id: 401, name: 'Mango Juice', price: 80, image: '🥭', description: 'Fresh mango juice' },
      { id: 402, name: 'Passion Fruit Juice', price: 90, image: '🍑', description: 'Tangy passion fruit' },
      { id: 403, name: 'Smoothie Mix', price: 120, image: '🍓', description: 'Fruit smoothie blend' },
      { id: 404, name: 'Sugarcane Juice', price: 70, image: '🥤', description: 'Fresh sugarcane' },
      { id: 405, name: 'Watermelon Juice', price: 85, image: '🍉', description: 'Refreshing watermelon' }
    ]
  },
  {
    id: 5,
    name: 'Rolex Wraps',
    category: 'Street Food',
    rating: 4.9,
    reviews: 312,
    deliveryTime: '15-25 min',
    deliveryFee: 35,
    image: '🌯',
    description: 'Delicious rolex wraps',
    location: 'Nairobi CBD',
    menu: [
      { id: 501, name: 'Egg Rolex', price: 100, image: '🌯', description: 'Eggs and veggies in chapati' },
      { id: 502, name: 'Meat Rolex', price: 150, image: '🌯', description: 'Minced meat rolex' },
      { id: 503, name: 'Cheese Rolex', price: 120, image: '🧀', description: 'Cheese and egg rolex' },
      { id: 504, name: 'Veggie Rolex', price: 90, image: '🥬', description: 'Vegetables rolex' },
      { id: 505, name: 'Combo Rolex', price: 180, image: '🌯', description: 'Meat, egg, and cheese' }
    ]
  },
  {
    id: 6,
    name: 'Fries & Chicken',
    category: 'Fast Food',
    rating: 4.4,
    reviews: 278,
    deliveryTime: '20-30 min',
    deliveryFee: 45,
    image: '🍟',
    description: 'Crispy fries and fried chicken',
    location: 'Kilimani',
    menu: [
      { id: 601, name: 'Fries (Regular)', price: 80, image: '🍟', description: 'Crispy golden fries' },
      { id: 602, name: 'Fried Chicken (2 pcs)', price: 200, image: '🍗', description: 'Juicy fried chicken' },
      { id: 603, name: 'Chicken & Fries', price: 250, image: '🍗', description: 'Chicken with fries' },
      { id: 604, name: 'Chicken Burger', price: 180, image: '🍔', description: 'Chicken burger' },
      { id: 605, name: 'Combo Meal', price: 350, image: '🍽️', description: 'Chicken, fries, drink' }
    ]
  }
]

export const categories = ['All', 'Grilled Meat', 'Snacks', 'Traditional', 'Beverages', 'Street Food', 'Fast Food']
