import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome  } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl text-red-500'>Book Not Found / Page Not Found 404</h1>
      <div>
        <Link to={'/'} className='flex items-center gap-3 text-5xl font-jost'><FaHome size={50} color='blue' />Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound
