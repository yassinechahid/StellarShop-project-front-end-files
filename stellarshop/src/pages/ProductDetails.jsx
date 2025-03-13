import React, { useEffect, useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, updateQuantity } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const cartProducts = useSelector((state) => state.cart.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find((product) => product.id === parseInt(id));
      setProduct(newProduct);
    }
  }, [id, products]);

  useEffect(() => {
    if (product && cartProducts.length > 0) {
      const cartProduct = cartProducts.find((item) => item.id === product.id);
      if (cartProduct) {
        setQuantity(cartProduct.quantity);
      }
    }
  }, [cartProducts, product]);

  if (!product) {
    return <div className="text-center text-lg font-semibold py-10">Loading...</div>;
  }

  const handleAddToCart = () => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      dispatch(updateQuantity({ id: product.id, quantity }));
    } else {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
        })
      );
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
        
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <div className="w-full max-w-xs h-auto rounded-lg overflow-hidden flex items-center justify-center">
            <img src={product.image} alt={product.name} className="w-full h-auto object-contain" />
          </div>

          <div className="mt-4 bg-gray-100 p-4 rounded-lg w-full text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-700">Product Description</h3>
            <p className="text-gray-600 mt-2">{product.description || "Product description will be displayed here."}</p>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start justify-center h-full gap-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center md:text-left">{product.name}</h2>
          <p className="text-xl text-blue-500 font-bold">${product.price}</p>

          <div className="flex items-center space-x-4">
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-14 md:w-16 p-2 border rounded-lg text-center focus:ring-2 focus:ring-blue-400"
            />

            <button 
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>

          <div className="flex items-center space-x-2 text-blue-500 cursor-pointer">
            <FaCarSide className="text-2xl" />
            <p className="font-medium hover:underline">Ask a Question</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
