import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg w-96">
        <h2 className="mb-6 text-2xl font-semibold">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Log In
          </button>
        </form>
        <div className="mt-6">
          <p className="text-gray-600">Or log in with</p>
          <button className="w-full px-4 py-2 mt-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
