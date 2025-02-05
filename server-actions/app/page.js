"use client"
import React from 'react'
import { submitForm } from '@/actions/form'
const page = () => {
  return (
    <div className='bg-slate-700 text-black p-4 mt-10 flex justify-center'>
        <form action={submitForm}>
             <div className='p-4 mb-2'>
                  <label htmlFor="name" className='text-xl text-white'>Name </label>
                  <input type="text" className='p-2 rounded-md' placeholder='Enter Your Name' />
             </div>
             <div className='p-4 mb-2'>
                  <label htmlFor="email" className='text-xl text-white'>Email </label>
                  <input type="email" className='p-2 rounded-md' placeholder='Enter Your Name' />
             </div>
             <div className='p-4 mb-2'>
                <button className='text-white text-xl bg-green-500 border  w-40 p-1' >Submit</button>
             </div>
        </form>
    </div>
  )
}

export default page