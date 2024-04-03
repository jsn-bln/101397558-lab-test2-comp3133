import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';
import { MissionListComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/mission-list', pathMatch: 'full' },
  { path: 'mission-list', component: MissionListComponent },
  { path: 'mission-details/:flightNumber', component: MissionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
