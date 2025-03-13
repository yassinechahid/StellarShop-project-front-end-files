import React, { useState } from 'react'

const ChangeAdress = ({setAddress, setIsModelOpen}) => {
  const [newAddress, setNewAddress]=useState("")
  const onclose=()=>{
    setAddress(newAddress);
    setIsModelOpen(false)
  }
  return (
    <div>
        <input type="text" placeholder='enter new address'
        className='border p-2 w-full mb-4'
        onChange={(e)=>setNewAddress(e.target.value)}
        />
        <div className='flex justify-end'>
            <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
            onClick={()=>setIsModelOpen(false)}
            >cancel</button>
            <button className='bg-blue-500 text-white py-2 px-4 rounded'
            onClick={onclose}
            >save address</button>
        </div>
    </div>
  )
}

export default ChangeAdress