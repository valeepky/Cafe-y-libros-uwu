import React from "react";

function Hero() {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')] bg-cover bg-center text-white py-28">
      <div className="bg-pink-400/70 py-12 px-6 text-center rounded-lg mx-6 md:mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4">Explora el mundo de los Libros</h2>
        <p className="text-lg mb-6">Sumérgete en historias que te transportarán a otros universos.</p>
        <a href="#productos" className="bg-pink-400 hover:bg-pink-500 px-6 py-3 rounded-full font-semibold transition shadow-lg">
          Ver Libros
        </a>
      </div>
    </section>
  );
}

export default Hero;
