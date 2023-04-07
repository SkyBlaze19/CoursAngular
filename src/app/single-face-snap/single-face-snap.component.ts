import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.models';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  buttonText!: string;
  format1!: string;
  format2!: string;
  
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.buttonText = "Oh Snap !";
    this.format1 = "dd MMMM yyyy, à HH:MM";
    this.format2 = "dd/MM/yy, à HH:MM";

    // Ci-dessous typecast qui permet de transformer une chaine en number
    const faceSnapId = +this.route.snapshot.params['id'];
    //this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  /* Manière statique
  onSnap(){
    if(this.buttonText === "Oh Snap !") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, unSnap !";
    }
    else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh Snap !";
    }
  }
  */
  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.buttonText = 'Oops, unSnap!')
        );
    } else {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.buttonText = 'Oh Snap!')
        );
    }
  }
}
