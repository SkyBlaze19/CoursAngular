import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  /*mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;*/

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Un test',
        description: 'la description de mon test',
        createdDate: new Date(),
        snaps: 0,
        imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        altImg: 'Une image qui contient un texte alternatif'
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées',
        createdDate: new Date(),
        snaps: 0,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
        altImg: 'Une image qui contient une montagne qui est très apprécié des randonneurs',
        location: 'une montagne en Irlande'
      },
      {
        title: 'Le Mont Ventoux',
        description: 'Le Mont chauve, un lieu de croisade pour de nombreux cyclistes',
        createdDate: new Date(),
        snaps: 0,
        imgUrl: 'https://cdn.pixabay.com/photo/2020/06/05/18/53/mont-ventoux-5264149_960_720.jpg',
        altImg: 'Une image qui arbore le Mont Ventoux avec un beau paysage',
        location: 'dans la Drôme Provençale'
      }
    ]
    // Déclaration séparée // Maitenant on passe par un tableau
    /*
    this.mySnap = new FaceSnap(
    'Un test',
    'la description de mon test',
    new Date(),
    0,
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    'Une image qui contient un texte alternatif'
    );
    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées',
      new Date(),
      0,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/280px-Three_Rock_Mountain_Southern_Tor.jpg',
      'Une image qui contient une montagne qui est très apprécié des randonneurs',
      'une montagne en Irlande'
    );
    this.myLastSnap = new FaceSnap(
      'Le Mont Ventoux',
      'Le Mont chauve, un lieu de croisade pour de nombreux cyclistes',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2020/06/05/18/53/mont-ventoux-5264149_960_720.jpg',
      'Une image qui arbore le Mont Ventoux avec un beau paysage',
      'dans la Drôme Provençale'
    );
    */
  }
}
