// Navbar.jsx
import { ShoppingCart, ListChecks, MapPin } from "lucide-react";

export default function Navbar({ cartCount, onCartClick, onOrdersClick }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Quick<span className="text-orange-500">Bite</span>
          </h1>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={14} /> Bangalore
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Orders Button */}
          <button
            onClick={onOrdersClick}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ListChecks className="w-6 h-6 text-gray-800" />
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}
