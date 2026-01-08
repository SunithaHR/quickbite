// App.jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import CategoryTabs from './components/CategoryTabs'
import MenuGrid from './components/MenuGrid'
import CartSidebar from './components/CartSidebar'
import CheckoutModal from './components/CheckoutModal'
import FloatingCart from './components/FloatingCart'
import Confetti from 'react-confetti'

// Menu Items
const menuItems = [
  { id: 1, name: 'Truffle Mushroom Pizza', description: 'Wild mushrooms, truffle oil, mozzarella, fresh thyme', price: 249, category: 'Pizza', badge: "Chef's Special", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXrA2gdopzkU6IOPN6UgcJ6GprOVSMb5HSw&s' },
  { id: 2, name: 'Wagyu Beef Burger', description: 'Japanese wagyu patty, brioche bun, aged cheddar, truffle aioli', price: 329, category: 'Burger', badge: 'Popular', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Lobster Ravioli', description: 'Fresh pasta, Atlantic lobster, saffron cream sauce', price: 289, category: 'Pasta', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Truffle Arancini', description: 'Crispy risotto balls, black truffle, fontina cheese', price: 189, category: 'Appetizers', image: 'https://truffleguysuk.com/cdn/shop/articles/Arancini_Web_d1e90b24-fe9c-4744-97d7-12e10d05ef12.jpg?v=1750060509' },
  { id: 5, name: 'Burrata Caprese', description: 'Fresh burrata, heirloom tomatoes, basil pesto, balsamic glaze', price: 179, category: 'Appetizers', badge: 'Popular', image: 'https://houseofnasheats.com/wp-content/uploads/2024/06/Burrata-Caprese-Square-1.jpg' },
  { id: 6, name: 'Spicy Tuna Roll', description: 'Bluefin tuna, spicy mayo, avocado, tobiko, sesame seeds', price: 239, category: 'Sushi', badge: "Chef's Special", image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Craft Cocktail Flight', description: 'Three signature cocktails: Smoked Old Fashioned, Ginger Mule, Citrus Spritz', price: 269, category: 'Drinks', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWV-N9gafGPX2aWlTrw0K3YFSqQzP1wojZA&s' },
  { id: 8, name: 'Chocolate Soufflé', description: 'Warm dark chocolate soufflé, vanilla bean ice cream', price: 159, category: 'Desserts', badge: 'Best Seller', image: 'https://www.thatskinnychickcanbake.com/wp-content/uploads/2015/08/Chocolate-Souffle-Cake-5-2-scaled-720x540.jpg' },
]

// Categories
const categories = ['All', 'Pizza', 'Burger', 'Pasta', 'Appetizers', 'Sushi', 'Drinks', 'Desserts']

function App() {
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isOrdersOpen, setIsOrdersOpen] = useState(false) // ✅ Orders sidebar
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showConfetti, setShowConfetti] = useState(false)
  const [showOrderMessage, setShowOrderMessage] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders')
      if (!res.ok) throw new Error('Failed to fetch orders')
      const data = await res.json()
      setOrders(data)
    } catch (err) {
      console.error(err)
    }
  }

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      const item = prev.find(cartItem => cartItem.id === id)
      if (!item) return prev
      if (item.quantity + delta <= 0) return prev.filter(cartItem => cartItem.id !== id)
      return prev.map(cartItem => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + delta } : cartItem)
    })
  }

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08
  const deliveryFee = subtotal > 500 ? 0 : 49
  const total = subtotal + tax + deliveryFee

  const handlePlaceOrder = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart, subtotal, tax, deliveryFee, total }),
      })
      if (!res.ok) throw new Error('Order failed')

      setCart([])
      setIsCheckoutOpen(false)
      setShowConfetti(true)
      setShowOrderMessage(true)
      fetchOrders() // update orders

      setTimeout(() => {
        setShowConfetti(false)
        setShowOrderMessage(false)
        setIsOrdersOpen(true) // ✅ open orders sidebar automatically
      }, 2000)
    } catch (err) {
      alert('Failed to place order')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 relative">

      {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={300} />}
      {showOrderMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-white shadow-xl rounded-xl p-6 text-center animate-bounce pointer-events-auto">
            <h2 className="text-2xl font-bold text-green-600">🎉 Order Placed Successfully!</h2>
            <p className="text-gray-700 mt-2">Thank you for your order. Your delicious meal is on its way!</p>
          </div>
        </div>
      )}

      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onOrdersClick={() => { fetchOrders(); setIsOrdersOpen(true) }} // ✅ Button to open orders sidebar
      />

      <div className="container mx-auto px-4 pt-6 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Premium Dining, Delivered</h1>
        <p className="text-gray-600 text-lg mb-6">Experience restaurant-quality meals crafted by award-winning chefs</p>

        <CategoryTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <MenuGrid
          items={filteredItems}
          onAddToCart={addToCart}
        />
      </div>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        subtotal={subtotal}
        tax={tax}
        deliveryFee={deliveryFee}
        total={total}
        onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true) }}
      />

      {/* ✅ Orders Sidebar */}
      {isOrdersOpen && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 p-4 overflow-y-auto transition-transform transform">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Orders</h2>
            <button onClick={() => setIsOrdersOpen(false)} className="text-gray-500 hover:text-gray-800 font-bold">✕</button>
          </div>
          {orders.length === 0 ? (
            <p className="text-gray-500">No orders yet.</p>
          ) : (
            orders.map((order, idx) => (
              <div key={idx} className="border rounded-lg p-3 mb-3 bg-orange-50 shadow">
                <p className="font-semibold">Order #{order._id || idx + 1}</p>
                <p className="text-gray-500 text-sm">Total: ₹{order.total}</p>
                <ul className="list-disc list-inside text-gray-700">
                  {order.items.map(item => (
                    <li key={item.id}>{item.name} x {item.quantity}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      )}

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        subtotal={subtotal}
        tax={tax}
        deliveryFee={deliveryFee}
        total={total}
        onPlaceOrder={handlePlaceOrder}
      />

      <FloatingCart
        count={cartCount}
        total={total}
        onClick={() => setIsCartOpen(true)}
      />

    </div>
  )
}

export default App
