import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container my-6 mx-auto h-[520px] bg-[url('https://t4.ftcdn.net/jpg/07/64/55/75/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm mb-4">
          Discover All the Products
        </h1>
        <Link href={'/tshirts'}>
        <button className="mt-4 px-6 py-2 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300 ease-in-out">
          Explore
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
