import React from 'react'
import men from '../assets/images/men.jpg'
import women from '../assets/images/women.jpg'
import kids from '../assets/images/kids.jpg'
const CategorySection = () => {
    const Categories=[
        {
            title:'men',
            imageUrl:men,
        },
        {
            title:'women',
            imageUrl:women,
        },
        {
            title:'kids',
            imageUrl:kids,
        }
    ]
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {Categories.map((category, index)=>(
            <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
                <div className='absolute top-19 left-8'>
                    <p className='text-4xl text-blue-800  '>{category.title}</p>
                    <p className='text-2xl text-green-600 hover:underline'>View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CategorySection