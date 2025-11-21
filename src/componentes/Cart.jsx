import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Cart({ onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(null); // 👉 usuario actual
  const [loginAlert, setLoginAlert] = useState(false); // 👉 alerta si no está logueado

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // 👉 guarda si está logueado o no
    });
    return () => unsubscribe();
  }, []);

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("S/.", "").trim()) * item.qty,
    0
  );

  const handleCompra = () => {
    if (!user) {
      setLoginAlert(true); // 👉 mostrar aviso
      setTimeout(() => setLoginAlert(false), 2500);
      return;
    }

    clearCart();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Fondo oscuro difuminado */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Ventana flotante */}
      <div className="relative w-96 bg-white rounded-3xl shadow-2xl p-6 border border-pink-200 animate-pop z-50">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-500 hover:text-pink-700 transition"
        >
          <X size={26} />
        </button>

        {/* Encabezado */}
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          Tu Carrito 💗
        </h2>

        {/* Lista */}
        <div className="max-h-72 overflow-y-auto mb-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-pink-500 text-lg">
              Tu carrito está vacío 💕
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.title}
                className="flex justify-between items-center p-3 mb-2 bg-pink-50 rounded-xl border border-pink-200"
              >
                <div>
                  <h4 className="text-pink-600 font-semibold text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-pink-500">
                    {item.qty} × {item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.title)}
                  className="bg-pink-400 text-white px-3 py-1 rounded-full text-xs hover:bg-pink-500 transition"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total + Botón */}
        {cartItems.length > 0 && (
          <>
            <p className="text-lg font-bold text-pink-600 text-center mb-4">
              Total: S/. {total.toFixed(2)}
            </p>

            {/* Botón Comprar */}
            <button
              onClick={handleCompra}
              className={`w-full py-3 rounded-full text-lg font-semibold transition transform hover:scale-105
                ${
                  user
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              {user ? "Comprar Ahora 💖" : "Inicia sesión para comprar 🔒"}
            </button>
          </>
        )}

        {/* Mensaje compra hecha */}
        {success && (
          <div className="mt-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-xl text-center animate-pop">
            ¡Compra realizada con éxito! 🎀✨
          </div>
        )}

        {/* Aviso: falta iniciar sesión */}
        {loginAlert && (
          <div className="mt-4 p-3 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-xl text-center animate-pop">
            Debes iniciar sesión para comprar 💛🔐
          </div>
        )}
      </div>

      {/* Animación */}
      <style>{`
        .animate-pop {
          animation: pop 0.25s ease-out;
        }
        @keyframes pop {
          0% { transform: scale(0.7); opacity: 0 }
          100% { transform: scale(1); opacity: 1 }
        }
      `}</style>
    </div>
  );
}

export default Cart;
