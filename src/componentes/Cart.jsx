import React from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

function Cart({ onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("S/.", "").trim()) * item.qty,
    0
  );

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-pink-200 z-50">
      <div className="flex justify-between items-center bg-pink-400 text-white p-4 rounded-t-2xl">
        <h3 className="text-lg font-semibold">Tu Carrito</h3>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="max-h-80 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-pink-600">Tu carrito está vacío 💕</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.title}
              className="flex justify-between items-center mb-3 border-b border-pink-200 pb-2"
            >
              <div>
                <h4 className="text-sm font-semibold text-pink-600">
                  {item.title}
                </h4>
                <p className="text-xs text-pink-500">
                  {item.qty} x {item.price}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="text-xs text-white bg-pink-400 px-2 py-1 rounded-full hover:bg-pink-500 transition"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t border-pink-200">
          <p className="font-bold text-pink-600 mb-3">
            Total: S/. {total.toFixed(2)}
          </p>
          <button
            onClick={clearCart}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full transition"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
