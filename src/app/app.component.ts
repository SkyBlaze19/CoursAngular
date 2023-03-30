import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
    'Un test',
    'la description de mon test',
    new Date(),
    0,
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    'Une image qui contient un texte alternatif'
    )
  }
}
