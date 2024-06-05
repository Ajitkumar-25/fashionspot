import React from "react";
import Link from "next/link";

const Admin = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Admin Page</h1>
      </div>
      <div className="flex justify-center space-x-4">
        <Link href="/admin/addproduct">
          <button className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-black ">
            Add Product
          </button>
        </Link>
        <Link href="/admin/listproducts">
          <button className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-black ">
            List Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
