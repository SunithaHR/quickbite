export default function CategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex gap-3 overflow-x-auto py-4 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition
            ${
              selectedCategory === cat
                ? "bg-orange-500 text-white shadow"
                : "bg-white border text-gray-600 hover:bg-orange-50"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
