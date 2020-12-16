import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LectoresRoutingModule} from './lectores-routing.module';
import {LectoresComponent} from "./lectores.component";
import {FormLectorComponent} from "./shared/form-lector/form-lector.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {LectoresService} from "./shared/lectores.service";
import {MatSnackBar} from "@angular/material/snack-bar";


@NgModule({
  declarations: [LectoresComponent, FormLectorComponent],
  imports: [
    CommonModule,
    LectoresRoutingModule,
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
    LectoresService,
    MatSnackBar
  ]
})
export class LectoresModule {
}
