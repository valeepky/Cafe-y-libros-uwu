import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavbarVisitante() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-pink-300 shadow-md relative z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                {/* LOGO */}
                <h1 className="text-2xl font-bold text-white drop-shadow">
                    Mi Página
                </h1>

                {/* Botón Hamburguesa móvil */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* NAV */}
                <nav
                    className={`
                        absolute md:static left-0 top-16 w-full md:w-auto 
                        bg-pink-300 md:bg-transparent transition-all duration-300 overflow-hidden
                        ${open ? "max-h-[500px] opacity-100" 
                               : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"}
                    `}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6 text-white font-medium p-4 md:p-0">

                        <li>
                            <Link 
                                to="/" 
                                onClick={() => setOpen(false)}
                                className="hover:text-pink-100 transition block py-2"
                            >
                                Inicio
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/libros" 
                                onClick={() => setOpen(false)}
                                className="hover:text-pink-100 transition block py-2"
                            >
                                Libros
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/contacto" 
                                onClick={() => setOpen(false)}
                                className="hover:text-pink-100 transition block py-2"
                            >
                                Contacto
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/ofertas" 
                                onClick={() => setOpen(false)}
                                className="hover:text-ppink-100 transition block py-2"
                            >
                                Ofertas
                            </Link>
                        </li>

                        {/* INICIAR SESIÓN */}
                        <li className="mt-2 md:mt-0">
                            <Link 
                                to="/iniciar-sesion"
                                onClick={() => setOpen(false)}
                                className="
                                    bg-pink-500 hover:bg-pink-400 
                                    text-white py-2 px-4 rounded-lg 
                                    transition shadow block text-center
                                "
                            >
                                Iniciar sesión
                            </Link>
                        </li>

                        {/* REGISTRARSE */}
                        <li className="mt-2 md:mt-0">
                            <Link 
                                to="/registrarse"
                                onClick={() => setOpen(false)}
                                className="
                                    bg-pink-500 hover:bg-pink-400 
                                    text-white py-2 px-4 rounded-lg 
                                    transition shadow block text-center
                                "
                            >
                                Registrarse
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavbarVisitante;
