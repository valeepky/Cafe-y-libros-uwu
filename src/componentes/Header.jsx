import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";

import NavbarVisitante from "./navbarVisitante";
import NavbarUsuario from "./navbarUsuario";
function Header() {
  const [usuario, setUsuario] = useState(undefined); // 👈 IMPORTANTE
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user ?? null);
    });

    return () => unsubscribe();
  }, [auth]);

  // ⏳ Mientras Firebase detecta sesión
  if (usuario === undefined) {
    return (
      <header className="bg-gray-800 py-4 px-6 text-white font-semibold">
        Café y Libros ☕📖
      </header>
    );
  }

  // 👇 SI hay usuario → navbar usuario
  // 👇 SI NO hay usuario → navbar visitante
  return usuario ? <NavbarUsuario /> : <NavbarVisitante />;
}

export default Header;
