"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/getproducts/${category}`);
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item) => {
              return (
                <Link
                  key={item._id}
                  href={`/product/${item.slug}`}
                  legacyBehavior
                >
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer shadow-2xl ">
                    <div className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.image}
                        style={{ width: "300px", height: "300px", objectFit: "cover" }}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">${item.price}</p>
                      <p className="mt-1">S M L XL XXL</p>
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
