import {Component, OnInit, ViewChild} from '@angular/core';
import {AutoresService} from "./shared/autores.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {FormAutorComponent} from "./shared/form-autor/form-autor.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  dataSource;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: string;
  nacionalidad: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['nombres', 'apellidos', 'nacionalidad', 'fecha_nacimiento', 'actualizar'];

  constructor(private autoresService: AutoresService, public dialog: MatDialog, private _snackBar: MatSnackBar) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormAutorComponent, {
      width: '250px',
      data: {nombres: '', apellidos: '', fecha_nacimiento: '', nacionalidad: '', _id: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }

  updateData(id: string) {
    this.autoresService.find(id).subscribe(data => {
      const dialogRef = this.dialog.open(FormAutorComponent, {
        width: '250px',
        data: data['data']
      });
      dialogRef.afterClosed().subscribe(result => {
        this.buscar();
      });
    })
  }


  deleteData(id: string) {
    this.autoresService.delete(id).subscribe(() => {
      this._snackBar.open("Se ha eliminado el autor", "Aceptar", {
        duration: 2000,
      });
      this.buscar();
    })
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(): void {
    this.autoresService.find().subscribe(data => {
      this.dataSource = new MatTableDataSource<object>(data['data']);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    })
  }
}
