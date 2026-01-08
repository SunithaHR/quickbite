import SkeletonCard from "./SkeletonCard";
import MenuCard from './MenuCard';

const MenuGrid = ({ items, onAddToCart, onItemClick, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item.id} onClick={() => onItemClick(item)}>
          <MenuCard item={item} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
