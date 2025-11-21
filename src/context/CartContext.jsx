import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addedMessage, setAddedMessage] = useState(false); // mensaje al agregar

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((i) => i.title === item.title);

      if (exist) {
        return prevItems.map((i) =>
          i.title === item.title ? { ...i, qty: i.qty + 1 } : i
        );
      }

      return [...prevItems, { ...item, qty: 1 }];
    });

    // Mostrar mensaje por 2 segundos
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const removeFromCart = (title) => {
    setCartItems(cartItems.filter((item) => item.title !== title));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        addedMessage,
      }}
    >
      {children}

      {/* 🔔 Notificación kawaii al agregar al carrito */}
      {addedMessage && (
        <div className="fixed bottom-24 right-6 bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-2xl text-lg animate-bounce z-50">
          ¡Añadido al carrito! 💖
        </div>
      )}
    </CartContext.Provider>
  );
};
