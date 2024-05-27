import React from "react";
import { IoIosRocket } from "react-icons/io";
import Link from "next/link";



export default function Login() {
  return (
    <div className="mx-auto max-w-md space-y-6 h-[25rem] mt-16">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login To Continue </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email and password to Login to Your Account.
        </p>
      </div>
      <form className="space-y-4 animate-fade-in">
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
          />
        </div>
      <p className="text-center"><Link href={'/forgotpassword'} className="text-blue-500 underline text-lg" >forgot password</Link></p>

        <button
          className=" w-full flex items-center justify-center space-x-2 rounded-md bg-[#6366F1] py-1 font-semibold text-white hover:bg-[#4F46E5] focus:ring-2 focus:ring-[#6366F1] animate-bounce"
          type="submit"
        >
          <IoIosRocket className="text-3xl" />
          <span>Sign Up</span>
        </button>
      </form>
      <p className="text-center"> Do Not have an Account <Link href={'/signup'} className="text-blue-500 underline text-lg" >Signup</Link></p>

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
