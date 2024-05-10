import React, { useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonBadge
} from '@ionic/react';

//Custom CSS
import './Home.css';

//Ionic Icons
import { speedometerOutline,calculator,pencil, chatbubble, logoIonic, logoReact, logoFirebase, readerOutline} from 'ionicons/icons';

//Additional Routes
// import Click_counter from './Click_counter';


const cardData = [
  {
    title: 'Click Counter',
    icon: speedometerOutline,
    subtitle: 'Applet #1',
    link: '/ion-t-taborno/clickcounter',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }

  },
  {
    title: 'Calculator',
    icon: calculator,
    subtitle: 'Applet #2',
    link: '/ion-t-taborno/calculator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'To Do List',
    icon: pencil,
    subtitle: 'Applet #3',
    link: '/ion-t-taborno/todolist',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Quote Generator',
    icon: chatbubble,
    subtitle: 'Applet #4',
    link: '/ion-t-taborno/quotesgenerator',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  },
  {
    title: 'Notes',
    icon: readerOutline,
    subtitle: 'Applet #5',
    link: '/ion-t-taborno/notes',
    tags: {
      tag1: logoIonic,
      tag2: logoReact
    }
  }
  
];

  const Home: React.FC = () => {

    {/*Dynamic Search*/}
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
      <IonPage className="home-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
          </IonHeader>
        {/*Dynamic Search*/}
        <>
          <IonSearchbar 
            value={searchTerm} 
            onIonInput={(e) => setSearchTerm(e.target.value ?? '')} 
          />
          
          {cardData
            .filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((card, index) => (
              <IonCard key={index} routerLink={card.link} routerDirection='forward' id="card_body">
                <IonCardHeader>
                  <IonCardTitle>
                    <IonGrid>
                      <IonRow>
                        <IonCol push=".75">
                          <IonIcon className="home-card-icon" icon={card.icon} />
                        </IonCol>
                        <IonCol pull='3'>
                          <div className="home-card-title">{card.title}</div>
                          <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
                  </IonCardTitle>
                </IonCardHeader>
              </IonCard>
          ))}
        </>
          </IonContent>
        </IonPage>
    );
  };
  
  //
  export default Home;