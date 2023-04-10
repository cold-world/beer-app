import React from 'react';
import { IonButton, useIonToast } from '@ionic/react';

export function Toast() {
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });
  };

  return { presentToast };
}
