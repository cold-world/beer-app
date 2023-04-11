Beer App.
=======================================

React, Typescript, Ionic, Capacitor. 

Main goal -> build native android app.

Features -> 

1. Get / render data from API.
2. Add / remove from bookmarks.
3. Bookmarks stored in local storage, indexedDB, and native storage.
4. App works as web app as well.


* * *
### [Demo](https://cold-world.github.io/beer-app/)

![Alt Text](https://i.ibb.co/3S8Gm4X/Screenshot-2023-04-11-183641.jpg)
![Alt Text](https://i.ibb.co/z5HzzTT/Screenshot-2023-04-11-183545.jpg)

* * *



### A piece of code

```
export function useStorage() {
  const [store, setStore] = useState<Storage>();
  const [bookmarks, setBookmarks] = useState<BeerListType>([]);

  useEffect(() => {
    const initStorage = async () => {
      const newStore = new Storage({
        name: 'beerDB',
        driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage],
      });

      await newStore.defineDriver(CordovaSQLiteDriver);

      const store = await newStore.create();
      setStore(store);

      const storedBeers = (await store.get(BEER_KEY)) || [];

      setBookmarks(storedBeers);
    };
    initStorage();
  }, []);
```

### Download & Installation

```shell 
git clone https://github.com/cold-world/beer-app
cd <project-dir>
yarn install
yarn run build
yarn run dev 

//android-debug.apk
npx cap add android
npx capacitor copy android && cd android
./gradlew assembleDebug

//file will be in <project-dir>android/app/build/outputs/apk/debug/app-debug.apk
```
