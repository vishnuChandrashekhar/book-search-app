import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaHome, FaStar } from 'react-icons/fa'

const BookDetailsPage = () => {

  const { bookId } = useParams()
  const URL = 'https://www.googleapis.com/books/v1/volumes/'
  const uniqueBookId = bookId.trim()
  const [bookData, setBookData] = useState(null)
  const [loading, setLoading] = useState(true)

  
  useEffect(()=>{
    const fetchBookDetails = async () => {

      try{
        const response = await fetch(`${URL}${uniqueBookId}`);
        if(!response.ok){
          throw new Error('Error in featching book details')
        }
        const data = await response.json()
        setBookData(data)
      }catch(error){
        console.log('Error in featching boo data', error.message)
      }finally{
        setLoading(false)
      }
    }
    fetchBookDetails()
  },[bookId])

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div className='lg:max-w-[1440px] w-full mx-auto my-10'>
      {bookData && bookData.volumeInfo && (
        <div className='flex flex-col  bg-gray-50 p-5 rounded-3xl shadow-xl gap-10' >
          <div>
            <img src={bookData.volumeInfo.imageLinks.small} alt="book imag" className='shadow-2xl transition-all duration-500 cursor-pointer ease-out hover:scale-110'/>
          </div>
          <div className='flex flex-col gap-5 justify-between'>
            <h1><span className='font-semibold font-jost text-2xl md:text-4xl'>{bookData.volumeInfo.title}</span></h1>
            <p className='text-xl font-jost'>Author: <span className='font-semibold'>{bookData.volumeInfo.authors}</span></p>
            <p className='text-xl font-jost flex items-center gap-3'>Ratings: <span className='font-semibold'>{bookData.volumeInfo.averageRating}</span><FaStar size={10}/></p>
            <p className='text-lg font-jost'>Description: <span>{bookData.volumeInfo.description}</span></p>
            <p className='text-lg font-jost'>Page Count: <span>{bookData.volumeInfo.pageCount}</span> Pages.</p>
            <p className='text-lg font-jost'>Published Date: <span>{bookData.volumeInfo.publishedDate}</span></p>
            <p className='text-lg font-jost'>Publisher: <span>{bookData.volumeInfo.publisher}</span></p>
            {bookData.saleInfo.buyLink ? <Link to={bookData.saleInfo.buyLink} target="_blank" rel="noopener noreferrer"><button className='px-10 py-5 bg-blue-600 text-lg text-white font-jost rounded-lg hover:bg-blue-500'>Buy Now</button></Link> : null}
          </div>
          <div>
            <Link to={'/'} className='flex items-center gap-3 text-lg font-jost'><FaHome size={30} color='blue' />Go Home</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookDetailsPage
