import React from "react";
import { useCart } from "../context/CartContext";

const books = [
  {
    title: "El Guardián Invisible",
    author: "Dolores Redondo",
    price: "S/. 49.90",
    img: "/public/El Guardián Invisible.jpg",
  },
  {
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    price: "S/. 59.90",
    img: "/public/La Sombra del Viento.jpg",
  },
  {
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    price: "S/. 44.90",
    img: "/public/cienañosdesoledad.jpg",
  },
  {
    title: "Los Juegos del Hambre",
    author: "Suzanne Collins",
    price: "S/. 39.90",
    img: "/public/Los Juegos del Hambre.jpg",
  },
  {
    title: "El Código Da Vinci",
    author: "Dan Brown",
    price: "S/. 54.90",
    img: "/public/El Código Da Vinci.jpg",
  },
  {
    title: "La Chica del Tren",
    author: "Paula Hawkins",
    price: "S/. 42.90",
    img: "/public/La Chica del Tren.jpg",
  },
  {
    title: "It (Eso)",
    author: "Stephen King",
    price: "S/. 69.90",
    img: "/public/it.jpg",
  },
  {
    title: "Harry Potter y la Piedra Filosofal",
    author: "J.K. Rowling",
    price: "S/. 49.90",
    img: "/public/harry.jpg",
  },
];

function Products() {
  // ✅ Aquí sí puedes usar el hook
  const { addToCart } = useCart();

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-2xl font-semibold mb-8 text-center text-pink-400">
        Libros Destacados
      </h3>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="bg-pink-100 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition transform hover:shadow-2xl"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-pink-600">
                {book.title}
              </h4>
              <p className="text-sm text-pink-700/80">{book.author}</p>
              <p className="text-pink-500 font-bold mt-2">{book.price}</p>
              <button
                onClick={() => addToCart(book)}
                className="mt-3 w-full bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-full shadow-md transition"
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

export default Products;
