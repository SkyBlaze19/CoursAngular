import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
/* Le code ci-dessus permet de dire à angular qu'il doit enregistrer 
ce service à la racine de l'application
cela permet d'assurer qu'il n'y aura qu'une seule instance 
de se service
Et donc que l'application partagera les mêmes données et la même logique
*/
export class FaceSnapsService {
  constructor(private http: HttpClient) {}

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Le Mont Ventoux',
      description:
        'Le Mont chauve, un lieu de croisade pour de nombreux cyclistes',
      createdDate: new Date(),
      snaps: 951,
      imgUrl:
        'https://cdn.pixabay.com/photo/2020/06/05/18/53/mont-ventoux-5264149_960_720.jpg',
      altImg: 'Une image qui arbore le Mont Ventoux avec un beau paysage',
      location: 'Dans la Drôme Provençale',
    },
    {
      id: 2,
      title: "l'alpe d'huez",
      description: "Les 21 virages mythiques de l'alpe d'huez",
      createdDate: new Date(),
      snaps: 368,
      imgUrl:
        'https://mescolsetsouvenirsdutourdefrance.fr/ph/alpedhuez/mc_alpedhuez_3-12.jpg',
      altImg:
        "Une image qui montre les virages de l'ascension de l'alpe d'huez dans un plan large",
      location: 'Dans les alpes',
    },
    {
      id: 3,
      title: 'PASSO DEL STELVIO',
      description: 'Le Passo del Stelvio, un haut lieu du cyclisme Italien',
      createdDate: new Date(),
      snaps: 746,
      imgUrl:
        'https://cdn.pixabay.com/photo/2012/11/13/21/15/beautiful-66018_960_720.jpg',
      altImg:
        'Une image qui représente la montée interminable du passo del stelvio en Italie, dans un plan large',
      location: 'dans les Alpes Italiennes',
    },
    {
      id: 4,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées',
      createdDate: new Date(),
      snaps: 262,
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
      altImg:
        'Une image qui contient une montagne qui est très apprécié des randonneurs',
      location: 'une montagne en Irlande',
    },
    {
      id: 5,
      title: 'Un test',
      description: 'la description de mon test',
      createdDate: new Date(),
      snaps: 35,
      imgUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      altImg: 'Une image qui contient un texte alternatif',
    },
    {
      id: 6,
      title: 'Une bibi',
      description: 'Un chien trop gentil !',
      createdDate: new Date(),
      snaps: 35,
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzkRZLftDQtgMZfGo0pHDYTCOe0FE_uPK7Q&usqp=CAU',
      altImg: 'Une photo de moi sur Zwift',
    },
  ];

  /* Ancienne logique (sans http)
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
    */

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    /*const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            return faceSnap;
        } else {
            throw new Error('FaceSnap not found!');
        }*/
    return this.http.get<FaceSnap>(
      `http://localhost:3000/facesnaps/${faceSnapId}`
    );
  }

  snapFaceSnapById(
    faceSnapId: number,
    snapType: 'snap' | 'unsnap'
  ): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
      map((faceSnap) => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1),
      })),
      switchMap((updatedFaceSnap) =>
        this.http.put<FaceSnap>(
          `http://localhost:3000/facesnaps/${faceSnapId}`,
          updatedFaceSnap
        )
      )
    );
  }

  /* Statique
    snapFaceSnapById(faceSnapId: number, snapType : 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
    */

  addNewFaceSnap(formValues: {
    title: string;
    description: string;
    imgUrl: string;
    altImg: string;
    location?: string;
  }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map((facesnaps) => [...facesnaps].sort((a, b) => a.id - b.id)),
      map((sortedFacesnaps) => sortedFacesnaps[sortedFacesnaps.length - 1]),
      map((previousFacesnap) => ({
        ...formValues,
        snaps: 0,
        createdDate: new Date(),
        id: previousFacesnap.id + 1,
      })),
      switchMap((newFacesnap) =>
        this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap)
      )
    );
  }

  modifyFaceSnap(formValues: {
    title: string;
    description: string;
    imgUrl: string;
    altImg: string;
    location?: string;
    snaps: number;
    createdDate: Date;
    id: number;
  }): Observable<FaceSnap> {
    const updatedFaceSnap = { ...formValues };
    return this.http.put<FaceSnap>(
      `http://localhost:3000/facesnaps/${formValues.id}`,
      updatedFaceSnap
    );
  }

  /* Statique
    addNewFaceSnap(formValues: { title: string, description: string, imgUrl: string, altImg: string, location?: string }) {
      const faceSnap: FaceSnap = {
        ...formValues,
        snaps: 0,
        createdDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
      };
      this.faceSnaps.push(faceSnap);
    }
    */

  /*
    unSnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }
    */
}
