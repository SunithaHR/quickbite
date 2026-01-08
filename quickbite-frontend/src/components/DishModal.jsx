export default function DishModal({ item, onClose, onAdd }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative bg-white w-[90%] max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">
        <img
          src={item.image}
          alt={item.name}
          className="h-60 w-full object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {item.name}
          </h2>

          <p className="text-gray-600 mt-2">
            {item.description}
          </p>

          <div className="flex items-center justify-between mt-6">
            <span className="text-2xl font-extrabold text-orange-600">
              ₹{item.price}
            </span>

            <button
              onClick={() => {
                onAdd(item);
                onClose();
              }}
              className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 active:scale-95 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2 hover:bg-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
