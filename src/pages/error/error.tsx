import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, 404 Error.</p>
      <Link to='/'>Go back to main page</Link>
    </div>
  );
}
