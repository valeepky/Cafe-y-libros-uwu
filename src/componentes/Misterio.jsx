import React from "react";
import { useCart } from "../context/CartContext";

const mysteryBooks = [
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    price: "S/. 49.90",
    img: "/AsesinatoenelOrientExpress.jpg",
  },
  {
    title: "El Código Da Vinci",
    author: "Dan Brown",
    price: "S/. 59.90",
    img: "/codigo.jpg",
  },
  {
    title: "La Chica del Tren",
    author: "Paula Hawkins",
    price: "S/. 44.90",
    img: "/LaChicadelTren.jpg",
  },
  {
    title: "El Silencio de los Corderos",
    author: "Thomas Harris",
    price: "S/. 56.90",
    img: "/ElSilenciodelosCorderos.jpg",
  },
  {
    title: "Perdida (Gone Girl)",
    author: "Gillian Flynn",
    price: "S/. 52.90",
    img: "/Perdida.jpg",
  },
  {
    title: "El Nombre de la Rosa",
    author: "Umberto Eco",
    price: "S/. 64.90",
    img: "/ElNombredelaRosa.jpg",
  },
  {
    title: "La Paciente Silenciosa",
    author: "Alex Michaelides",
    price: "S/. 48.90",
    img: "/lapacientesilenciosa.jpg",
  },
  {
    title: "El Psicoanalista",
    author: "John Katzenbach",
    price: "S/. 57.90",
    img: "/ElPsicoanalista.jpg",
  },
];

export default function Misterio() {
  const { addToCart } = useCart();

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-12 text-center text-gray-600">
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
              border border-gray-300
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

              <p className="text-gray-700 font-bold text-lg mt-3">
                {book.price}
              </p>

              <button
                onClick={() => addToCart(book)}
                className="
                  mt-4 w-full 
                  bg-gradient-to-r from-gray-600 to-gray-700 
                  hover:from-gray-700 hover:to-gray-800 
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
