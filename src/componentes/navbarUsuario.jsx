import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavbarUsuario() {
    const auth = getAuth();

    const cerrarSesion = async () => {
        await signOut(auth);
    };

    return (
        <header className="bg-pink-300 shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-2xl font-bold text-white drop-shadow">
                    Bienvenido
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
                                to="/comunidad" 
                                className="hover:text-pink-100 transition"
                            >
                                Comunidad
                            </Link>
                        </li>
                        <li>
                            <button 
                                onClick={cerrarSesion}
                                className="bg-pink-500 hover:bg-pink-400 text-white py-1 px-3 rounded-lg transition shadow"
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavbarUsuario;
