import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LectoresService} from "../lectores.service";

interface DialogData {
  _id: string;
  nombres: string;
  apellidos: string;
  identificacion: string;
  domicilio: string
}

@Component({
  selector: 'app-form-lector',
  templateUrl: './form-lector.component.html',
  styleUrls: ['./form-lector.component.css']
})
export class FormLectorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormLectorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private lectoresService: LectoresService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {

  }

  registrar(): void {
    this.lectoresService.post(this.data).subscribe(data => {
      this._snackBar.open("Se ha registrado el lector", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

  actualizar(): void {
    this.lectoresService.update(this.data, this.data._id).subscribe(data => {
      this._snackBar.open("Se ha actualizado el lector", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

}
