import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">
          Café y Libros ☕📖
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Descubre historias, comparte ideas y encuentra tu próxima lectura favorita.
        </p>

        <Link to="/iniciar-sesion">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl text-lg transition">
            Iniciar sesión
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
