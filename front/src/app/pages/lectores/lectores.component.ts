import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {FormLectorComponent} from "./shared/form-lector/form-lector.component";
import {LectoresService} from "./shared/lectores.service";

@Component({
  selector: 'app-lectores',
  templateUrl: './lectores.component.html',
  styleUrls: ['./lectores.component.css']
})
export class LectoresComponent implements OnInit {
  dataSource;
  nombres: string;
  apellidos: string;
  identificacion: string;
  domicilio: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['nombres', 'apellidos', 'identificacion', 'domicilio', 'actualizar'];

  constructor(private lectoresService: LectoresService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormLectorComponent, {
      width: '250px',
      data: {nombres: '', apellidos: '', identificacion: '', domicilio: '', _id: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }

  updateData(id: string) {
    this.lectoresService.find(id).subscribe(data => {
      const dialogRef = this.dialog.open(FormLectorComponent, {
        width: '250px',
        data: data['data']
      });
      dialogRef.afterClosed().subscribe(result => {
        this.buscar();
      });
    })
  }


  deleteData(id: string) {
    this.lectoresService.delete(id).subscribe(() => {
      this._snackBar.open("Se ha eliminado el lector", "Aceptar", {
        duration: 2000,
      });
      this.buscar();
    })
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(): void {
    this.lectoresService.find().subscribe(data => {
      this.dataSource = new MatTableDataSource<object>(data['data']);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    })
  }

}
