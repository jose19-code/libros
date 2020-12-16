import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AutoresRoutingModule} from './autores-routing.module';
import {AutoresComponent} from "./autores.component";
import {AutoresService} from "./shared/autores.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {FormAutorComponent} from './shared/form-autor/form-autor.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";


@NgModule({
  declarations: [AutoresComponent, FormAutorComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
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
    AutoresService,
    MatSnackBar
  ]
})
export class AutoresModule {
}
