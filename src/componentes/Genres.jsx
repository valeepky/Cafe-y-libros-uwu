import React from "react";
import { Link } from 'react-router-dom';

function Genres() {
  const genres = [
    { name: "Ficción", slug: "/ficcion" },
    { name: "Romance", slug: "/romance" },
    { name: "Misterio", slug: "/misterio" },
    { name: "Ciencia Ficción", slug: "/cienciaficcion" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h3 className="text-3xl font-bold mb-8 text-center text-pink-500 drop-shadow-sm">
        Explora por Género
      </h3>

      <div className="flex flex-wrap justify-center gap-5">
        {genres.map((g) => (
          <Link
            key={g.slug}
            to={g.slug}
            className="
              px-7 py-3 
              bg-pink-100 
              text-pink-700 
              rounded-full 
              shadow-md 
              hover:bg-pink-200 
              hover:shadow-lg
              hover:-translate-y-1 
              transition-all 
              text-lg 
              font-medium 
              tracking-wide
            "
          >
            {g.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Genres;
