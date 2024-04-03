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
        <h1 style={{ textAlign: 'center' }}>Hello Everyone!<br />I am Hencez Heart M. Taborno.<br />A 3rd year BSIT student of NBSC.</h1>
      </IonContent>
    </IonPage>

  );
};

export default Home;
