import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Menu, X } from 'lucide-react';

function NavbarUsuario() {
    const auth = getAuth();
    const [open, setOpen] = useState(false);

    const cerrarSesion = async () => {
        await signOut(auth);
    };

    return (
        <header className="bg-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white drop-shadow">
                    Bienvenido a Cafe y libros ☕📖
                </h1>

                {/* Botón Hamburguesa móvil */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28}/> : <Menu size={28}/>}
                </button>

                {/* Menú Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6 text-gray-200 font-medium">
                        <li><Link to="/" className="hover:text-white transition">Inicio</Link></li>
                        <li><Link to="/libros" className="hover:text-white transition">Libros</Link></li>
                        <li><Link to="/contacto" className="hover:text-white transition">Contacto</Link></li>
                        <li><Link to="/ofertas" className="hover:text-white transition">Ofertas</Link></li>
                        <li><Link to="/comunidad" className="hover:text-white transition">Comunidad</Link></li>
                        <li>
                            <button 
                                onClick={cerrarSesion}
                                className="bg-gray-600 hover:bg-gray-500 text-white py-1 px-3 rounded-lg transition shadow"
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Menú Móvil */}
            {open && (
                <div className="md:hidden bg-gray-700 shadow-inner">
                    <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-200 font-semibold">
                        <li><Link onClick={() => setOpen(false)} to="/">Inicio</Link></li>
                        <li><Link onClick={() => setOpen(false)} to="/libros">Libros</Link></li>
                        <li><Link onClick={() => setOpen(false)} to="/contacto">Contacto</Link></li>
                        <li><Link onClick={() => setOpen(false)} to="/ofertas">Ofertas</Link></li>
                        <li><Link onClick={() => setOpen(false)} to="/comunidad">Comunidad</Link></li>
                        <li>
                            <button 
                                onClick={cerrarSesion}
                                className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg w-full transition shadow"
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default NavbarUsuario;
