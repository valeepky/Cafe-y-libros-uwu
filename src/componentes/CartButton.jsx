import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN DEL CARRITO */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-5 rounded-full shadow-xl flex items-center justify-center transition transform hover:scale-110 z-50"
      >
        <ShoppingCart size={28} />

        {/* NUMERITO DEL CARRITO */}
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-gray-300 text-gray-900 text-sm font-bold rounded-full px-2 py-0.5 shadow-md animate-bounce">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* PANEL DEL CARRITO */}
      {open && <Cart onClose={() => setOpen(false)} />}
    </>
  );
}

export default CartButton;

