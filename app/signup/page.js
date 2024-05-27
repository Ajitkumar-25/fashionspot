import React from "react";
import { IoIosRocket } from "react-icons/io";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="mx-auto max-w-lg space-y-8">
      <div className=" mt-4 space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Sign Up
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Enter your information to create an account.
        </p>
      </div>
      <form className="space-y-6 animate-fade-in">
        <div className="space-y-3">
          <label
            className="flex items-center gap-2 text-gray-700 dark:text-gray-400"
            htmlFor="name"
          >
            <UserIcon className="h-5 w-5" />
            Name
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#6366F1] focus:ring-[#6366F1] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-[#6366F1]"
            id="name"
            placeholder="Enter your name"
            required
            type="text"
          />
        </div>
        <div className="space-y-3">
          <label
            className="flex items-center gap-2 text-gray-700 dark:text-gray-400"
            htmlFor="email"
          >
            <MailIcon className="h-5 w-5" />
            Email
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#6366F1] focus:ring-[#6366F1] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-[#6366F1]"
            id="email"
            pattern='"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"'
            placeholder="m@example.com"
            required
            title="Please enter a valid email address"
            type="email"
          />
        </div>
        <div className="space-y-3">
          <label
            className="flex items-center gap-2 text-gray-700 dark:text-gray-400"
            htmlFor="phone"
          >
            <PhoneIcon className="h-5 w-5" />
            Phone Number
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#6366F1] focus:ring-[#6366F1] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-[#6366F1]"
            id="phone"
            pattern="[0-9]{10}"
            placeholder="Enter your phone number"
            required
            title="Please enter a valid 10-digit phone number"
            type="tel"
          />
        </div>
        <div className="space-y-3">
          <label
            className="flex items-center gap-2 text-gray-700 dark:text-gray-400"
            htmlFor="password"
          >
            <LockIcon className="h-5 w-5" />
            Password
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#6366F1] focus:ring-[#6366F1] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-[#6366F1]"
            id="password"
            minLength={8}
            placeholder="Password"
            required
            title="Password must be at least 8 characters long"
            type="password"
          />
        </div>
        <button
          className=" w-full flex items-center justify-center space-x-2 rounded-md bg-[#6366F1] py-1 font-semibold text-white hover:bg-[#4F46E5] focus:ring-2 focus:ring-[#6366F1] animate-bounce"
          type="submit"
        >
          <IoIosRocket className="text-3xl" />
          <span>Sign Up</span>
        </button>
      </form>
      <p className="text-center"> Already have an Account <Link href={'/login'} className="text-blue-500 underline text-lg" >Login</Link></p>
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

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
