import React from "react";

const Orders = () => {
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
                Customer Name
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                #12345
              </td>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">2023-06-01</td>
              <td className="px-6 py-4">$99.99</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                  Delivered
                </span>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                #12346
              </td>
              <td className="px-6 py-4">Jane Smith</td>
              <td className="px-6 py-4">2023-05-15</td>
              <td className="px-6 py-4">$79.99</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-700 dark:text-yellow-200">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                #12347
              </td>
              <td className="px-6 py-4">Bob Johnson</td>
              <td className="px-6 py-4">2023-04-30</td>
              <td className="px-6 py-4">$129.99</td>
              <td className="px-6 py-4">
                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                  Cancelled
                </span>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-700 dark:border-gray-600">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                #12348
              </td>
              <td className="px-6 py-4">Sarah Lee</td>
              <td className="px-6 py-4">2023-03-20</td>
              <td className="px-6 py-4">$59.99</td>
              <td className="px-6 py-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Shipped
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
