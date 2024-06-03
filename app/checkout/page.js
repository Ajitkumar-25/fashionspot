"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");

  const handlechange = (e) => {
    // e.preventDefault()
    const { name, value } = e.target;
    if (name === "name") {
      setname(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "phone") {
      setphone(value);
    } else if (name === "address") {
      setaddress(value);
    }
  };

  const handlechangepincode = (e) => {
    const { value } = e.target;
    setpincode(value);
    if (value.length === 6) {
      fetchcitystate(value);
    }
  };

  const fetchcitystate = async (pincode) => {
    const response = await fetch("/api/fetchcitystate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pincode }),
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        setcity(data.location.city);
        setstate(data.location.state);
      } else {
        toast.error(data.message);
      }
    } else {
      toast.error("Failed to fetch city and state");
    }
  };

  const placeorder = async () => {
    // console.log(cart);
    const cartItems = Object.values(cart);
    const products = cartItems.map((item) => {
      return {
        name: item.name,
        quantity: item.qty,
      };
    });
    const order = {
      email,
      products,
      address,
      amount: total,
      status: "order placed",
      city,
      state,
      pincode,
    };
    const response = await fetch("/api/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    if (response.ok) {
      toast.success("Order placed successfully");
    } else {
      toast.error("Failed to place order");
    }

    console.log(name, email, phone, address, city, pincode, state);
  };

  const { subtotal, cart } = useCart();
  const shipping = 60;
  const taxes = 0.05 * subtotal;
  const total = subtotal + shipping + taxes;

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-2">
      <ToastContainer position="bottom-right" />
      <div className="grid gap-2">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold underline  ">CHECKOUT</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-1">
              <div>
                <h2 className="text-2xl font-bold">Shipping Details</h2>
              </div>
              <div className="grid gap-2">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={handlechange}
                    className="border-solid border-2 border-gray-500 p-1 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={email}
                    onChange={handlechange}
                    className="border-solid border-2 border-gray-500 p-1 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    placeholder="Enter your Mobile No"
                    name="phone"
                    value={phone}
                    onChange={handlechange}
                    className="border-solid border-2 border-gray-500 p-1  rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    placeholder="Enter your address"
                    name="address"
                    value={address}
                    onChange={handlechange}
                    className="border-solid border-2 border-gray-500 p-1 rounded-md"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="pincode">Pin Code</label>
                  <input
                    id="pincode"
                    placeholder="Enter your Pin code"
                    name="pincode"
                    value={pincode}
                    onChange={handlechangepincode}
                    className="border-solid border-2 border-gray-500 p-1 rounded-md"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    placeholder="Enter your state"
                    name="state"
                    className="border-solid border-2 border-gray-500 p-1 rounded-md"
                    value={state}
                    onChange={handlechange}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    placeholder="Enter your city"
                    name="city"
                    className="border-solid border-2 border-gray-500 p-1 rounded-md"
                    value={city}
                    onChange={handlechange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid gap-4">
              <div>
                <h2 className="text-2xl font-bold">Order Summary</h2>
              </div>
              <div className="grid gap-2 text-xl py-6">
                <div className="flex items-center justify-between mt-8">
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
                    className="flex-1 border-solid border-2 border-gray-500 p-2 rounded-xl"
                    placeholder="Promo code"
                    type="text"
                  />
                  <button className="w-full flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700">
                    Apply
                  </button>
                </div>
                {/* <Link href={"/payment"}> */}
                <button
                  onClick={placeorder}
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
                >
                  Place Order
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
