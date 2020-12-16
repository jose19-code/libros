import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'autor', loadChildren: () => import('./autores/autores.module').then(m => m.AutoresModule)
      },
      {
        path: 'libro', loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule)
      },
      {
        path: 'lector', loadChildren: () => import('./lectores/lectores.module').then(m => m.LectoresModule)
      },
      {
        path: 'prestamo', loadChildren: () => import('./prestamos/prestamos.module').then(m => m.PrestamosModule)
      },
      {
        path: '**',
        redirectTo: 'autor'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
