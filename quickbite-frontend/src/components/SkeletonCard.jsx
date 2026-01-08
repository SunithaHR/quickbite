export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-4 animate-pulse">
      <div className="h-40 bg-gray-200 rounded-xl mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
