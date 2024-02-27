import React, { useEffect, useState } from 'react'
import { FaSearch, FaArrowUp } from 'react-icons/fa';
import BookItem from '../../Components/BookItem/BookItem'
import { useBookSearch } from '../../Context/BookSearchContext';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  const { query, books, setQuery, searchBook, error, setError, genre, setGenre, fetchBooksByGenre } = useBookSearch()
  const [submit, setSubmit] = useState(false)

  const handleGenreSelection = (e) => {
    setGenre(e.target.value)
  }
  
  const handleInput = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(query !== ''){
      searchBook()
    }
    if(query === '' && genre !== ''){
      fetchBooksByGenre(genre)
    }
    if (genre !== '') {
      await fetchBooksByGenre(genre);
      setGenre(''); // Reset genre to initial state
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
        <Navbar />

      <div className='w-full h-[60vh] bg-[url("/images/bgBooks.jpg")] bg-left '>
        <div className='w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center gap-10'>
          <h1 className='text-white md:text-5xl text-3xl font-jost font-light'>Find your next read: </h1>
          <p className='text-white text-3xl font-cursive tracking-[2px] text-center'>Discover, Explore, and Dive into the World of Books</p>
          <form action="submit" className='w-full flex items-center justify-center gap-5' onSubmit={handleSubmit}>
            <input type="text" 
              className='w-[70%] md:w-[30%] h-12 rounded-3xl bg-white bg-opacity-30 px-5 text-xl text-white outline-none' 
              placeholder='Eg: To kill a mockingbird' 
              value={query} 
              onChange={handleInput} />
            <button className='bg-white py-3 px-3 rounded-3xl hover:bg-opacity-50 transition-all duration-200 ease-in rotate-90 hover:rotate-0' 
              type='submit' onClick={()=>setSubmit(true)}><FaSearch size={25} color='#1B1A55'/></button>
          </form>
          <h1 className='text-lg font-bold mb-2 text-white'>Or</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
              <label htmlFor="genre" className="text-lg font-bold mb-2 text-white">Select a genre:</label>
              <select id="genre" value={genre} onChange={handleGenreSelection} className="p-2 border border-gray-300 rounded-md mb-4">
                <option value="">-- Select Genre --</option>
                <option value="fiction">Fiction</option>
                <option value="nonfiction">Non-Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="science-fiction">Science Fiction</option>
                <option value="romance">Romance</option>
                <option value="mystery">Mystery</option>
                <option value="thriller">Thriller</option>
                <option value="horror">Horror</option>
                <option value="biography">Biography</option>
                <option value="self-help">Self-Help</option>
                <option value="history">History</option>
                <option value="philosophy">Philosophy</option>
              </select>
              <button type="submit" onClick={()=>setSubmit(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Submit</button>
          </form>
        </div>
      </div>
      <div>
        { !submit ? (<div className='w-full h-[30vh] flex justify-center items-center'>
          <h1 className='text-black md:text-6xl text-2xl font-cursive tracking-wider'>Search for your favorite book in search bar</h1>
        </div>): <BookItem />}
      </div>
      <button onClick={scrollToTop} className="fixed bottom-10 right-10 z-50 p-3 bg-black text-white rounded-lg shadow-xl hover:bg-blue-600">
      <FaArrowUp />
    </button>
    </div>
  )
}

export default Home
