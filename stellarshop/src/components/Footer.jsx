import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({openLogin}) => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-semibold">StellarShop</h3>
            <p className="mt-3 text-gray-300">
              Your one-stop shop for all your needs. Shop with us and experience
              the best online shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-blue-400 hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contactpage" className="text-gray-300 hover:text-blue-400 hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/aboutpage" className="text-gray-300 hover:text-blue-400 hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Subscription */}
          <div>
            <h4 className="text-lg font-semibold">Follow us</h4>
            <div className="flex space-x-4 mt-3">
              <a href="#" className="text-gray-300 hover:text-blue-500 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-500 text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-700 text-2xl">
                <FaLinkedin />
              </a>
            </div>

            <form onSubmit={(e)=>e.preventDefault()} className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-l focus:outline-none focus:ring focus:ring-gray-500"
              />
              
              <button onClick={openLogin} className="px-4 py-2 bg-red-600 text-white rounded-r hover:bg-red-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} StellarShop. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
      <Link to="/privacypolicy" className="text-gray-400 hover:text-white text-sm">
        Privacy Policy
      </Link>

      <Link to="/termsandconditions" className="text-gray-400 hover:text-white text-sm">
            Terms & Conditions          
      </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
