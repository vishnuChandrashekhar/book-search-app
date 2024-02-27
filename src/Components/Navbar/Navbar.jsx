import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 flex items-center bg-black justify-center gap-16'>
      <Link to={'/'} className='text-2xl text-white font-jost font-semibold'>Home</Link>
      <Link to={'/about'} className='text-2xl text-white font-jost font-semibold'>About</Link>
    </div>
  )
}

export default Navbar
Navbar