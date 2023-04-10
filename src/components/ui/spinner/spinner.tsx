import React from 'react';
import { IonSpinner } from '@ionic/react';

import './spinner.css';

export function Spinner() {
  return (
    <>
      <IonSpinner className='spinner' color="warning"></IonSpinner>
    </>
  );
}