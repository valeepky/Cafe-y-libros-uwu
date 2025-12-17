import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";

function RegistrarCuenta() {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("🎉 Cuenta creada correctamente");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("❌ El correo ya está registrado");
      } else if (error.code === "auth/weak-password") {
        alert("❌ La contraseña debe tener al menos 6 caracteres");
      } else {
        alert("❌ Error al crear la cuenta");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e6e9ee] to-[#dfe3e8]">
      <form
        onSubmit={registrar}
        className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Crear Cuenta
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
          placeholder="Contraseña (mín. 6 caracteres)"
          className="w-full mb-6 px-4 py-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default RegistrarCuenta;
