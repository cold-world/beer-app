import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonBackdrop,
} from '@ionic/react';
import { useStorage } from '../../../hooks/useStorage';
import './modal.css';
import { Link } from 'react-router-dom';

export function Modal() {
  const { bookmarks } = useStorage();

  return (
    <>
      <IonBackdrop visible={true} />
      <IonCard id='box'>
        <IonCardHeader>
          <IonCardTitle>Bookmarks</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {bookmarks?.map((item) => (
              <Link to={`/about/${item.id}`} key={item.id}>
                <IonItem>
                  <IonThumbnail slot='start'>
                    <img alt={item.name} src={item.image_url} />
                  </IonThumbnail>
                  <IonLabel>{item.name}</IonLabel>
                </IonItem>
              </Link>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
    </>
  );
}
