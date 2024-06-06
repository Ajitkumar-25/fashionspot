"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductCardGrid = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    fetch("/api/fetchallproducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleDeleteProduct = () => {
    fetch("/api/deleteproduct", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: productToDelete }),
    })
      .then((res) => {
        if (res.ok) {
          setProducts(products.filter((product) => product._id !== productToDelete));
          toast.success("Product deleted successfully");
        } else {
          throw new Error("Failed to delete product");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
        toast.error("Error deleting product");
      })
      .finally(() => {
        setIsConfirmModalOpen(false);
      });
  };

  const handleUpdateProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = () => {
    fetch("/api/updateproduct", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === data._id ? data : product
          )
        );
        setIsModalOpen(false);
        toast.success("Product updated successfully");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        toast.error("Error updating product");
      });
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer position="bottom-right" />
      <div className="my-1">
        <h1 className="text-center my-2 text-4xl font-bold">All Products</h1>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white m-2 shadow-2xl rounded-lg overflow-hidden"
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
                <button
                  onClick={() => handleUpdateProduct(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mr-4"
                >
                  <FaEdit className="mr-2" /> Update
                </button>
                <button
                  onClick={() => {
                    setProductToDelete(product._id);
                    setIsConfirmModalOpen(true);
                  }}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-3xl">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <div>
              <label className="block mb-2">Title:</label>
              <input
                type="text"
                value={selectedProduct.title}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    title: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Description:</label>
              <textarea
                value={selectedProduct.description}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    description: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Price:</label>
              <input
                type="number"
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({ ...selectedProduct, price: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Available Quantity:</label>
              <input
                type="number"
                value={selectedProduct.availableQty}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    availableQty: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Sizes:</label>
              <input
                type="text"
                value={selectedProduct.size.join(", ")}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    size: e.target.value.split(",").map((s) => s.trim()),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Colors:</label>
              <input
                type="text"
                value={selectedProduct.color.join(", ")}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    color: e.target.value.split(",").map((c) => c.trim()),
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProduct}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-w-sm">
            <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteProduct}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardGrid;
