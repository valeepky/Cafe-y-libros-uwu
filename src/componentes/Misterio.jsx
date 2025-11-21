import React from "react";
import { useCart } from "../context/CartContext";

const mysteryBooks = [
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    price: "S/. 49.90",
    img: "/public/Asesinato en el Orient Express.jpg",
  },
  {
    title: "El Código Da Vinci",
    author: "Dan Brown",
    price: "S/. 59.90",
    img: "/public/El Código da Vinci.jpg",
  },
  {
    title: "La Chica del Tren",
    author: "Paula Hawkins",
    price: "S/. 44.90",
    img: "/public/La Chica del Tren.jpg",
  },
  {
    title: "El Silencio de los Corderos",
    author: "Thomas Harris",
    price: "S/. 56.90",
    img: "/public/El Silencio de los Corderos.jpg",
  },
  {
    title: "Perdida (Gone Girl)",
    author: "Gillian Flynn",
    price: "S/. 52.90",
    img: "/public/Perdida (Gone Girl).jpg",
  },
  {
    title: "El Nombre de la Rosa",
    author: "Umberto Eco",
    price: "S/. 64.90",
    img: "/public/El Nombre de la Rosa.jpg",
  },
  {
    title: "La Paciente Silenciosa",
    author: "Alex Michaelides",
    price: "S/. 48.90",
    img: "/public/la paciente silenciosa.jpg",
  },
  {
    title: "El Psicoanalista",
    author: "John Katzenbach",
    price: "S/. 57.90",
    img: "/public/El Psicoanalista.jpg",
  },
];

export default function Misterio() {
  const { addToCart } = useCart();

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-12 text-center text-pink-500">
        🕵️‍♀️ Libros de Misterio y Suspenso 🕵️‍♂️
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mysteryBooks.map((book) => (
          <div
            key={book.title}
            className="
              bg-white 
              rounded-2xl 
              shadow-lg 
              overflow-hidden 
              hover:shadow-2xl 
              hover:-translate-y-2 
              transition-all 
              duration-300
              border border-pink-100
            "
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
              <p className="text-sm text-pink-700/70">{book.author}</p>

              <p className="text-pink-600 font-bold text-lg mt-3">
                {book.price}
              </p>

              <button
                onClick={() => addToCart(book)}
                className="
                  mt-4 w-full 
                  bg-gradient-to-r from-pink-400 to-pink-500 
                  hover:from-pink-500 hover:to-pink-600 
                  text-white py-2.5 
                  rounded-full 
                  shadow-md 
                  font-semibold 
                  transition-all
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
