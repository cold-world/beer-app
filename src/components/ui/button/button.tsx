import React from 'react';
import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import {
  add,
  bookmarkOutline,
  removeOutline,
  chevronBackOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

type ButtonProps = {
  onClick: () => void;
  type: 'add' | 'remove' | 'back' | 'forward' | 'bookmarks';
  isDisabled?: boolean;
};

export function Button({ onClick, type, isDisabled }: ButtonProps) {
  const config = {
    add: { icon: add, color: 'warning', horizontal: 'end' },
    remove: { icon: removeOutline, color: 'warning', horizontal: 'end' },
    back: { icon: chevronBackOutline, color: 'primary', horizontal: 'start' },
    forward: { icon: chevronForwardOutline, color: 'primary', horizontal: 'end' },
    bookmarks: { icon: bookmarkOutline, color: 'warning', horizontal: 'end' },
  };

  const { icon, color, horizontal } = config[type];

  if (isDisabled) {
    return <></>;
  }

  return (
    <IonFab
      onClick={onClick}
      class='ion-padding'
      slot='fixed'
      horizontal={horizontal as 'end' | 'start' | 'center'}
    >
      <IonFabButton color={color}>
        <IonIcon icon={icon}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
}
