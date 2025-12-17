import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase";

function Login() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState(undefined);

  // Detectar si ya está logueado
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user ?? null);
    });
    return () => unsub();
  }, []);

  // 🔒 Si ya inició sesión → NO mostrar login
  if (usuario) {
    return <Navigate to="/" replace />;
  }

  const iniciarSesion = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Sesión iniciada correctamente");
      navigate("/");
    } catch (error) {
      alert("❌ Correo o contraseña incorrectos");
    }
  };

  const iniciarConGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("✅ Sesión iniciada con Google");
      navigate("/");
    } catch (error) {
      alert("❌ Error al iniciar con Google");
    }
  };

  const entrarComoInvitado = () => {
    alert("👤 Navegando como invitado");
    navigate("/libros");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e6e9ee] to-[#dfe3e8]">
      <form
        onSubmit={iniciarSesion}
        className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Iniciar Sesión
        </h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full mb-4 px-4 py-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-6 px-4 py-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-3 rounded-lg mb-4 hover:bg-gray-800 transition"
        >
          Iniciar sesión
        </button>

        <button
          type="button"
          onClick={iniciarConGoogle}
          className="w-full border py-3 rounded-lg mb-4 hover:bg-gray-100 transition"
        >
          Continuar con Google
        </button>

        <button
          type="button"
          onClick={entrarComoInvitado}
          className="w-full border py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Continuar como invitado
        </button>
      </form>
    </div>
  );
}

export default Login;
