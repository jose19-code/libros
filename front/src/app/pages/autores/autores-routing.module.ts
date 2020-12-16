import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutoresComponent} from "./autores.component";

const routes: Routes = [
  {
    path: '',
    component: AutoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
