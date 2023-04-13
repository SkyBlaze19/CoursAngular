import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap.models';
import { FaceSnapsService } from '../core/services/face-snaps.service';
import { Observable, Subject, interval } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  //faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<boolean>;

  // dependencies injection
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    //this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    /* Nb d'émissions connus
    interval(1000).pipe(
      take(3),
      tap(console.log),
    ).subscribe();
    */
    // émissions pdt toute la durée de vie du component
    /*this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe();
    */
  }

  ngOnDestroy(): void {
    //this.destroy$.next(true);
  }
}
