import React from "react";
import { useCart } from "../context/CartContext";

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
  const { addToCart } = useCart();

  return (
    <main id="ofertas" className="max-w-7xl mx-auto py-16 px-6">
      <section className="bg-white rounded-3xl shadow-xl border border-pink-200 py-16 px-6">
        
        {/* TITULO */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-pink-500 drop-shadow-sm">
            ✨ Ofertas Especiales ✨
          </h2>
          <p className="text-pink-700/80 text-lg mt-2">
            Descuentos exclusivos por tiempo limitado 💖
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {offers.map((book) => (
            <div
              key={book.title}
              className="relative bg-pink-50 rounded-2xl border border-pink-200 shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Etiqueta de oferta */}
              <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                -{(
                  ((parseFloat(book.oldPrice.replace("S/.", "")) -
                    parseFloat(book.newPrice.replace("S/.", ""))) /
                    parseFloat(book.oldPrice.replace("S/.", ""))) *
                  100
                ).toFixed(0)}
                %
              </div>

              {/* IMAGEN */}
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-72 object-cover"
              />

              {/* INFO */}
              <div className="p-5 text-center">
                <h4 className="text-lg font-bold text-pink-600">{book.title}</h4>
                <p className="text-sm text-gray-600">{book.author}</p>

                <p className="text-pink-400 line-through mt-3">{book.oldPrice}</p>
                <p className="text-pink-600 font-extrabold text-xl">
                  {book.newPrice}
                </p>

                <button
                  onClick={() => addToCart(book)}
                  className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-full shadow-md font-semibold transition-all hover:shadow-lg"
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
