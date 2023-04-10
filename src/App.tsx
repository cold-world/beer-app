import Home from './pages/home/home';
import About from './pages/about/about';
import Error from './pages/error/error';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';

import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/page/:page' element={<Home />} />
        <Route path='/' element={<Navigate to='/page/1' />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
