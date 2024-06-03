"use client";
import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setorders] = useState([]);
  const [email, setEmail] = useState(null);

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


  console.log(orders);
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mx-6 my-4">My Orders</h1>
      <div className="  overflow-x-auto w-full">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Total Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map(order => (
                <tr key={order._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{order.orderId}</td>
                  <td className="px-6 py-4">{order.email}</td>
                  <td className="px-6 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`bg-${order.status === 'Delivered' ? 'green' : order.status === 'Pending' ? 'yellow' : order.status === 'Cancelled' ? 'red' : 'blue'}-100 text-${order.status === 'Delivered' ? 'green' : order.status === 'Pending' ? 'yellow' : order.status === 'Cancelled' ? 'red' : 'blue'}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${order.status === 'Delivered' ? 'green' : order.status === 'Pending' ? 'yellow' : order.status === 'Cancelled' ? 'red' : 'blue'}-900 dark:text-${order.status === 'Delivered' ? 'green' : order.status === 'Pending' ? 'yellow' : order.status === 'Cancelled' ? 'red' : 'blue'}-300`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
