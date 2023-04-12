import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})

export class AddLocationComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;

  faceSnapId!: number;

  buttonText!: string;
  format1!: string;
  format2!: string;

  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
              private faceSnapsService: FaceSnapsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.format1 = "dd MMMM yyyy, à HH:MM";
    this.format2 = "dd/MM/yy, à HH:MM";

    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imgUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      altImg: [null, [Validators.required]],
      location: [null], 
      createdDate: [null, [Validators.required]],
      snaps: [null, [Validators.required]],
      id: [null, [Validators.required]],
    }, {
      updateOn: 'blur'
    });

    const faceSnapId = this.route.snapshot.params['id'];
    let test = this.faceSnapsService.getFaceSnapById(faceSnapId).subscribe(faceSnap => {
      this.snapForm.patchValue(faceSnap);
    })
    
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue
      }))
    );
  }

  onSubmitForm() {
    //console.log(this.snapForm.value);
    this.faceSnapsService.modifyFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();

    /*this.faceSnapsService.addNewFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
    */
  }

}
