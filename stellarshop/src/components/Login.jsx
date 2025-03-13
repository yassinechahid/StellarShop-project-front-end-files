import React from 'react';

const Login = ({openSignUp}) => {
  return (
    <div className="flex justify-center items-center h-auto">
      <div className="bg-white p-8 rounded-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <div>
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Don't have an Account? </span>
          <button className="text-blue-500 font-medium hover:underline"
          onClick={openSignUp}
          >Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
