import React from "react";
import { useCart } from "../context/CartContext";

const books = [
  {
    title: "El Guardián Invisible",
    author: "Dolores Redondo",
    price: "S/. 49.90",
    img: "/ElGuardianInvisible.jpg",
  },
  {
    title: "La Sombra del Viento",
    author: "Carlos Ruiz Zafón",
    price: "S/. 59.90",
    img: "/LaSombradelViento.jpg",
  },
  {
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    price: "S/. 44.90",
    img: "/cienañosdesoledad.jpg",
  },
  {
    title: "Los Juegos del Hambre",
    author: "Suzanne Collins",
    price: "S/. 39.90",
    img: "/LosJuegosdelHambre.jpg",
  },
  {
    title: "El Código Da Vinci",
    author: "Dan Brown",
    price: "S/. 54.90",
    img: "/codigo.jpg",
  },
  {
    title: "La Chica del Tren",
    author: "Paula Hawkins",
    price: "S/. 42.90",
    img: "/LaChicadelTren.jpg",
  },
  {
    title: "It (Eso)",
    author: "Stephen King",
    price: "S/. 69.90",
    img: "/it.jpg",
  },
  {
    title: "Harry Potter y la Piedra Filosofal",
    author: "J.K. Rowling",
    price: "S/. 49.90",
    img: "/harry.jpg",
  },
];

function Products() {
  const { addToCart } = useCart();

  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <h3 className="text-3xl font-bold mb-10 text-center text-gray-700 drop-shadow-sm">
        Libros Destacados
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <div
            key={book.title}
            className="
              bg-gray-100
              shadow-lg
              rounded-2xl
              overflow-hidden
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              border border-gray-300
            "
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />

            <div className="p-5">
              <h4 className="text-lg font-bold text-gray-800 leading-tight">
                {book.title}
              </h4>

              <p className="text-sm text-gray-600 mt-1">{book.author}</p>

              <p className="text-gray-700 font-extrabold text-lg mt-3">
                {book.price}
              </p>

              <button
                onClick={() => addToCart(book)}
                className="
                  mt-4
                  w-full
                  bg-gray-700
                  hover:bg-gray-800
                  text-white
                  py-2.5
                  rounded-full
                  shadow-md
                  font-medium
                  tracking-wide
                  transition-all
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

export default Products;
