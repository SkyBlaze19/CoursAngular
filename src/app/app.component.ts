import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval, of } from 'rxjs';
import { concatMap, mergeMap, delay, exhaustMap, map, switchMap, take, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //interval$!: Observable<string>;
  
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  cameraGauche = 0;
  cameraDroite = 0;

  /*
  destroy$ = new Subject();
  currentCamera = 'A';
  cameraSubject = new Subject<string>();

  camera$: Observable<string> = this.cameraSubject.asObservable();
  
  switchCam(currentCamera: string) {
    currentCamera = currentCamera === 'A' ? 'B' : 'A';
    this.cameraSubject.next(currentCamera);
  }
  
  constructor() {
    this.camera$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(camera => {
      console.log(`Switched to camera ${camera}`);
    })
  }
  */
  

  ngOnInit() {
    /*
    interval(500).pipe(
      take(20),
      map(value => value),
      tap(currentCamera => console.log(`Tu est sur la caméra de ${currentCamera}`)),
      switchMap(currentCamera$),
      
    ).subscribe();
    /*
    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      mergeMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
    */
  }

  /*
  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }
  
  /*
  logger(text: string) {
    console.log(`Log : ${text}`);
  }
  */
}
