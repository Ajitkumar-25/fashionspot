"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Checkout = () => {
  const { subtotal } = useCart();
  const shipping = 60;
  const taxes = 0.05 * subtotal;
  const total = subtotal + shipping + taxes;

  

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
      <ToastContainer position="bottom-right" />
      <div className="grid gap-8">
        <div>
          <h1 className="text-3xl font-bold">Checkout</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-4">
              <div>
                <h2 className="text-2xl font-bold">Shipping Details</h2>
              </div>
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="address">Address</label>
                  <input id="address" placeholder="Enter your address" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="city">City</label>
                  <input id="city" placeholder="Enter your city" />
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="grid gap-2">
                    <label htmlFor="state">State</label>
                    <input id="state" placeholder="Enter your state" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="zip">Zip</label>
                    <input id="zip" placeholder="Enter your zip code" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-4">
              <div>
                <h2 className="text-2xl font-bold">Order Summary</h2>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p> ₹{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p> ₹{shipping}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Taxes</p>
                  <p>₹{taxes}</p>
                </div>

                <div className="flex items-center justify-between font-bold">
                  <p>Total</p>
                  <p>₹{total}</p>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <input
                    className="flex-1"
                    placeholder="Promo code"
                    type="text"
                  />
                  <button className="w-full flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-1 text-base font-medium text-white shadow-sm hover:bg-red-700">
                    Apply
                  </button>
                </div>
                <Link href={'/payment'}>
                <button
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700"
                >
                  Place Order
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
