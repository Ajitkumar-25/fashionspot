"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductCardGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/fetchallproducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products);

  const handleDeleteProduct = (productId) => {
    console.log(productId);
    fetch("/api/deleteproduct", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    })
      .then((res) => {
        if (res.ok) {
          setProducts(products.filter((product) => product._id !== productId));
        } else {
          throw new Error("Failed to delete product");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="my-1">
        <h1 className="text-center my-2 text-4xl font-bold">All Products</h1>
      </div>
      <div className=" my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white m-2 shadow-2xl  rounded-lg overflow-hidden "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 line-clamp-2">
                {product.description}
              </p>
              <div className="mt-2">
                <span className="text-primary-500">₹{product.price}</span>
                <span className="text-gray-500">
                  {" "}
                  • {product.availableQty} in stock
                </span>
              </div>
              <div className="mt-2">
                <span className="text-gray-500">
                  Sizes: {product.size.join(" ")}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-gray-500">
                  Colors: {product.color.join(" ")}
                </span>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mr-4">
                  <FaEdit className="mr-2" /> Update
                </button>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardGrid;
