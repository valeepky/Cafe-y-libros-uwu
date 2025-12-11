function BookCard({ title, img }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition transform">
      <img src={img} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <h4 className="font-semibold text-gray-700">{title}</h4>
      </div>
    </div>
  );
}

export default BookCard;

