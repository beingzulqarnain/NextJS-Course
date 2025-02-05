import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-4 px-4 flex justify-around text-xs '>
        <p>@Copyright - Facebook | Alright Reserved.</p>
        <ul className='flex gap-6 '>
            <li>Home</li>
            <li>About</li> 
            <li>Contact</li>
            <li>Privacy Policy</li>
        </ul>
    </footer>
  )
}

export default Footer