import { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
    setError("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions? We’d love to hear from you! Get in touch with us through any of the methods below.
      </p>

      {/* Contact Info Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Details */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
          <p className="text-gray-700 mb-4">Feel free to reach us through these channels:</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <p className="text-gray-800">support@stellarshop.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <p className="text-gray-800">+1 (234) 567-890</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <p className="text-gray-800">123 E-commerce St, Online City, 45678</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Follow us on</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-4">Find Us Here</h2>
        <iframe
          className="w-full h-72 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed/v1/place?q=Eiffel+Tower,Paris&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
