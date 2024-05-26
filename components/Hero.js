import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[520px] bg-[url('https://t4.ftcdn.net/jpg/07/64/55/75/360_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        <div>
          <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
            Discover Your New Home
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
