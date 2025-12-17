import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavbarUsuario() {
  const auth = getAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Bienvenido ☕📖</h1>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link to="/">Inicio</Link>
          <Link to="/libros">Libros</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/comunidad">Comunidad</Link>
          <button
            onClick={() => signOut(auth)}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Cerrar sesión
          </button>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden bg-gray-700 px-6 py-4 space-y-3">
          <Link to="/">Inicio</Link>
          <Link to="/libros">Libros</Link>
          <Link to="/ofertas">Ofertas</Link>
          <Link to="/comunidad">Comunidad</Link>
          <button onClick={() => signOut(auth)}>Cerrar sesión</button>
        </nav>
      )}
    </header>
  );
}

export default NavbarUsuario;
