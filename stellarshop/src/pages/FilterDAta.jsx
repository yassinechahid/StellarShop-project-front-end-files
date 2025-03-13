import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
const FilterDAta = () => {
    const filterProducts=useSelector(state=>state.product.filteredData)
  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
        {filterProducts.length>0? <div>
<h2 className='text-2xl font-bold mb-6 text'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {filterProducts.map((product)=>(
                <ProductCard product={product}  />
            ))}
        </div>

        </div>: "no products found"
        
    
    }
    
    </div>
  )
}

export default FilterDAta