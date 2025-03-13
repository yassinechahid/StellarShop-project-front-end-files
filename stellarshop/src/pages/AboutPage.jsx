import { Users, ShoppingBag, ShieldCheck, Smile, Truck } from "lucide-react";
import iconman from '../assets/images/iconman.png'
export default function AboutPage({openLogin}) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Welcome to **StellarShop**, your trusted destination for quality products and exceptional service.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-gray-100 rounded-lg px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Story</h2>
        <p className="text-gray-700 mt-6 leading-relaxed text-center max-w-3xl mx-auto">
          StellarShop started with a vision to provide top-notch products to customers worldwide.  
          Founded in 2025, our mission has always been to ensure a seamless shopping experience.  
          We believe in **quality, customer satisfaction, and innovation**.  
          Every product we sell is carefully selected to match our high standards.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md p-6 text-center rounded-lg">
            <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Quality Guaranteed</h3>
            <p className="text-gray-600 mt-2">Every product goes through strict quality checks before reaching you.</p>
          </div>
          <div className="bg-white shadow-md p-6 text-center rounded-lg">
            <Truck className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Fast & Free Shipping</h3>
            <p className="text-gray-600 mt-2">Enjoy quick and free delivery on all your orders, no hidden fees.</p>
          </div>
          <div className="bg-white shadow-md p-6 text-center rounded-lg">
            <Smile className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Customer First</h3>
            <p className="text-gray-600 mt-2">Our priority is **your happiness**—we offer hassle-free returns.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 px-6">
          <div className="text-center">
            <img src={iconman} alt="CEO" className="rounded-full mx-auto w-40 h-40 object-cover shadow-md" />
            <h3 className="text-xl font-semibold mt-4">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <img src={iconman} alt="Manager" className="rounded-full mx-auto w-40 h-40 object-cover shadow-md" />
            <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
            <p className="text-gray-600">Operations Manager</p>
          </div>
          <div className="text-center">
            <img src={iconman} alt="Support Lead" className="rounded-full mx-auto w-40 h-40 object-cover shadow-md" />
            <h3 className="text-xl font-semibold mt-4">Michael Brown</h3>
            <p className="text-gray-600">Customer Support Lead</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-700 italic">"Amazing quality! The products are just as described, and the customer service is outstanding!"</p>
            <h3 className="text-xl font-semibold mt-4">- Emily Johnson</h3>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <p className="text-gray-700 italic">"Super fast shipping! I received my order in just two days. Highly recommended!"</p>
            <h3 className="text-xl font-semibold mt-4">- Mark Wilson</h3>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white text-center rounded-lg">
        <h2 className="text-3xl font-bold">Join the StellarShop Family!</h2>
        <p className="mt-4 text-lg">Sign up for our newsletter and be the first to hear about new products and exclusive deals.</p>
     
        <button 
  className="mt-6 bg-white text-blue-600 px-6 py-3 font-semibold rounded-md hover:bg-gray-200 transition"
  onClick={openLogin} // This will open the login modal
>
  Subscribe Now
</button>

      </section>
    </div>
  );
}
