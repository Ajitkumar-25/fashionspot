"use client";
import React, { useState } from "react";
import { IoIosRocket } from "react-icons/io";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast.success("Logged in Successfully");
  const notify2 = () => toast.error("Failed to login");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error:", data.error);
        notify2();
        return;
      }

      // Handle success (e.g., redirect to dashboard or show success message)
      console.log("User logged in:", data);
      notify();
    } catch (error) {
      console.error("Failed to login:", error);
      notify2();
    }
  };

  return (
    <div className="mx-auto max-w-md space-y-6 h-[25rem] mt-16">
      <ToastContainer position="bottom-right" />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login To Continue </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email and password to Login to Your Account.
        </p>
      </div>
      <form className="space-y-4 animate-fade-in" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="flex items-center gap-2" htmlFor="email">
            <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            Email
          </label>
          <input
            className="pl-10"
            id="email"
            pattern='"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"'
            placeholder="m@example.com"
            required
            title="Please enter a valid email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2" htmlFor="password">
            <LockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            Password
          </label>
          <input
            className="pl-10"
            id="password"
            minLength={8}
            placeholder="Password"
            required
            title="Password must be at least 8 characters long"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-center">
          <Link
            href={"/forgotpassword"}
            className="text-blue-500 underline text-lg"
          >
            forgot password
          </Link>
        </p>
        <button
          className=" w-full flex items-center justify-center space-x-2 rounded-md bg-[#6366F1] py-1 font-semibold text-white hover:bg-[#4F46E5] focus:ring-2 focus:ring-[#6366F1] animate-bounce"
          type="submit"
        >
          <IoIosRocket className="text-3xl" />
          <span>Login</span>
        </button>
      </form>
      <p className="text-center">
        Do Not have an Account{" "}
        <Link href={"/signup"} className="text-blue-500 underline text-lg">
          Signup
        </Link>
      </p>
    </div>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
