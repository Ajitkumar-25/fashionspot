"use client"
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SidebarCart from "@/components/cart";
import { useCart } from "@/context/cartContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, subtotal, addToCart, removeFromCart, clearCart} = useCart();
  //console everything 
  // console.log(cart, subtotal, addToCart, removeFromCart, clearCart);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="h-10"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRum97zTqag9DOlzensXq2tg_kM2Qen2nM2vQ&s"
              alt="hello"
            />
            <span className="ml-3 text-2xl">FASHION SPOT</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900 text-xl">
              Home
            </Link>
            <Link href="/tshirts" className="mr-5 hover:text-gray-900 text-xl">
              Tshirts
            </Link>
            <Link href="/hoodies" className="mr-5 hover:text-gray-900 text-xl">
              Hoodies
            </Link>
            <Link href="/stickers" className="mr-5 hover:text-gray-900 text-xl">
              Stickers
            </Link>
            <Link href="/mugs" className="mr-5 hover:text-gray-900 text-xl">
              Mugs
            </Link>
          </nav>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            onClick={toggleCart}
          >
            <AiOutlineShoppingCart className="text-3xl" />
          </button>
        </div>
      </header>
      <SidebarCart open={cartOpen} onClose={toggleCart} />
    </div>
  );
};

export default Navbar;
