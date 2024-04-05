import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="ion-text-center">
          <h1>Count: {count}</h1>
          <IonButton onClick={incrementCount}>Increment</IonButton>
          <IonButton onClick={decrementCount}>Decrement</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
