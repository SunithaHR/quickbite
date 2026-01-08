export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-slideIn">
      <div className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow-lg">
        {message}
      </div>
    </div>
  );
}
