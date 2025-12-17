import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavbarVisitante() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Café y Libros ☕📖</h1>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link to="/">Inicio</Link>
          <Link to="/libros">Libros</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/iniciar-sesion">Iniciar sesión</Link>
          <Link to="/registrarse">Registrarse</Link>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden bg-gray-700 px-6 py-4 space-y-3">
          <Link to="/">Inicio</Link>
          <Link to="/libros">Libros</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/iniciar-sesion">Iniciar sesión</Link>
          <Link to="/registrarse">Registrarse</Link>
        </nav>
      )}
    </header>
  );
}

export default NavbarVisitante;
