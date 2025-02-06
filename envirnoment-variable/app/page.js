"use client"
import React from 'react'

const page = () => {
  // console.log("The ID is ",process.env.ID);
  // console.log("The SECRET_KEY is ",process.env.SECRET_KEY);
  
  return (
    <div>
      {/* <h1>The ID is {process.env.ID}</h1> */}
      <h1>The ID is {process.env.NEXT_PUBLIC_ID} and SECRET_KEY is {process.env.NEXT_PUBLIC_SECRET_KEY}</h1>
    </div>
  )
}

export default page