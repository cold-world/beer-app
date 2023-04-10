import { Banner, Button, Header, Spinner, Toast } from '../../components';
import { useStorage } from '../../hooks/useStorage';
import useFetchBeers from '../../hooks/useFetchBeers';
import { useNavigate } from 'react-router-dom';

import './about.css';

function About() {
  const { beer, status } = useFetchBeers();
  const { isBookmarked, removeBookmark, addBookmark } = useStorage();
  const addDeleteHandler = beer && isBookmarked(beer?.id || 0) ? removeBookmark : addBookmark;

  const navigate = useNavigate();
  const {presentToast} = Toast()

  if (status === 'pending') {
    return <Spinner />;
  }

  if (!beer) {
    return <></>;
  }

  if (!beer && status === 'error') {
    return <>Something went wrong...</>;
  }

  return (
    <div>
      <Button onClick={() => navigate(-1)} type='back' />
      <Button
        onClick={() => addDeleteHandler(beer!)}
        type={isBookmarked(beer!?.id) ? 'remove' : 'add'}
      />
      <Banner banner='banner2' />
      <Header title='About Beer' />
      <div className='about-container'>
        <img src={beer.image_url} alt={beer.name} />
        <h2>Name: {beer.name}</h2>
        <p>ABV: {beer.abv}</p>
        <p>ABV: {beer.description}</p>
      </div>
    </div>
  );
}

export default About;
