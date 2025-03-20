import CartContext from "./CartContext";
import { useState } from "react";
import { data } from "./data.js";

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItemId) => {
    const item = data.find((item) => item.id === newItemId);
    if (!item) {
      console.error("invalid item id");
      return;
    }

    const existingItem = items.find((item) => item.id === newItemId);
    if (existingItem) {
      setItems(
        items.map((i) => {
          if (i.id === newItemId) {
            return { ...i, quantity: i.quantity + 1 };
          }
          return i;
        })
      );
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const incrementQuanity = (itemId) => {
    setItems(
      items.map((i) => {
        if (i.id === itemId) {
          return { ...i, quantity: i.quantity + 1 };
        }
        return i;
      })
    );
  };

  const decrementQuanity = (itemId) => {
    setItems(
      items
        .map((i) => {
          if (i.id === itemId) {
            return { ...i, quantity: i.quantity - 1 };
          }
          return i;
        })
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, incrementQuanity, decrementQuanity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
