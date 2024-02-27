import React, { useState } from 'react'
import { useBookSearch } from '../../Context/BookSearchContext'
import { Link, useNavigate } from 'react-router-dom'

const BookItem = () => {
  const { books, error, setError, booksByGenre, genre } = useBookSearch()

  const navigate = useNavigate()
  
  if(books == []){
    navigate('/notfound')
  }

  return (
    <div className='xl:w-[1540px] w-full mx-auto '>
      <div className='flex justify-center items-center py-10'>
          <div className='grid md:grid-cols-3 grid-cols-1 justify-between items-center gap-14'>
            {
              books.map((book)=>{
                  const bookDetails =  {
                  id: book.id,
                  title: book.volumeInfo.title,
                  author: book.volumeInfo.authors,
                  thumbnail: book.volumeInfo.imageLinks?.thumbnail,
                  description: book.volumeInfo.description,
                  publisher: book.volumeInfo.publisher,
                  publishedDate: book.volumeInfo.publishedDate
                }
                return (
                    <div key={bookDetails.id} className='bg-white min-h-[400px] w-[350px]  p-5 rounded-lg shadow-xl transition-all duration-200 cursor-pointer hover:scale-110'>
                    <Link to={`/book/${bookDetails.id}`} className='flex flex-col items-center justify-center gap-5'>
                      <div>
                        {bookDetails.thumbnail ? <img src={bookDetails.thumbnail} alt="book image" /> : <img src="/images/HarperLee.jpg" alt="book image" />}
                        
                      </div>
                      <div className='text-center flex flex-col gap-3'>
                        <h1 className='text-xl font-jost '>Title: <span className='text-xl font-jost font-semibold'>{bookDetails.title}</span></h1>
                        <p className='text-xl font-jost '>Author: <span className='text-xl font-jost font-semibold'>{bookDetails.author}</span></p>
                        {book.saleInfo && book.saleInfo.saleability === 'FOR_SALE' && book.saleInfo.listPrice && (
                          <p className='text-xl font-jost font-semibold'>Price: {book.saleInfo.listPrice.amount} <span>₹</span></p>
                        )}
                      </div>
                    </Link>
                    </div>
                )
              })
            }
            {
              booksByGenre.map((genreBook)=>{
                  const genreBooks =  {
                  id: genreBook.id,
                  title: genreBook.volumeInfo.title,
                  author: genreBook.volumeInfo.authors,
                  thumbnail: genreBook.volumeInfo.imageLinks?.thumbnail,
                  description: genreBook.volumeInfo.description,
                  publisher: genreBook.volumeInfo.publisher,
                  publishedDate: genreBook.volumeInfo.publishedDate
                }
                return (
                  <>
                    <div key={genreBooks.id} className='bg-white min-h-[400px] w-[350px]  p-5 rounded-lg shadow-xl transition-all duration-200 cursor-pointer hover:scale-110'>
                    <Link to={`/book/${genreBooks.id}`} className='flex flex-col items-center justify-center gap-5'>
                      <div>
                        {genreBooks.thumbnail ? <img src={genreBooks.thumbnail} alt="book image" /> : <img src="/images/HarperLee.jpg" alt="book image" />}
                      </div>
                      <div className='text-center flex flex-col gap-3'>
                        <h1 className='text-xl font-jost '>Title: <span className='text-xl font-jost font-semibold'>{genreBooks.title}</span></h1>
                        <p className='text-xl font-jost '>Author: <span className='text-xl font-jost font-semibold'>{genreBooks.author}</span></p>
                        {genreBook.saleInfo && genreBook.saleInfo.saleability === 'FOR_SALE' && genreBook.saleInfo.listPrice && (
                          <p className='text-xl font-jost font-semibold'>Price: {genreBook.saleInfo.listPrice.amount} <span>₹</span></p>
                        )}
                      </div>
                    </Link>
                    </div>
                  </>  
                )
              })
            }
          </div>
      </div> 
    </div>
  )
}

export default BookItem
