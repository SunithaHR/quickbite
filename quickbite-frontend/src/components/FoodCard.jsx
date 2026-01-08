export default function FoodCard({ item }) {
  console.log("item:",item)
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition">
      <div className="relative overflow-hidden">
       <img
  src={item.image}
  alt={item.name}
  onError={(e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";
  }}
  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
/>


        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
          {item.tag}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-orange-600">
            ₹{item.price}
          </span>

          <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 active:scale-95 transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
