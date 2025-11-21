import { Link } from 'react-router-dom';

function NavbarVisitante() {
    return (
        <header className="bg-pink-300 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                
                <h1 className="text-2xl font-bold text-white drop-shadow">
                    Mi Página
                </h1>

                <nav>
                    <ul className="flex space-x-6 text-white font-medium">
                        <li>
                            <Link 
                                to="/" 
                                className="hover:text-pink-100 transition"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/libros" 
                                className="hover:text-pink-100 transition"
                            >
                                Libros
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contacto" 
                                className="hover:text-pink-100 transition"
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/ofertas" 
                                className="hover:text-pink-100 transition"
                            >
                                Ofertas
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/iniciar-sesion" 
                                className="hover:text-pink-100 transition"
                            >
                                Iniciar sesión
                            </Link>
                        </li>
                        
                        <li>
                            <Link 
                                to="/registrarse" 
                                className="bg-pink-500 hover:bg-pink-400 text-white py-1 px-3 rounded-lg transition shadow"
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
