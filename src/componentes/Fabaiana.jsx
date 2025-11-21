import React from "react";
import { useCart } from "../context/CartContext";

const romanceBooks = [
  {
    title: "Bajo la Misma Estrella",
    author: "John Green",
    price: "S/. 54.90",
    img: "/BajolaMismaEstrella.jpg",
  },
  {
    title: "Yo Antes de Ti",
    author: "Jojo Moyes",
    price: "S/. 52.90",
    img: "/YoAntesdeTi.jpg",
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
    img: "/ADosMetrosdeTi.jpg",
  },
  {
    title: "Posdata: Te Amo",
    author: "Cecelia Ahern",
    price: "S/. 55.90",
    img: "/PosdataTeAmo.jpg",
  },
  {
    title: "Bajo el Cielo Escarlata",
    author: "Mark Sullivan",
    price: "S/. 58.90",
    img: "/BajoelCieloEscarlata.jpg",
  },
  {
    title: "Eleanor & Park",
    author: "Rainbow Rowell",
    price: "S/. 45.90",
    img: "/EleanorPark.jpg",
  },
  {
    title: "After",
    author: "Anna Todd",
    price: "S/. 59.90",
    img: "/After.jpg",
  },
];

export default function Fabaiana() {
  const { addToCart } = useCart();

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-pink-500 drop-shadow-sm">
        💕 Libros de Romance 💕
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {romanceBooks.map((book) => (
          <div
            key={book.title}
            className="bg-pink-50 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform hover:shadow-2xl border border-pink-100"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5 text-center">
              <h4 className="text-lg font-semibold text-pink-600">
                {book.title}
              </h4>

              <p className="text-sm text-pink-700/80">{book.author}</p>

              <p className="text-pink-500 font-bold mt-3 text-lg">
                {book.price}
              </p>

              <button
                onClick={() => addToCart(book)}
                className="mt-4 w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white py-2.5 rounded-full shadow-md transition-all font-semibold"
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
