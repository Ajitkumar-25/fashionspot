"use client";
import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [availableQty, setavailableQty] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = () => {
    const file = document.querySelector('input[type="file"]').files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fashionspot");
    setUploading(true);
    fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImage(data.secure_url);
        setUploading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setUploading(false);
      });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const processedSize = size.split(/\s+/).filter(Boolean);
    const processedColor = color.split(/\s+/).filter(Boolean);

    // Retrieve data from state variables
    const formData = {
      title,
      slug,
      description,
      image,
      category,
      size: processedSize,
      color: processedColor,
      price,
      availableQty,
    };

    // Do something with formData (e.g., send it to server)
    console.log(formData);

    //send data to server
    fetch("/api/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="w-full max-w-2xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="space-y-2">
              <div>
                <h1 className=" text-center my-2 text-4xl font-bold">
                  Add New Product
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill out the form below to add a new product to your ecommerce
                  store.
                </p>
              </div>
              <form className="grid gap-6 animate-fade-in">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter product title"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="slug" className="text-sm font-medium">
                      Slug
                    </label>
                    <input
                      id="slug"
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="Enter product slug"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter product description"
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="image" className="text-sm font-medium">
                      Image
                    </label>
                    <div className="flex items-center">
                      <label
                        htmlFor="image"
                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Upload Image
                      </label>
                      <input
                        id="image"
                        type="file"
                        className="sr-only"
                        onChange={handleImageUpload}
                      />
                      {uploading && <p>Uploading...</p>}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Category
                    </label>
                    <div className="relative">
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                      >
                        <option value="">Select category</option>
                        <option value="tshirt">Tshirts</option>
                        <option value="hoodies">Hoodies</option>
                        <option value="mugs">Mugs</option>
                        <option value="stickers">Stickers</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="size" className="text-sm font-medium">
                      Size
                    </label>
                    <div className="relative">
                      <input
                        id="size"
                        type="text"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        placeholder="Enter product sizes"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="color" className="text-sm font-medium">
                      Color
                    </label>
                    <div className="relative">
                      <input
                        id="color"
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="Enter product colors"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="price" className="text-sm font-medium">
                      Price
                    </label>
                    <input
                      id="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter product price"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="quantity" className="text-sm font-medium">
                      Available Quantity
                    </label>
                    <input
                      id="availableQty"
                      type="number"
                      value={availableQty}
                      onChange={(e) => setavailableQty(e.target.value)}
                      placeholder="Enter available quantity"
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-500"
                >
                  Save Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
