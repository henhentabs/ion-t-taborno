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
      <img alt="Silhouette of mountains" src="../src/assets/img/avatar.jpg" />
      <img alt="Silhouette of mountains" id="profile_pic" src="../src/assets/img/HEN_CIRCLE_PINK_PNG.png" />  
        <IonCardHeader>
          <IonCardTitle>Hencez Heart M. Taborno</IonCardTitle>
           <IonCardSubtitle>BSIT Student</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent><i>❤️ Be All You Can!</i> 😊 🙏 &#x1F446;</IonCardContent>

      <IonButton id="present-alert" expand="block" color="primary">Quick Facts</IonButton>
      <IonAlert
        trigger="present-alert"
        header="Explore Quick Facts?"
        subHeader="It's worth your time."
        message="Discovering quick facts will provide comprehensive insights about me."
        buttons={['Proceed']}
      ></IonAlert>

<IonButton id="open-action-sheet" expand="block" color="primary">Open Action Sheet</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonCard>
        </IonContent>
      </IonPage>
  );
};

export default Tab1;