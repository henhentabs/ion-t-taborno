import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from '@ionic/react';
import { chatbubblesOutline, notificationsOutline, personAddOutline, chevronDownOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonIcon slot="end" icon={chatbubblesOutline} />
          <IonIcon slot="end" icon={notificationsOutline} />
          <IonIcon slot="end" icon={personAddOutline} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonImg src="../src/assets/img/HEN_CIRCLE_PINK_PNG.png" alt="profile" />
          <IonCardHeader>
            <IonCardTitle style={{ textAlign: 'center' }}>Hencez Heart M. Taborno</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ textAlign: 'center' }}>
            <p>3rd year BSIT student of NBSC.</p>
          </IonCardContent>
        </IonCard>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <p>See more</p>
          <IonIcon icon={chevronDownOutline} style={{ fontSize: '24px', color: 'white' }} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
