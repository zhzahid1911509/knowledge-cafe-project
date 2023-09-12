import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
 const [bookmarks, setBookmarks] = useState([]);

 const [readingTime, setReadingTime] = useState(0);

 const handleBookmark = blog => {
  //console.log(blog.title);
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
 }

 const handleMarkAsRead = (id, time) => {
  //console.log('mark as read', time);
  setReadingTime(readingTime + time);
  //remove the read blog from bookmark
  //console.log('remove bookmark', id);
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);
}

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
    </>
  )
}



export default App
