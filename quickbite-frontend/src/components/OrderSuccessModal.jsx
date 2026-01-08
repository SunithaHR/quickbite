export default function OrderSuccessModal({ isOpen, order, onViewOrders }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center shadow-xl">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Order Placed Successfully!
        </h2>
        <p className="text-gray-600 mb-4">
          Your delicious food is being prepared.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 text-left text-sm mb-6">
          <p><strong>Order ID:</strong> #{order.id}</p>
          <p><strong>Total:</strong> ₹{order.total}</p>
          <p><strong>Status:</strong> <span className="text-green-600">Placed</span></p>
        </div>

        <button
          onClick={onViewOrders}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          View My Orders
        </button>
      </div>
    </div>
  )
}
