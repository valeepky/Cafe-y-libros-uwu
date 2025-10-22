import React from "react";


export default function Contact() {
  return (
    <section id="contacto" className="bg-pink-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-pink-500 mb-2">💌 Contáctanos</h2>
        <p className="text-pink-700/80 text-lg">
          ¿Tienes alguna pregunta o sugerencia? ¡Nos encantará saber de ti!
        </p>
      </div>

      {/* Formulario de contacto */}
      <form className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div>
          <label className="block text-pink-600 font-semibold mb-2">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-semibold mb-2">Correo electrónico</label>
          <input
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-pink-600 font-semibold mb-2">Mensaje</label>
          <textarea
            rows="4"
            placeholder="Escribe tu mensaje..."
            className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-3 rounded-full shadow-md transition-all"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
