"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const [email, setEmail] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("userInfo");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!email) return;

      try {
        const res = await fetch("/api/getorders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json();
        setorders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [email]);

  const handleOrderClick = (orderId) => {
    router.push(`/order/${orderId}`);
  }



  // console.log(orders);
  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-2xl rounded-lg">
      <h1 className="text-center font-bold text-4xl text-gray-800 mb-6">
        My Orders
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-indigo-600 text-white">
            <tr className="">
              <th className="w-1/6 py-3 px-4 border-b border-gray-400">
                Order ID
              </th>
              <th className="w-1/6 py-3 px-4 border-b border-gray-400">
                Customer Email
              </th>
              <th className="w-1/6 py-3 px-4 border-b border-gray-400">
                Order Date
              </th>
              <th className="w-1/6 py-3 px-4 border-b border-gray-400">
                Total Amount
              </th>
              <th className="w-1/6 py-3 px-4 border-b border-gray-400">
                Status
              </th>
              <th className="w-2/6 py-3 px-4 border-b border-gray-400">
                Products
              </th>
            </tr>
          </thead>
          <tbody className=" bg-indigo-200">
            {orders.map((order) => (
              <tr
                key={order._id}
                className="hover:bg-indigo-400 transition duration-200 text-center"
              >
                <td
                  className="py-4 px-6 border-b border-gray-300 text-gray-800 cursor-pointer hover:underline "
                  onClick={() => handleOrderClick(order.orderId)}
                >
                  {order.orderId}
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-gray-800">
                  {order.email}
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-gray-800">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-gray-800">
                  ₹{order.amount.toFixed(2)}
                </td>
                <td className="py-4 px-6 border-b border-gray-300 text-gray-800">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-md
                  ${
                    order.status === "order placed"
                      ? "bg-green-200 text-green-800"
                      : order.status === "Pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : order.status === "Cancelled"
                      ? "bg-red-200 text-red-800"
                      : "bg-blue-200 text-blue-800"
                  }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="py-4 px-6 border-b border-gray-300 text-gray-800 text-start">
                  <ul className="list-disc list-inside">
                    {order.products.map((product, index) => (
                      <li key={index}>
                        {product.name} (x{product.quantity})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
