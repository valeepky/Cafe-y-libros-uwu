import { Link } from "react-router-dom";

function Genres() {
  const genres = [
    { name: "Ficción", slug: "/ficcion" },
    { name: "Romance", slug: "/romance" },
    { name: "Misterio", slug: "/misterio" },
    { name: "Ciencia Ficción", slug: "/cienciaficcion" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <h3 className="text-3xl font-bold text-center mb-8">
        Explora por Género
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {genres.map((g) => (
          <Link
            key={g.slug}
            to={g.slug}
            className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            {g.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Genres;
