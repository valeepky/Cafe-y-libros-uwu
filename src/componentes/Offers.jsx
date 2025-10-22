import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Importa el hook del contexto

const offers = [
  {
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    oldPrice: "S/. 69.90",
    newPrice: "S/. 49.90",
    img: "/public/harry.jpg",
  },
  {
    title: "It (Eso)",
    author: "Stephen King",
    oldPrice: "S/. 79.90",
    newPrice: "S/. 59.90",
    img: "/public/it.jpg",
  },
  {
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    oldPrice: "S/. 54.90",
    newPrice: "S/. 39.90",
    img: "/public/orgulloyperjuicio.jpg",
  },
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    oldPrice: "S/. 34.90",
    newPrice: "S/. 24.90",
    img: "/public/principito.jpg",
  },
];

export default function Offers() {
  const { addToCart } = useCart(); // ✅ Hook dentro del componente

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <section id="ofertas" className="bg-pink-50 py-16 px-6 rounded-3xl shadow-inner">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-500 mb-2">
            🌷 Ofertas Especiales 🌷
          </h2>
          <p className="text-pink-700/80 text-lg">
            Aprovecha nuestros descuentos exclusivos por tiempo limitado 💕
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
          {offers.map((book) => (
            <div
              key={book.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-pink-600">
                  {book.title}
                </h4>
                <p className="text-sm text-pink-700/80">{book.author}</p>
                <p className="text-pink-400 line-through mt-2">
                  {book.oldPrice}
                </p>
                <p className="text-pink-600 font-bold text-lg">
                  {book.newPrice}
                </p>
                <button
                  onClick={() => addToCart(book)} // ✅ Botón funcional
                  className="mt-4 w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-2.5 rounded-full shadow-md transition-all font-semibold"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
