import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrestamosRoutingModule} from './prestamos-routing.module';
import {PrestamosComponent} from "./prestamos.component";
import {FormPrestamoComponent} from "./shared/form-prestamo/form-prestamo.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PrestamosService} from "./shared/prestamos.service";


@NgModule({
  declarations: [PrestamosComponent, FormPrestamoComponent],
  imports: [
    CommonModule,
    PrestamosRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    PrestamosService,
    MatSnackBar
  ]
})
export class PrestamosModule {
}
