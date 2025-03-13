import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Order = ({order}) => {
    const navigate=useNavigate()
    if (!order) {
        return <p className="text-center text-gray-600">No order found. Please place an order first.</p>;
      }
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Thank you for your Order</h2>
        <p className="text-gray-700 mb-6">your order has been placed Successfully you will receive an email confirmation</p>
        <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">order summary</h3>
            <p className="text-gray-800 font-medium">Order Number: {order.orderNumber}</p>
            <div className="mt-4"> 
                <h2 className="text-lg font-semibold">Shipping Information</h2>
                <p className="text-gray-700">{order.shipingInformation.address}</p>
                <p className="text-gray-700">{order.shipingInformation.city}</p>
                <p className="text-gray-700">{order.shipingInformation.zip}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Products Ordered</h3>
                {order.products.map((product)=>(
                    <div className="border p-3 rounded-lg mt-2">
                        <p className="font-medium">{product.name}( X {product.quantity}) </p>
                        <p className="text-green-600 font-semibold">{product.price * product.quantity} $</p>
                    </div>
                ))}
            </div>
            <div className="mt-6 flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                <span className="font-semibold text-lg">Total Price</span>
                <span className="text-xl font-bold text-green-600">{order.totalPrice.toFixed(2)} $</span>
            </div>
            <div className="mt-6 flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Order Tracking</button>
                <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                onClick={()=>navigate('/')}
                >Continue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Order