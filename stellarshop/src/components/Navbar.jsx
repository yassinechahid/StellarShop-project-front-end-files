import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import { setSearchTerm } from '../redux/productSlice'
const Navbar = ({isModelOpen,openSignUp,openLogin, setIsModelOpen, isLogin}) => {
    const [search, setSearch]=useState()
    const dispatch=useDispatch()
    const navigate= useNavigate()

     const handleSearch=(e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
     }
    const products=useSelector(state=>state.cart.products)
  return (
    <nav className='bg=white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">stellarshop</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder='search product' className='w-full border py-2 px-4'
                    onChange={(e)=>setSearch(e.target.value)}
                    ></input>
                    <FaSearch
                    onClick={handleSearch}
                    className='absolute top-3 right-3 text-red-500  hover:text-blue-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
  <Link to="/cart" className='relative transform group'>
    <FaShoppingCart className='transition-transform transform group-hover:scale-125 hover:text-blue-500' />
    {products.length > 0 && (
      <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full justify-center items-center text-white'>
        {products.length}
      </span>
    )}
  </Link>
                <button className='hidden md:block cursor-pointer hover:text-blue-600 hover:underline'
                onClick={()=>setIsModelOpen(true)}
                >
                    login | register
                </button>
                <button className='block md:hidden cursor-pointer hover:text-blue-500'
                onClick={()=>setIsModelOpen(true)}
                >
                    <FaUser> </FaUser>
                </button>
            </div>
        </div>
        <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
            <Link to="/" className='hover:underline hover:text-blue-500'>
                Home
            </Link>
            <Link to="/shop" className='hover:underline hover:text-blue-500'>
                shop
            </Link>
            <Link to="/contactpage" className='hover:underline hover:text-blue-500'>
                contact
            </Link>
            <Link to="/aboutpage" className='hover:underline hover:text-blue-500'>
                about
            </Link>
        </div>
        <Modal setIsModelOpen={setIsModelOpen} isModelOpen={isModelOpen}>
            {isLogin? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin}/>}
        </Modal>
    </nav>
  )
}

export default Navbar