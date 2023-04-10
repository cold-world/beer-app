import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
} from '@ionic/react';

import './beerListItem.css';

interface BeerItemProps {
  img: string;
  name: string;
  abv: number;
  onClick: () => void;
};

export function BeerItem({ img, abv, name, onClick }: BeerItemProps) {
  return (
    <IonCard onClick={onClick} className='beer-item'>
      <img className='beer-item__image' alt={name} src={img} />
      <IonCardHeader>
        <IonCardSubtitle>ABV: {abv}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
}
