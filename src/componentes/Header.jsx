import React from "react";
import {Link} from 'react-router-dom';
function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-400 to-pink-500 shadow-lg sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white tracking-wide">Cafe y Letras </h1>
        <nav>
          <ul className="flex gap-8">
              <li className="group relative">
                <Link to="/" className="text-white font-semibold hover:text-pink-100 transition">Inicio</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link to="/libros" className="text-white font-semibold hover:text-pink-100 transition">Libros</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link to="/ofertas" className="text-white font-semibold hover:text-pink-100 transition">Ofertas</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </li>
              <li className="group relative">
                <Link to="/contacto" className="text-white font-semibold hover:text-pink-100 transition">Contacto</Link>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

