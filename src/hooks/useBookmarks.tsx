import { useState, useEffect } from 'react';
import { BeerListType, IBeer } from '../types';

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BeerListType>([]);

  //load bookmarks from local storage
  useEffect(() => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
      console.log(bookmarks);
    }
  }, []); 

  //save bookmarks to local storage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  //check if a beer in bookmarks
  function isBookmarked(beerID: number) {
    return bookmarks.some((item) => item.id === beerID);
  }

  //add a beer to bookmarks
  function addBookmark(beer: IBeer) {
    if (!isBookmarked(beer.id)) {
      setBookmarks([...bookmarks, beer]);
      console.log('add');
    }
  }

  //remove from bookmarks
  function removeBookmark(beer: IBeer) {
    const newArray = bookmarks.filter((item) => item.id !== beer.id);
    setBookmarks(newArray);
    console.log('remove');
  }

  return { bookmarks, addBookmark, removeBookmark, isBookmarked };
}

export default useBookmarks;
