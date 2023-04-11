import React from 'react';
import { useIonToast } from '@ionic/react';

function useToast() {
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom', message: string) => {
    present({
      message: message,
      duration: 1500,
      position: position,
    });
  };

  return { presentToast };
}

export default useToast;
