import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL, RESULTS_BY_PAGE } from '../config';
import { BeerListType, IBeer } from '../types';
import { httpHelper } from '../utils/httpHelper';

function useFetchBeers() {
  const [status, setStatus] = useState<string | null>(null);
  const [beers, setBeers] = useState<BeerListType>([]);
  const [beer, setBeer] = useState<IBeer | null>(null);

  const { page } = useParams();

  const fetchBeers = async (page = 1) => {
    try {
      if (page < 1) return;

      setStatus('pending');
      const data = await httpHelper(`${API_URL}?per_page=${RESULTS_BY_PAGE}&page=${page}`);
      setBeers(data);
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!page) return;
    fetchBeers(+page);
  }, [page]);

  const { id } = useParams();

  const fetchBeerById = async (id: number) => {
    try {
      setStatus('pending');
      const data = await httpHelper(`${API_URL}/${id}`);
      setBeer(data[0]);
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      console.log(err.message);
    }
  };

  useEffect(() => {
    id && fetchBeerById(+id);
  }, [id]);

  return { status, beers, beer };
}
export default useFetchBeers;
