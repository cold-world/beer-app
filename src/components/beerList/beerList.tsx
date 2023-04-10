import { BeerItem } from './../';
import { BeerListType } from '../../types';
import { useNavigate } from 'react-router-dom';

import './beerList.css';

type BeerListProps = {
  data: BeerListType;
};

export function BeerList({ data }: BeerListProps) {
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/about/${id}`);
  };

  return (
    <ul className='list-container'>
      {data?.map((item) => (
        <BeerItem
          onClick={() => handleItemClick(item.id)}
          key={item.id}
          abv={item.abv}
          img={item.image_url}
          name={item.name}
        />
      ))}
    </ul>
  );
}
