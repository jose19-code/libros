import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LibrosComponent} from "./libros.component";

const routes: Routes = [
  {
    path: '',
    component: LibrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule {
}
