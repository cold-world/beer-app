import { Link } from 'react-router-dom';

import './error.css'

export default function Error() {
  return (
    <div className='error-page__container'>
      <h1>Oops!</h1>
      <p>Sorry, 404 Error.</p>
      <Link to='/'>Go back to main page</Link>
    </div>
  );
}
