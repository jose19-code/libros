import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PrestamosService} from "../prestamos.service";
import {LectoresService} from "../../../lectores/shared/lectores.service";
import {LibrosService} from "../../../libros/shared/libros.service";

interface DialogData {
  _id: string;
  libro: string;
  lector: string;
  fecha_prestamo: string;
  fecha_devolucion: string;
  estado_devuelto: string;
}

@Component({
  selector: 'app-form-prestamo',
  templateUrl: './form-prestamo.component.html',
  styleUrls: ['./form-prestamo.component.css']
})
export class FormPrestamoComponent implements OnInit {
  lectores: string[];
  libros: string[];

  constructor(public dialogRef: MatDialogRef<FormPrestamoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private prestamosService: PrestamosService, private _snackBar: MatSnackBar, private lectorService: LectoresService, private librosService: LibrosService) {
  }

  ngOnInit(): void {
    this.lectorService.find().subscribe(data => {
      this.lectores = data['data'];
    })

    this.librosService.find().subscribe(data => {
      this.libros = data['data'];
    })
  }

  registrar(): void {
    this.prestamosService.post(this.data).subscribe(data => {
      this._snackBar.open("Se ha registrado el préstamo", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

  actualizar(): void {
    this.prestamosService.update(this.data, this.data._id).subscribe(data => {
      this._snackBar.open("Se ha actualizado el préstamo", "Aceptar", {
        duration: 2000,
      });
    }, error => {
      console.log(error)
    })
    this.dialogRef.close();
  }

}
