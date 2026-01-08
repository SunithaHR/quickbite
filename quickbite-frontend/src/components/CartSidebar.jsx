const CartSidebar = ({ isOpen, onClose, cart, updateQuantity, subtotal, tax, deliveryFee, total, onCheckout }) => {
  return (
    <>
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />

      <div className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">✕</button>
            </div>
            <p className="text-gray-600 mt-1">{cart.length} items</p>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-gray-500">Add delicious items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center p-4 bg-gray-50 rounded-xl">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">₹{item.price} each</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50">−</button>
                      <span className="font-bold text-gray-900 min-w-[24px] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:shadow-md">+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}</span>
                </div>
              </div>

              <button onClick={onCheckout} className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300">Proceed to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartSidebar
