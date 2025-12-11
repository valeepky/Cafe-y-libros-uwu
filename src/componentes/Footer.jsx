import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16 shadow-inner">
      <div className="container mx-auto text-center">
        
        <p className="text-sm md:text-base mb-6 font-medium">
          &copy; 2025 <span className="font-bold text-gray-100">Librería Ficción</span>.  
          Todos los derechos reservados.
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition transform hover:scale-110"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

