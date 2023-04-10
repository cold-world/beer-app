import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Banner, BeerList, Button, Header, Modal, Spinner } from '../../components';
import useFetchBeers from '../../hooks/useFetchBeers';
import './home.css';

function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { beers, status } = useFetchBeers();

  const navigate = useNavigate();
  const { page } = useParams();

  const nextPageHandler = () => {
    const nextPage = page && +page + 1;
    navigate(`/page/${nextPage}`);
  };

  const prevPageHandler = () => {
    const prevPage = page && Math.max(+page - 1, 1);
    navigate(`/page/${prevPage}`);
  };

  const pageNumber = Number(page);
  if (pageNumber > 65 || (page && page.match(/[a-z]/gi))) {
    navigate('/error');
  }

  function openModalHandler() {
    setShowModal((prev) => !prev);
  }

  if (status === 'error') {
    return <>Something went wrong</>;
  }

  if(status === 'pending') {
    return <Spinner/>
  }

  return (
    <>
      {showModal && <Modal />}

      <Button onClick={openModalHandler} type='bookmarks' />
      <Banner banner='banner1' />
      <Header title='Explore Beers' />
      <div className='home-container'>
        <BeerList data={beers} />
      </div>
      <Button type='back' onClick={prevPageHandler} isDisabled={+page! === 1} />
      <Button type='forward' onClick={nextPageHandler} />
    </>
  );
}

export default Home;
