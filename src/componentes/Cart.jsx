import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Cart({ onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState(null);
  const [loginAlert, setLoginAlert] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const total = cartItems.reduce((sum, item) => {
    const rawPrice = item?.price ?? "0";
    const cleanPrice = parseFloat(String(rawPrice).replace("S/.", "").trim());
    const qty = item?.qty ?? 1;
    return sum + cleanPrice * qty;
  }, 0);

  const handleCompra = () => {
    if (!user) {
      setLoginAlert(true);
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
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Caja */}
      <div className="relative w-96 bg-gray-900 text-gray-200 rounded-3xl shadow-2xl p-6 border border-gray-700 animate-pop z-50">
        
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition"
        >
          <X size={26} />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Tu Carrito
        </h2>

        {/* Lista */}
        <div className="max-h-72 overflow-y-auto mb-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400 text-lg">
              Tu carrito está vacío
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.title}
                className="flex justify-between items-center p-3 mb-2 bg-gray-800 rounded-xl border border-gray-700"
              >
                <div>
                  <h4 className="font-semibold text-gray-100 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.qty} × {item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.title)}
                  className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs hover:bg-gray-600 transition"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Total */}
        {cartItems.length > 0 && (
          <>
            <p className="text-lg font-bold text-center mb-4">
              Total: S/. {total.toFixed(2)}
            </p>

            {/* Comprar */}
            <button
              onClick={handleCompra}
              className={`w-full py-3 rounded-full text-lg font-semibold transition transform hover:scale-105
                ${
                  user
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-500 text-gray-300 cursor-not-allowed"
                }`}
            >
              {user ? "Comprar Ahora" : "Inicia sesión para comprar"}
            </button>
          </>
        )}

        {/* Compra correcta */}
        {success && (
          <div className="mt-4 p-3 bg-green-900/40 border border-green-700 text-green-300 rounded-xl text-center animate-pop">
            ¡Compra realizada con éxito!
          </div>
        )}

        {/* Aviso falta login */}
        {loginAlert && (
          <div className="mt-4 p-3 bg-yellow-900/40 border border-yellow-700 text-yellow-300 rounded-xl text-center animate-pop">
            Debes iniciar sesión para comprar
          </div>
        )}
      </div>

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

