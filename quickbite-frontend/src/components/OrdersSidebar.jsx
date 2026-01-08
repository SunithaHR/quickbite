// src/components/OrdersSidebar.jsx
export default function OrdersSidebar({ isOpen, onClose, orders }) {
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform z-50
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Orders</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900">Close</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {orders.length === 0 ? (
            <p className="text-gray-500">No orders yet.</p>
          ) : (
            orders.map((order, idx) => (
              <div key={idx} className="border rounded-lg p-3 mb-3 bg-orange-50">
                <p className="font-semibold">Order #{order.id || idx + 1}</p>
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
      </div>
    </div>
  );
}
