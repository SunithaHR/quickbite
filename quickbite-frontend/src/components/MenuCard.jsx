const MenuCard = ({ item, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden transition hover:-translate-y-1">
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) =>
            (e.target.src =
              "https://images.unsplash.com/photo-1504674900247-0877df9cc836")
          }
        />

        {item.badge && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
            {item.badge}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">
          {item.name}
        </h3>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-orange-600">
            ₹{item.price}
          </span>

<button
  onClick={(e) => {
    e.stopPropagation();
    onAddToCart(item);
  }}
  className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600"
>
  Add
</button>

        </div>
      </div>
    </div>
  );
};

export default MenuCard;
