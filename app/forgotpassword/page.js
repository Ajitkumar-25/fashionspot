import React from 'react'
import Link from 'next/link'

export default function password() {
    return (
    <div className="flex items-center justify-center h-[25rem]">
    <div className="max-w-md w-full space-y-4 p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold ">Forgot Password</h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Enter your email address and well send you a link to reset your password.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
            Email address
          </label>
          <div className="mt-1 relative">
            <input
              autoComplete="email"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <MailIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        <div>
      <p className=" m-4 text-center"><Link href={'/login'} className="text-blue-500 underline text-lg" >continue to login </Link></p>

          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 animate-bounce"
            type="submit"
          >
            <LockIcon className="h-5 w-5 mr-2" />
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
)
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
)
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
)
}