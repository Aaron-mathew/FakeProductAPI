import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
  return (
    <div className='w-[70%] flex items-center justify-center h-full bg-red-100 m-auto p-[10%]'>
        <img className='h-[80%] w-[50%]' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className='content'>
            <h1>Title</h1>
            <h2>Price</h2>
            <p>description</p>
            <Link>Edit</Link>
            <Link>Delete</Link>
        </div>
    </div>
  )
}

export default Details

// {38:33 Video}