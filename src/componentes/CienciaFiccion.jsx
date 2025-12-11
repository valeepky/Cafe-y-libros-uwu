import React from "react";
import { useCart } from "../context/CartContext";

const scifiBooks = [
  {
    title: "Dune",
    author: "Frank Herbert",
    price: "S/. 64.90",
    img: "/Dunelibro.jpg",
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    price: "S/. 52.90",
    img: "/ReadyPlayerOne.jpg",
  },
  {
    title: "El Fin de la Eternidad",
    author: "Isaac Asimov",
    price: "S/. 48.90",
    img: "/ElFindelaEternidad.jpg",
  },
  {
    title: "Soy Leyenda",
    author: "Richard Matheson",
    price: "S/. 42.90",
    img: "/SoyLeyenda.jpg",
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
    img: "/CrónicasMarcianas.jpg",
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
    img: "/ElJuegodeEnder.jpg",
  },
];

export default function CienciaFiccion() {
  const { addToCart } = useCart();

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-gray-500 drop-shadow-sm">
        🚀 Libros de Ciencia Ficción 🚀
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {scifiBooks.map((book) => (
          <div
            key={book.title}
            className="
              bg-white 
              shadow-lg 
              rounded-2xl 
              overflow-hidden 
              hover:shadow-2xl 
              hover:-translate-y-2 
              transition-all 
              duration-300
              border border-gray-200
            "
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5 text-center">
              <h4 className="text-lg font-semibold text-gray-700">
                {book.title}
              </h4>
              <p className="text-sm text-gray-500">{book.author}</p>

              <p className="text-gray-600 font-bold mt-3 text-lg">
                {book.price}
              </p>

              <button
                onClick={() => addToCart(book)}
                className="
                  mt-4 
                  w-full 
                  bg-gray-700 
                  hover:bg-gray-600 
                  text-white 
                  py-2.5 
                  rounded-full 
                  shadow-md 
                  transition-all 
                  font-semibold
                  hover:shadow-lg
                "
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




