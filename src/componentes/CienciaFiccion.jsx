import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Importa el contexto del carrito

const scifiBooks = [
  {
    title: "Dune",
    author: "Frank Herbert",
    price: "S/. 64.90",
    img: "/Dune libro.jpg",
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    price: "S/. 52.90",
    img: "/Ready Player One.jpg",
  },
  {
    title: "El Fin de la Eternidad",
    author: "Isaac Asimov",
    price: "S/. 48.90",
    img: "/El Fin de la Eternidad.jpg",
  },
  {
    title: "Soy Leyenda",
    author: "Richard Matheson",
    price: "S/. 42.90",
    img: "/Soy Leyenda.jpg",
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    price: "S/. 59.90",
    img: "/Hyperion.jpg",
  },
  {
    title: "Crónicas Marcianas",
    author: "Ray Bradbury",
    price: "S/. 46.90",
    img: "/Crónicas Marcianas.jpg",
  },
  {
    title: "Neuromante",
    author: "William Gibson",
    price: "S/. 54.90",
    img: "/Neuromante.jpg",
  },
  {
    title: "El Juego de Ender",
    author: "Orson Scott Card",
    price: "S/. 49.90",
    img: "/El Juego de Ender.jpg",
  },
];

export default function CienciaFiccion() {
  const { addToCart } = useCart(); // ✅ Usa el hook dentro del componente

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-pink-500">
        🚀 Libros de Ciencia Ficción 🚀
      </h3>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {scifiBooks.map((book) => (
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
                onClick={() => addToCart(book)} // ✅ Agrega al carrito
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
