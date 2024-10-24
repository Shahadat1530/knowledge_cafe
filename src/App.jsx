
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmarks = blog => {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  }

  const handleReadTime = (id, time) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);

    // remove bookmark
    const  remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs 
        handleBookmarks = {handleBookmarks}
        handleReadTime = {handleReadTime}
      ></Blogs>
      <Bookmarks 
        bookmarks = {bookmarks}
        readTime = {readTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
