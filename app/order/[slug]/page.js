"use client";
import React, { useState, useEffect } from "react";

const Order = ({ params }) => {
  const orderId = params.slug;

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getorder", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderId }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch order");
        }

        const data = await res.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchData();
  }, [orderId]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-2 mx-auto">
          <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className=" text-center text-4xl font-extrabold title-font text-gray-500 tracking-widest">
              Order Details
            </h1>
            <h1 className="text-gray-900 text-2xl title-font font-medium my-4">
              Order Id: {order.orderId}
            </h1>
            <p className="leading-relaxed mb-4">
              Your Order has been Successfully Placed
            </p>
            <div className="flex mb-4">
              <a className="flex-grow  border-gray-300 py-2 text-lg px-1">
                Item
              </a>
              <a className="flex border-gray-300 py-2 text-lg px-1">Quantity</a>
            </div>

            {order.products.map((product, index) => (
              <div key={index} className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">{product.name}</span>
                <span className="ml-auto text-gray-900">
                  {product.quantity}
                </span>
              </div>
            ))}

            <div className="flex flex-col">
              <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal: ₹{order.amount}
              </span>
              <button className="flex mt-4 w-[9rem] mx-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Track Order
              </button>
            </div>
          </div>
          {/* <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            /> */}
        </div>
      </section>
    </div>
  );
};

export default Order;
