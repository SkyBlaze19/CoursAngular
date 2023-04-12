import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { ModifyFaceSnapComponent } from './modify-face-snap/modify-face-snap.component';
import { AddLocationComponent } from './add-location/add-location.component';

// Tabelau de toutes mes routes
const routes: Routes = [
    { path: 'facesnap/:id', component: SingleFaceSnapComponent},
    { path: 'facesnap/modify/:id', component: ModifyFaceSnapComponent},
    { path: 'facesnap/addLoc/:id', component: AddLocationComponent},
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'create', component: NewFaceSnapComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule {}