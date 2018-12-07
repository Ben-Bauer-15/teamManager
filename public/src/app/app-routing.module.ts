import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { PlayerManagementComponent } from './player-management/player-management.component';
import { PlayerStatusComponent } from './player-status/player-status.component';

const routes: Routes = [
  {path : 'manage', component : PlayerManagementComponent, children : [
    {path : 'addPlayer', component : AddPlayerComponent},
    { path : 'list', component : PlayerListComponent}
  ]},
  {path : 'status', component : PlayerStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
