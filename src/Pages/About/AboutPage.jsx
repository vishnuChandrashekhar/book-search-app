import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome  } from 'react-icons/fa'


const AboutPage = () => {
  return (
    <div className='lg:w-[1440px] mx-auto w-full h-[100vh] flex flex-col justify-center items-start gap-10'>
      <h1 className='text-3xl font-jost '>Internship Assignment for: <span className='font-bold'>Employee Forums</span></h1>
      <p className='text-2xl md:text-3xl font-jost'>In this internship project, I'm Assigned to developing a user-friendly web application centered around book browsing and discovery, leveraging the power of the Google Books API. With a focus on functionality and user experience, I aim to create a platform where book enthusiasts like me can explore a diverse range of titles, authors, and genres. Through seamless integration of the Google Books API, users will be able to search for books by title, author, or keyword, enabling me to discover my next favorite read with ease.</p>
      <div className='w-full flex flex-col justify-start gap-4'>
        <p className='text-2xl md:text-3xl font-jost'>Name: Vishnu Cs</p>
        <p className='text-2xl md:text-3xl font-jost'>Email: vishnuchandrashekhar2@gmail.com</p>
        <Link className='text-2xl md:text-3xl font-jost'>GitHub link: </Link>
      </div>
      <div>
        <Link to={'/'} className='flex items-center gap-3 text-5xl font-jost'><FaHome size={50} color='blue' />Go Home</Link>
      </div>
    </div>
  )
}

export default AboutPage
