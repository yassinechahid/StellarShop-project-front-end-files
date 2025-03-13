import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(false)
    const [shippingTogle, setShippingTogle]=useState(false)
    const [paymentToggle, setPaymentToggle]=useState(false)
    const [paymentMethod, setPaymentMethod]=useState("cod")
    const cart=useSelector(state=>state.cart)
    const navigate=useNavigate()
    const [shipingInfo, setShipingInfo]=useState({
        address:"",
        city:"",
        zip:""
    })

    const handleOrder=()=>{
        const newOrder={
            products:cart.products,
            orderNumber: "12121",
            shipingInformation:shipingInfo,
            totalPrice:cart.totalPrice
        }
        setOrder(newOrder)
        navigate("/order-confirmation")
    }

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            
            <div className='flex flex-col md:flex-row gap-6 mt-8'>
                {/* Left Section */}
                <div className='md:w-2/3'>
                    <div className='border p-4 w-full mb-6 rounded-lg shadow'>
                        <div className='flex items-center justify-between cursor-pointer'
                             onClick={() => setBillingToggle(!billingToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="name">Name</label>
                                <input
                                    className='w-full px-3 py-2 border rounded'
                                    type="text"
                                    id="name"
                                    placeholder='Enter your name'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor="email">Email</label>
                                <input
                                    className='w-full px-3 py-2 border rounded'
                                    type="email"
                                    id="email"
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor="phone">Phone</label>
                                <input
                                    className='w-full px-3 py-2 border rounded'
                                    type="text"
                                    id="phone"
                                    placeholder='Enter your phone'
                                />
                            </div>
                        </div>
                    </div>
                    
                    <div className='border p-4 w-full mb-6 rounded-lg shadow'>
                        <div className='flex items-center justify-between cursor-pointer'
                             onClick={() => setShippingTogle(!shippingTogle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>Shipping  Information</h3>
                            {shippingTogle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${shippingTogle ? "" : "hidden"}`}>
                            <div>
                                <label className='block text-gray-700' htmlFor="address">address</label>
                                <input
                                    className='w-full px-3 py-2 border rounded'
                                    type="text"
                                    id="address"
                                    placeholder='Enter your adress'
                                    onChange={(e)=>setShipingInfo({...shipingInfo, address:e.target.value})}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor="city">City</label>
                                <input
                                    className='w-full px-3 py-2 border rounded'
                                    type="text"
                                    id="city"
                                    placeholder='Enter your city name'
                                    onChange={(e)=>setShipingInfo({...shipingInfo, city:e.target.value})}
                                />
                            </div>
                            <div>
                                <label className='block text-gray-700' htmlFor="zipcode">Zip Code</label>
                                <input
                                    className='w-full px-3 py-2 border rounded'
                                    type="text"
                                    id="zipcode"
                                    placeholder='Enter Zip Code'
                                    onChange={(e)=>setShipingInfo({...shipingInfo, zip:e.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    {/*paymment method*/}
                    
                    <div className='border p-4 w-full mb-6 rounded-lg shadow'>
                        <div className='flex items-center justify-between cursor-pointer'
                             onClick={() => setPaymentToggle(!paymentToggle)}
                        >
                            <h3 className='text-lg font-semibold mb-2'>Payment  Method</h3>
                            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
                        </div>
                        <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                            <div className='flex items-center mb-2'>
                                
                                <input
                                    type="radio"
                                    id="payment"
                                    checked={paymentMethod==="cod"}
                                    onChange={()=>setPaymentMethod("cod")}
                                    
                                />
                                <label className='block text-gray-700 ml-2'> cash on delivery </label>
                            </div>
                            <div className='flex items-center mb-2'>
                                
                                <input
                                    type="radio"
                                    id="payment"
                                    checked={paymentMethod==="dc"}
                                    onChange={()=>setPaymentMethod("dc")}
                                    
                                />
                                <label className='block text-gray-700 ml-2'>debit card</label>
                            </div>
                            {paymentMethod ==="dc" && (
                                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                                    <h3 className='text-xl font-semibold mb-4'>debit card information</h3>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>
                                            card number
                                        </label>
                                        <input
                                         type="text" 
                                         placeholder='enter card number'
                                         className='border p-2 w-full rounded' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>card Holder Name</label>
                                        <input 
                                        type="text" 
                                        placeholder='enter holder card name'
                                        className='border p-2 w-full rounded'  />
                                    </div>
                                    <div className='flex justify-between mb-4'>
                                        <div className='w-1/2 mr-2'>
                                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>expire date</label>
                                            <input 
                                            type="text" 
                                            placeholder='MM/YY'
                                            className='border p-2 w-full rounded' 
                                            required/>
                                        </div>
                                        <div className='w-1/2 ml-2'>
                                            <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                            <input 
                                            type="text"
                                            placeholder='CVV'
                                            className='border p-2 w-full rounded'
                                            required
                                             />
                                        </div>
                                    </div>
                                </div>
                                
                            )}
                        </div>
                    </div>
                </div>
                 {/* Right Section (Summary) */}
                 <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg border w-full">
                 <h3 className="text-xl font-semibold border-b pb-3 mb-4">Order Summary</h3>
                 <div className="space-y-4">
                    {cart.products.map((product, index) => (
                        <div key={index} className="flex items-center border-b pb-3">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                            <div className="flex-1">
                                <h3 className="text-lg font-medium">{product.name}</h3>
                                <p className="text-gray-600">
                                    ${product.price} × {product.quantity}
                                </p>
                            </div>
                        </div>
                    ))}</div>
                <div className="mt-4 flex justify-between items-center border-t pt-3">
                    <span className="text-lg font-semibold">Total Price:</span>
                    <span className="text-xl font-bold text-blue-600">${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button 
                onClick={handleOrder}
                className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6 text-lg font-semibold hover:bg-blue-600 transition duration-300">
                    Place Order

                </button>
                </div>
            </div>
                

               
            </div>
           


               
        
    )
}

export default Checkout
