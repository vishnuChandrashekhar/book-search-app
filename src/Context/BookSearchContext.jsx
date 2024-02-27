import { createContext, useContext, useState } from "react";

const BookSearchContext = createContext()

export const useBookSearch = () => useContext(BookSearchContext)

export const BookSearchProvider = ({children}) => {

  const [query, setQuery] = useState('')
  const [books, setBook] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [genre, setGenre] = useState('')
  const [booksByGenre, setBooksByGenre] = useState([])
  const fetchBooksByGenre = async (genre) => {
    const userInputgenre = genre.trim()
    try{
      const startIndex = 0;
      const maxResults = 40;
      const apiForGenre = `https://www.googleapis.com/books/v1/volumes?q=subject:${userInputgenre}&startIndex=${startIndex}&maxResults=${maxResults}`;
      // const apiForGenre = `https://www.googleapis.com/books/v1/volumes?q=subject:${userInputgenre}`
      const responseGenre = await fetch(apiForGenre)
      const dataGenre = await responseGenre.json()
      const genreBooks = dataGenre.items
      setBooksByGenre(genreBooks)
      console.log(booksByGenre)
    }catch(error){
      setError(error.message)
      console.error('Error in fetching data.', error.message);
    }
  }
  const searchBook = async () => {

    try{
      const startIndex = 0;
      const maxResults = 40;
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`)
      const data = await response.json()
      const bookdata = data.items
      setBook(bookdata)
    }catch(error){
      setError(error.message)
      console.log('Error in fetching book data', error.message)
    }
  }
  
  
  
  return (
    <BookSearchContext.Provider value={{ query, books, setQuery, searchBook, error, setError, genre, setGenre, fetchBooksByGenre, booksByGenre }}>
      {children}
    </BookSearchContext.Provider>
  )
}