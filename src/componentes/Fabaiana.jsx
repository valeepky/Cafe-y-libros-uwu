import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Importa el hook del contexto

const romanceBooks = [
  {
    title: "Bajo la Misma Estrella",
    author: "John Green",
    price: "S/. 54.90",
    img: "/Bajo la Misma Estrella.jpg",
  },
  {
    title: "Yo Antes de Ti",
    author: "Jojo Moyes",
    price: "S/. 52.90",
    img: "/Yo Antes de Ti.jpg",
  },
  {
    title: "Orgullo y Prejuicio",
    author: "Jane Austen",
    price: "S/. 47.90",
    img: "/orgulloyperjuicio.jpg",
  },
  {
    title: "A Dos Metros de Ti",
    author: "Rachael Lippincott",
    price: "S/. 49.90",
    img: "/A Dos Metros de Ti.jpg",
  },
  {
    title: "Posdata: Te Amo",
    author: "Cecelia Ahern",
    price: "S/. 55.90",
    img: "/Posdata Te Amo.jpg",
  },
  {
    title: "Bajo el Cielo Escarlata",
    author: "Mark Sullivan",
    price: "S/. 58.90",
    img: "/Bajo el Cielo Escarlata.jpg",
  },
  {
    title: "Eleanor & Park",
    author: "Rainbow Rowell",
    price: "S/. 45.90",
    img: "/Eleanor & Park.jpg",
  },
  {
    title: "After",
    author: "Anna Todd",
    price: "S/. 59.90",
    img: "/After.jpg",
  },
];

export default function Fabaiana() {
  const { addToCart } = useCart(); // ✅ Llama el hook dentro del componente

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-pink-500">
        💕 Libros de Romance 💕
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {romanceBooks.map((book) => (
          <div
            key={book.title}
            className="bg-pink-100 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform hover:shadow-2xl"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold text-pink-600">
                {book.title}
              </h4>
              <p className="text-sm text-pink-700/80">{book.author}</p>
              <p className="text-pink-500 font-bold mt-2">{book.price}</p>

              <button
                onClick={() => addToCart(book)} // ✅ Agrega el libro al carrito
                className="mt-3 w-full bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-full shadow-md transition font-semibold"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

