import React from "react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Pages/Home/Home'
import BookDetailsPage from "./Pages/BookDetailspage/BookDetailsPage"
import AboutPage from "./Pages/About/AboutPage"
import { BookSearchProvider, useBookSearch } from "./Context/BookSearchContext"
import NotFound from "./Pages/Not Found/NotFound"

function App() {

  

  return (
    <>
    <BookSearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/not-found" element={<NotFound />}/>
            <Route path="/book/:bookId" element={<BookDetailsPage />}/>
          </Routes>
        </BrowserRouter>
    </BookSearchProvider>
    </>
  )
}

export default App
