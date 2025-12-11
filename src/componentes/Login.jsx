import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function iniciarSesion() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Inicio de sesión exitoso");
                navigate("/");
            })
            .catch((error) => {
                console.log("Error al iniciar sesión");
                console.log(error);
            });
    }

    function iniciarConGoogle() {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(() => {
                console.log("Iniciaste sesión con Google");
                navigate("/");
            })
            .catch((error) => {
                console.log("Error con iniciar con Google");
                console.log(error);
            });
    }

    return (
        <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-gray-300 to-gray-100 overflow-hidden">

            {/* 💗 ICONO (LO DEJO EN EMOJI PERO LO HAGO GRIS) */}
            <div className="absolute bottom-10 left-10 text-gray-400 opacity-30 text-8xl animate-bounce-slow">
                💗
            </div>

            {/* CARD */}
            <div className="animate-fade-in-up backdrop-blur-md bg-white/70 p-14 rounded-3xl shadow-2xl w-[460px] border border-gray-400">
                
                <h1 className="text-5xl font-extrabold text-center text-gray-700 mb-12 drop-shadow-lg tracking-wide">
                    Iniciar Sesión
                </h1>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-7 px-6 py-4 text-xl border border-gray-400 rounded-2xl bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-10 px-6 py-4 text-xl border border-gray-400 rounded-2xl bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
                />

                <button
                    onClick={iniciarSesion}
                    className="w-full bg-gray-700 text-white py-4 text-2xl rounded-2xl shadow-lg hover:bg-gray-600 transition-all active:scale-95 hover:shadow-xl"
                >
                    Iniciar Sesión ✨
                </button>

                <button
                    onClick={iniciarConGoogle}
                    className="w-full mt-4 bg-white text-gray-700 border border-gray-500 py-4 text-xl rounded-2xl hover:bg-gray-200 transition-all shadow-md active:scale-95"
                >
                    Ingresar con Google 💗
                </button>
            </div>

            {/* ANIMACIONES */}
            <style>
                {`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                `}
            </style>

        </div>
    );
}

export default Login;
