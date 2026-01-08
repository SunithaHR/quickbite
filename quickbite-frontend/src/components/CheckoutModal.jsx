const CheckoutModal = ({ isOpen, onClose, cart, subtotal, tax, deliveryFee, total, onPlaceOrder }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Summary</h2>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-3 space-y-2">
          <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-600"><span>Tax</span><span>₹{tax.toFixed(2)}</span></div>
          <div className="flex justify-between text-gray-600"><span>Delivery</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}</span></div>
          <div className="flex justify-between text-lg font-bold"><span>Total</span><span>₹{total.toFixed(2)}</span></div>
        </div>

        <button onClick={onPlaceOrder} className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300">Place Order</button>
        <button onClick={onClose} className="w-full py-2 text-gray-600 rounded-xl border border-gray-300 hover:bg-gray-100 transition">Cancel</button>
      </div>
    </div>
  )
}

export default CheckoutModal
