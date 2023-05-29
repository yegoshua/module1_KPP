import { 
    InputCustomEvent,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Country,  MountainRange, Lake, Republic, Sea} from '../Classes/Classes';

const Home: React.FC = () => {
  const [resData, setResData] = useState<string[]>();
    const solve = ()=>{
      const ukraine = new Country("Ukraine", 603628);
      const carpathians = new MountainRange("Carpathians", 2500);
      const lakeGeneva = new Lake("Lake Geneva", 580);
      const germany = new Republic("Germany", 357386);
      const mediterraneanSea = new Sea("Mediterranean Sea", 2500000);

      ukraine.logInfo();
      carpathians.logInfo();
      lakeGeneva.logInfo();
      germany.logInfo();
      mediterraneanSea.logInfo();

      setResData([ukraine.getInfo(), carpathians.getInfo(), lakeGeneva.getInfo(), germany.getInfo(), mediterraneanSea.getInfo()])
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Модульна робота Слободяник Єгор КН-32</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
              <IonItem>
                  <IonLabel position="floating">Кількість елементів</IonLabel>
              </IonItem>
              <IonButton expand="block" onClick={solve}>
                  Створити сутності
              </IonButton>
              <IonItem> 
                  <p>Виведений резульат</p>
              </IonItem>
              <IonItem>
                <IonList>
                  {resData?.map((item, index) => (
                    <IonItem key={index}> {item} </IonItem>
                  ))}
                </IonList>
              </IonItem>
          </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
