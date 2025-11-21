
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
        <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-pink-200 to-pink-100 overflow-hidden">

            {/* 💗 CORAZÓN ANIMADO FONDO */}
            <div className="absolute top-10 right-10 text-pink-300 opacity-30 text-8xl animate-bounce-slow">
                💗
            </div>

            <div className="animate-fade-in-up backdrop-blur-md bg-white/70 p-14 rounded-3xl shadow-2xl w-[460px] border border-pink-300">

                <h1 className="text-5xl font-extrabold text-center text-pink-700 mb-12 drop-shadow-lg tracking-wide">
                    Registrar Cuenta
                </h1>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-7 px-6 py-4 text-xl border border-pink-300 rounded-2xl bg-pink-50 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-10 px-6 py-4 text-xl border border-pink-300 rounded-2xl bg-pink-50 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
                />

                <button
                    onClick={registrar}
                    className="w-full bg-pink-500 text-white py-4 text-2xl rounded-2xl shadow-lg hover:bg-pink-400 transition-all active:scale-95 hover:shadow-pink-300 hover:shadow-xl"
                >
                    Registrar ✨
                </button>
            </div>

            {/* 🌸 Animaciones personalizadas */}
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

export default RegistrarCuenta;
