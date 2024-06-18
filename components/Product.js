"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart, FaFilter } from "react-icons/fa";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/getproducts/${category}`);
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, [category]);

  const handleFilter = () => {
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;

    const filtered = products.filter(
      (product) =>
        product.price >= min &&
        product.price <= max &&
        (selectedSizes.length === 0 ||
          selectedSizes.some((size) => product.size.includes(size)))
    );

    setFilteredProducts(filtered);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const uniqueSizes = Array.from(
    new Set(products.flatMap((product) => product.size))
  );

  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold title-font text-gray-500 tracking-widest uppercase">
        {category}
      </h1>

      {/* Filter Section */}
      <div className="flex justify-center mb-2">
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
      </div>

      {/* Size Filter Section */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-4">
          {uniqueSizes.map((size) => (
            <label key={size} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
                className="form-checkbox"
              />
              <span>{size}</span>
            </label>
          ))}
          <button
            onClick={handleFilter}
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <FaFilter className="mr-2 animate-pulse" /> Apply Filter
          </button>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredProducts.map((item) => {
              return (
                <Link
                  key={item._id}
                  href={`/product/${item.slug}`}
                  legacyBehavior
                >
                  <div className="lg:w-1/4 md:w-1/2 p-2 w-full cursor-pointer shadow-4xl  transition-transform transform hover:scale-105">
                    <div className="block relative rounded-lg overflow-hidden border border-gray-200">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.image}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest uppercase mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-green-500 font-semibold">
                        ₹{item.price}
                      </p>
                      <div className="flex justify-center mt-2">
                        {item.size.map((size) => (
                          <div
                            key={size}
                            className="border border-gray-300 px-2 py-1 m-1 rounded-md text-sm text-gray-700"
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-center">
                        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded flex items-center">
                          <FaShoppingCart className="mr-2 animate-pulse" /> Add
                          to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
