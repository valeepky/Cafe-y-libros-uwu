import BookCard from "./BookCard";

// Aquí defines tus libros (nombre + portada)
const books = [
  { title: "Bajo la misma estrella", img: "/public/portada1.webp" },
  { title: "Yo antes de ti", img: "/public/portada2.jpg" },
  { title: "Antes de Diciembre", img: "/public/portada3.webp" },
  { title: "Perfectos Mentirosos", img: "/public/portada4.webp" },
  { title: "Boulevard", img: "/public/boulevard.jpg" },
  { title: "A través de mi ventana", img: "/public/ATDMV.jpg" },
  { title: "Culpa mía", img: "/public/culpa.jpg" },
  { title: "Tres metros sobre el cielo", img: "/public/tres.jpg" },
];

function BookList() {
  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <section className="py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-pink-700 mb-10 text-center">
            Nuestros Libros
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <BookCard key={index} title={book.title} img={book.img} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookList;

