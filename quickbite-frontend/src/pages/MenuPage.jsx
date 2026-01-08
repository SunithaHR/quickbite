import Navbar from "../components/Navbar";
import CategoryTabs from "../components/CategoryTabs";
import FoodCard from "../components/FoodCard";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 249,
    tag: "Popular",
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Veg Burger",
    price: 149,
    tag: "Best Seller",
    category: "Burger",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    price: 199,
    tag: "Chef’s Special",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <CategoryTabs />

      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
