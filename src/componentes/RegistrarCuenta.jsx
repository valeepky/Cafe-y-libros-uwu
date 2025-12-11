import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrarCuenta() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrar = async () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log("Usuario registrado");
            })
            .catch((error) => {
                console.log("Error al crear tu cuenta");
                console.log(error);
            });
    };

    return (
        <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-gray-300 to-gray-100 overflow-hidden">

            <div className="animate-fade-in-up backdrop-blur-md bg-white/70 p-14 rounded-3xl shadow-2xl w-[460px] border border-gray-400">

                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12 drop-shadow-lg tracking-wide">
                    Registrar Cuenta
                </h1>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-7 px-6 py-4 text-xl border border-gray-400 rounded-2xl bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-inner"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-10 px-6 py-4 text-xl border border-gray-400 rounded-2xl bg-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-inner"
                />

                <button
                    onClick={registrar}
                    className="w-full bg-gray-700 text-white py-4 text-2xl rounded-2xl shadow-lg hover:bg-gray-800 transition-all active:scale-95 hover:shadow-xl"
                >
                    Registrar
                </button>
            </div>

            {/* Animaciones personalizadas */}
            <style>
                {`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }
                `}
            </style>
        </div>
    );
}

export default RegistrarCuenta;
