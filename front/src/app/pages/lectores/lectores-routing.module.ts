import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LectoresComponent} from "./lectores.component";

const routes: Routes = [
  {
    path: '',
    component: LectoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectoresRoutingModule {
}
