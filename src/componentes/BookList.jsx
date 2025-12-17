import BookCard from "./BookCard";

const books = [
  { title: "Bajo la misma estrella", img: "/portada1.webp" },
  { title: "Yo antes de ti", img: "/portada2.jpg" },
  { title: "Antes de Diciembre", img: "/portada3.webp" },
  { title: "Perfectos Mentirosos", img: "/portada4.webp" },
  { title: "Boulevard", img: "/boulevard.jpg" },
  { title: "A través de mi ventana", img: "/ATDMV.jpg" },
  { title: "Culpa mía", img: "/culpa.jpg" },
  { title: "Tres metros sobre el cielo", img: "/tres.jpg" },
];

function BookList() {
  return (
    <main id="productos" className="max-w-7xl mx-auto py-12 px-6">
      <section className="py-16 bg-gray-100 rounded-3xl shadow-inner">
        <div className="max-w-7xl mx-auto">
          
          <h3 className="text-3xl font-extrabold text-gray-700 drop-shadow text-center mb-12">
            📚 Nuestros Libros 📚
          </h3>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book, index) => (
              <BookCard 




























              
                key={index}
                title={book.title}
                img={book.img}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookList;
