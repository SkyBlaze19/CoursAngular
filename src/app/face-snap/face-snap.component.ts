import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  dateLisible?: string;
  /* Idem que le commentaire à l'intérieur de ngOnInit.
  // On laisse buttonText car il est statique, il ne changera pas 
  // entre tous les snaps existants.
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imgUrl!: string;
  altImg!: string;
  */
  buttonText!: string;

  constructor(public dateService: DateService) {
    this.dateLisible = this.dateService.modifyDate(this.faceSnap.createdDate);
  }

  ngOnInit() {
    /* Mise en commentaire car maintenant le tout est géré par mon objet 
    // MySnap crée à l'aide de mon model FaceSnap.
    this.title = 'Un test';
    this.description = 'la description de mon test';
    this.createdDate = new Date();
    this.snaps = 13;
    this.imgUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.altImg = 'Une image qui contient un texte alternatif';
    */
    this.buttonText = "Oh Snap !"
  }

  onSnap(){
    if(this.buttonText === "Oh Snap !") {
      this.faceSnap.snaps++;
      this.buttonText = "Oops, unSnap !";
    }
    else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap !";
    }
  }
}
