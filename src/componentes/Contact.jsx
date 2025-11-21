import React from "react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-200 to-pink-100 py-20 px-6 overflow-hidden"
    >
      {/* 💗 CORAZONES FLOTANTES */}
      <div className="absolute top-10 left-10 text-pink-300 opacity-40 text-7xl animate-bounce-slow">
        💗
      </div>
      <div className="absolute bottom-16 right-16 text-pink-300 opacity-30 text-8xl animate-bounce-slower">
        💕
      </div>

      {/* CONTENIDO */}
      <div className="animate-fade-in-up w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-pink-700 mb-4 drop-shadow-md">
            💌 Contáctanos
          </h2>
          <p className="text-pink-700 text-lg font-medium">
            ¿Tienes alguna pregunta o sugerencia? ¡Nos encantará saber de ti! ✨
          </p>
        </div>

        {/* FORMULARIO */}
        <form className="max-w-2xl mx-auto backdrop-blur-md bg-white/70 border border-pink-300 shadow-2xl rounded-3xl p-12 space-y-8">
          <div>
            <label className="block text-pink-700 font-semibold mb-2 text-xl">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border border-pink-300 rounded-2xl p-4 text-lg bg-pink-50 placeholder-pink-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-semibold mb-2 text-xl">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="w-full border border-pink-300 rounded-2xl p-4 text-lg bg-pink-50 placeholder-pink-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-pink-700 font-semibold mb-2 text-xl">
              Mensaje
            </label>
            <textarea
              rows="4"
              placeholder="Escribe tu mensaje..."
              className="w-full border border-pink-300 rounded-2xl p-4 text-lg bg-pink-50 placeholder-pink-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white text-2xl font-bold py-4 rounded-full shadow-lg hover:bg-pink-400 hover:shadow-pink-300 transition-all active:scale-95"
          >
            Enviar Mensaje ✨
          </button>
        </form>
      </div>

      {/* 🌸 ANIMACIONES PERSONALIZADAS */}
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
