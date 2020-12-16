import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LibrosRoutingModule} from './libros-routing.module';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LibrosService} from "./shared/libros.service";
import {LibrosComponent} from "./libros.component";
import {FormLibroComponent} from "./shared/form-libro/form-libro.component";


@NgModule({
  declarations: [LibrosComponent, FormLibroComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
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
    LibrosService,
    MatSnackBar
  ]
})
export class LibrosModule {
}
