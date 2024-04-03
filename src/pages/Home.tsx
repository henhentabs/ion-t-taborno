import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src="../src/assets/img/HEN_CIRCLE_PINK_PNG.png" alt="profile" />
        <h1>Hello Everyone!<br></br>I am Hencez Heart M. Taborno.</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
