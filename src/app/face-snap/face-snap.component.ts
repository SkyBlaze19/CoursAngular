import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
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
  format1!: string;
  format2!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router) {}

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
    this.buttonText = "Oh Snap !";
    this.format1 = "dd MMMM yyyy, à HH:MM";
    this.format2 = "dd/MM/yy, à HH:MM";
  }

  onSnap() {
    if(this.buttonText === "Oh Snap !") {
      //this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unSnap !";
    }
    else {
      //this.faceSnap.snaps--;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh Snap !";
    }
  }

  onViewFaceSnap() {
    //console.log('Tu est appelé (onviewfacesnap)');
    this.router.navigateByUrl(`facesnap/${this.faceSnap.id}`);
  }

  onModifyFaceSnap() {
    this.router.navigateByUrl(`facesnap/modify/${this.faceSnap.id}`);
  }
}
