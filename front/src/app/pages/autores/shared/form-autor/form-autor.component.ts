import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AutoresService} from "../autores.service";
import {MatSnackBar} from "@angular/material/snack-bar";

interface DialogData {
  _id: string;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: string;
  nacionalidad: string
}

@Component({
  selector: 'app-form-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.css']
})

export class FormAutorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormAutorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private autoresService: AutoresService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  registrar(): void {
    this.autoresService.post(this.data).subscribe(data => {
      this._snackBar.open("Se ha registrado el autor", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

  actualizar(): void {
    this.autoresService.update(this.data, this.data._id).subscribe(data => {
      this._snackBar.open("Se ha actualizado el autor", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

}
