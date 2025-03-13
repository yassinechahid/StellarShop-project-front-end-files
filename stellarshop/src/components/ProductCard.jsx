import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    
    const itemToAdd = {
      ...product,
      quantity: 1, // Ensure quantity is always 1 when first adding to the cart
    };
  
    dispatch(addToCart(itemToAdd));
    alert("Product added");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-103'>
        <img src={product.image} alt="" className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className="flex items-center mt-2 space-x-1">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <FaStar className="text-gray-300" />
          </div>

        {/* Add to Cart Button */}
        <button
  className='absolute bottom-4 right-3 flex items-center justify-center
    bg-red-600 text-white text-sm rounded-full transition-all w-32 sm:w-8 h-8
    sm:hover:w-32 sm:hover:bg-red-700 group hover:bg-blue-500 hover:text-white'
  onClick={(e) => handleAddToCart(e, product)}
>
  {/* On Small Screens: Show "Add to Cart" */}
  <span className='block sm:hidden'>Add to cart</span>

  {/* On Large Screens: Show "+" by Default */}
  <span className='hidden sm:flex sm:group-hover:hidden'>+</span>

  {/* On Large Screens: Show "Add to Cart" on Hover */}
  <span className='hidden sm:hidden sm:group-hover:flex'>Add to cart</span>
</button>

      </div>
    </Link>
  )
}

export default ProductCard
