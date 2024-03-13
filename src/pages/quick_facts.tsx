import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert, IonButton, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <img alt="Silhouette of mountains" id="cover_pic" src="../src/assets/img/avatar.jpg" />
          <img alt="Silhouette of mountains" id="profile_pic" src="../src/assets/img/HEN_CIRCLE_PINK_PNG.png" />  
          <IonCardHeader>
            <IonCardTitle>Hencez Heart M. Taborno</IonCardTitle>
            <IonCardSubtitle>BSIT Student, 3rd Year - NBSC</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent><i>❤️ Be All You Can!</i> 😊 🙏 &#x1F446;</IonCardContent>

          
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;