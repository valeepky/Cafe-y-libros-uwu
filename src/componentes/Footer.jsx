import React from "react";


function Footer() {
  return (
    <footer className="bg-pink-100 text-pink-700 text-center py-6 mt-10">
      <p className="mb-4">&copy; 2025 Librería Ficción. Todos los derechos reservados.</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

