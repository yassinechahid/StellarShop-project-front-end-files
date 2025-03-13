import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import emptycart from '../assets/images/emptycart.jpg'
import { FaTrashAlt } from 'react-icons/fa'
import ChangeAdress from '../components/ChangeAdress'
import Modal from '../components/Modal'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import { Navigate, useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [address, setAddress] = useState("main street, 0012")
    const [isModelOpen, setIsModelOpen] = useState(false)
    const dispatch = useDispatch()
    const Navigate = useNavigate()

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            {cart.products.length > 0 ?
                <div>
                    <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
                    <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
                        <div className='md:w-2/3'>
                            <div className='border-b mb-4'>
                                <div className="overflow-x-auto">
                                    <table className='min-w-full text-xs font-bold'>
                                        <thead>
                                            <tr className='border-b'>
                                                <th className='text-left py-2 px-4'>PRODUCT IMAGE</th>
                                                <th className='text-left py-2 px-4'>PRODUCT NAME</th>
                                                <th className='text-left py-2 px-4'>PRICE</th>
                                                <th className='text-left py-2 px-4'>QUANTITY</th>
                                                <th className='text-left py-2 px-4'>SUBTOTAL</th>
                                                <th className='text-left py-2 px-4'>REMOVE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.products.map((product) => (
                                                <tr key={product.id} className='border-b'>
                                                    <td className='py-3 px-4'>
                                                        <div className='flex items-center space-x-4'>
                                                            <img src={product.image} alt={product.name} className='w-16 h-16 object-contain rounded' />
                                                        </div>
                                                    </td>
                                                    <td className='py-3 px-4'>
                                                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                                                    </td>
                                                    <td className='py-3 px-4'>${product.price}</td>
                                                    <td className='py-3 px-4'>
                                                        <div className='flex items-center justify-between g-1 border'>
                                                            <button
                                                                className='text-xl font-bold px-1.5 border-r'
                                                                onClick={() => dispatch(decreaseQuantity(product.id))}
                                                            >
                                                                -
                                                            </button>
                                                            <p className='text-xl px-2'>{product.quantity}</p>
                                                            <button
                                                                className='text-xl px-1 border-1'
                                                                onClick={() => dispatch(increaseQuantity(product.id))}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className='py-3 px-4'>${(product.quantity * product.price).toFixed(2)}</td>
                                                    <td className='py-3 px-4'>
                                                        <button
                                                            className='text-red-500 hover:text-red-300'
                                                            onClick={() => dispatch(removeFromCart(product.id))}
                                                        >
                                                            <FaTrashAlt />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                            <h3 className='text-sm font-semibold mb-5'>CART TOTAL:</h3>
                            <div className='flex justify-between mb-5 border-b pb-1'>
                                <span className='text-sm'>Total Items:</span>
                                <span>{cart.totalQuantity}</span>
                            </div>
                            <div className='mb-4 border-b pb-2'>
                                <p>Shipping to:</p>
                                <p className='ml-2'>
                                    <span className='text-xs font-bold'>{address}</span>
                                </p>
                                <button
                                    className='text-blue-500 hover:underline mt-1'
                                    onClick={() => setIsModelOpen(true)}
                                >
                                    Change address
                                </button>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <span>Total Price:</span>
                                <span>{cart.totalPrice.toFixed(2)} $ </span>
                            </div>
                            <button
                                className='w-full bg-red-600 text-white py-2 hover:bg-red-800'
                                onClick={() => Navigate('/checkout')}
                            >
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                    <Modal
                        isModelOpen={isModelOpen}
                        setIsModelOpen={setIsModelOpen}
                    >
                        <ChangeAdress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
                    </Modal>
                </div>
                :
                <div className='flex justify-center'>
                    <img src={emptycart} alt="Empty Cart" />
                </div>
            }
        </div>
    )
}

export default Cart;
