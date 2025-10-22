import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition transform hover:scale-105 z-50"
      >
        <ShoppingCart size={26} />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-pink-600 text-xs font-bold rounded-full px-2">
            {cartItems.length}
          </span>
        )}
      </button>

      {open && <Cart onClose={() => setOpen(false)} />}
    </>
  );
}

export default CartButton;
