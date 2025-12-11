import React from "react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-700 py-20 px-6 overflow-hidden"
    >
      {/* ICONOS FLOTANTES */}
      <div className="absolute top-10 left-10 text-gray-500 opacity-30 text-7xl animate-bounce-slow">
        ⭐
      </div>
      <div className="absolute bottom-16 right-16 text-gray-500 opacity-20 text-8xl animate-bounce-slower">
        ✨
      </div>

      {/* CONTENIDO */}
      <div className="animate-fade-in-up w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-100 mb-4 drop-shadow-md">
            Contáctanos
          </h2>
          <p className="text-gray-300 text-lg font-medium">
            ¿Tienes alguna pregunta o sugerencia? ¡Estamos para ayudarte!
          </p>
        </div>

        {/* FORMULARIO */}
        <form className="max-w-2xl mx-auto backdrop-blur-md bg-gray-900/60 border border-gray-600 shadow-2xl rounded-3xl p-12 space-y-8">
          <div>
            <label className="block text-gray-200 font-semibold mb-2 text-xl">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-gray-600 rounded-2xl p-4 text-lg bg-gray-800 placeholder-gray-400 text-gray-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-2 text-xl">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="w-full border border-gray-600 rounded-2xl p-4 text-lg bg-gray-800 placeholder-gray-400 text-gray-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-200 font-semibold mb-2 text-xl">
              Mensaje
            </label>
            <textarea
              rows="4"
              placeholder="Escribe tu mensaje..."
              className="w-full border border-gray-600 rounded-2xl p-4 text-lg bg-gray-800 placeholder-gray-400 text-gray-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white text-2xl font-bold py-4 rounded-full shadow-lg hover:bg-gray-500 hover:shadow-gray-400 transition-all active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      {/* ANIMACIONES */}
      <style>
        {`
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.9s ease-out;
        }

        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 3.5s ease-in-out infinite;
        }

        @keyframes bounce-slower {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-18px); }
        }
        .animate-bounce-slower {
            animation: bounce-slower 5s ease-in-out infinite;
        }
        `}
      </style>
    </section>
  );
}
