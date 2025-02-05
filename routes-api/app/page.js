"use client"
import React from 'react'

const page = () => {
  const handleClick = async() => {
     let data = {
         name:"Ali",
         role:"Coder"
     } 
     let a =  await fetch("/api/add",{
      method:"POST",headers: {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify(data),
    })
    let res = await a.json();
    console.log(res);
  }
  return (
    <div>
        <h1 className='text-xl font-bold'>NextJS Routes</h1>
       <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default page