import React from 'react';

const Register = ({openLogin}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-gray-600 font-medium">Confirm Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600">I agree to the <a href="#" className="text-blue-500 hover:underline">terms and conditions</a></span>
          </div>
          <div>
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <button className="text-blue-500 font-medium hover:underline"
          onClick={openLogin}
          >Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
