export default function FloatingCart({ count, total, onClick }) {
  if (count === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <button
        onClick={onClick}
        className="flex items-center gap-4 px-6 py-3 bg-orange-500 text-white rounded-full shadow-xl hover:bg-orange-600 transition"
      >
        <span className="font-semibold">{count} items</span>
        <span className="font-bold">₹{total.toFixed(0)}</span>
        <span className="ml-2">View Cart →</span>
      </button>
    </div>
  );
}
