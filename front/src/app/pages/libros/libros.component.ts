import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {LibrosService} from "./shared/libros.service";
import {FormLibroComponent} from "./shared/form-libro/form-libro.component";

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  dataSource;
  codigo: string;
  nombre: string;
  autor: string;
  editorial: string;
  fecha_edicion: string;
  numero_paginas: string;
  genero: string;
  cantidad_disponible: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = [
    'codigo',
    'nombre',
    'autor',
    'editorial',
    'fecha_edicion',
    'numero_paginas',
    'genero',
    'cantidad_disponible',
    'actualizar'
  ];

  constructor(private librosService: LibrosService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormLibroComponent, {
      width: '250px',
      data: {
        codigo: '',
        nombre: '',
        autor: '',
        editorial: '',
        fecha_edicion: '',
        numero_paginas: '',
        genero: '',
        cantidad_disponible: '',
        _id: ''
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }

  updateData(id: string) {
    this.librosService.find(id).subscribe(data => {
      const dialogRef = this.dialog.open(FormLibroComponent, {
        width: '250px',
        data: data['data']
      });
      dialogRef.afterClosed().subscribe(result => {
        this.buscar();
      });
    })
  }


  deleteData(id: string) {
    this.librosService.delete(id).subscribe(() => {
      this._snackBar.open("Se ha eliminado el libro", "Aceptar", {
        duration: 2000,
      });
      this.buscar();
    })
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(): void {
    this.librosService.find().subscribe(data => {
      this.dataSource = new MatTableDataSource<object>(data['data']);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    })
  }

}
