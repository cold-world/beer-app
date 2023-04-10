import { Storage } from '@ionic/storage';
import { useState, useEffect } from 'react';
import { BEER_KEY } from '../config';
import { BeerListType, IBeer } from '../types';

export function useStorage() {
  const [store, setStore] = useState<Storage>();
  const [bookmarks, setBookmarks] = useState<BeerListType>([]);

  useEffect(() => {
    const initStorage = async () => {
      const newStore = new Storage({
        name: 'beerDB',
      });
      const store = await newStore.create();
      setStore(store);

      const storedBeers = (await store.get(BEER_KEY)) || [];
      setBookmarks(storedBeers);
    };
    initStorage();
  }, []);

  //check if a beer in bookmarks
  function isBookmarked(beerID: number) {
    return bookmarks.some((item) => item.id === beerID);
  }

  //add a beer to bookmarks
  async function addBookmark(beer: IBeer) {
    if (!isBookmarked(beer.id)) {
      const newBookmarks = [...bookmarks, beer];
      setBookmarks(newBookmarks);
      await store?.set(BEER_KEY, newBookmarks);
    }
  }

  //remove from bookmarks
  async function removeBookmark(beer: IBeer) {
    const newBookmarks = bookmarks.filter((item) => item.id !== beer.id);
    setBookmarks(newBookmarks);
    await store?.set(BEER_KEY, newBookmarks);
  }

  return { bookmarks, addBookmark, removeBookmark, isBookmarked };
}
