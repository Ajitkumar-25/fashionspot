"use client";
import React from "react";
import Link from "next/link";
import { useState,useEffect} from "react";

const MyProfile = () => {
  const [storedEmail, setStoredEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("userInfo");
    setStoredEmail(email);
  }, []);
 
  return (
    <div>
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg">
          <div className="mx-4">
          <div className="flex justify-center rounded-xl mb-2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3FZfuO_zmJR1w75egK1rRZAqgNACQKWPfA&s" 
                alt="Profile" 
                className="rounded-full border-4 border-gray-300 dark:border-gray-700 h-36 w-36"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Profile</h2>
            
            <form className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-200"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-200"
                  value={storedEmail}
                  readOnly
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-200"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="mobile" className="text-sm font-medium">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-200"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="my-2 py-2 px-4 mx-6 flex  justify-center  rounded-md bg-green-500  font-semibold text-white hover:bg-green-800  animate-bounce"
                >
                  Save Changes
                </button>
                <Link href={"/orders"}>
                  <button
                    type="button"
                    className=" my-2 py-2 px-4 mx-6  flex  justify-center rounded-md bg-[#6366F1] font-semibold text-white hover:bg-[#4F46E5]   animate-bounce"
                  >
                    My Orders
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
