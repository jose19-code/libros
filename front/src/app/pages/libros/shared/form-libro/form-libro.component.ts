import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LibrosService} from "../libros.service";
import {AutoresService} from "../../../autores/shared/autores.service";

interface DialogData {
  _id: string;
  codigo: string;
  nombre: string;
  autor: string;
  editorial: string;
  fecha_edicion: string;
  numero_paginas: string;
  genero: string;
  cantidad_disponible: string;
}

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent implements OnInit {
  autores: string[];

  constructor(public dialogRef: MatDialogRef<FormLibroComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private librosService: LibrosService, private autoresService: AutoresService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.autoresService.find().subscribe(data => {
      this.autores = data['data'];
    })
  }

  registrar(): void {
    this.librosService.post(this.data).subscribe(data => {
      this._snackBar.open("Se ha registrado el libro", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

  actualizar(): void {
    this.librosService.update(this.data, this.data._id).subscribe(data => {
      this._snackBar.open("Se ha actualizado el libro", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

}
