"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      calculateSubtotal(savedCart);
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    calculateSubtotal(myCart);
  };

  const calculateSubtotal = (myCart) => {
    let sub = 0;
    for (const item in myCart) {
      sub += myCart[item].qty * myCart[item].price;
    }
    setSubtotal(sub);
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    if (itemCode in newCart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  return (
    <CartContext.Provider
      value={{ cart, subtotal, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
