import React from "react";
import { Link } from 'react-router-dom';
function Genres() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-semibold mb-6 text-center text-pink-400">Explora por Género</h3>
      <div className="flex flex-wrap justify-center gap-4">
          <Link to="/ficcion" className="px-5 py-2 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 hover:scale-105 transition shadow-md">
            Ficción
          </Link>
          <Link to="/romance" className="px-5 py-2 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 hover:scale-105 transition shadow-md">
            Romance
          </Link>
         
          <Link to="/misterio" className="px-5 py-2 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 hover:scale-105 transition shadow-md">
            Misterio
          </Link>
            <Link to="/cienciaficcion" className="px-5 py-2 bg-pink-200 text-pink-700 rounded-full hover:bg-pink-300 hover:scale-105 transition shadow-md">
            Ciencia Ficción
          </Link>
      </div>
    </section>
  );
}

export default Genres;
