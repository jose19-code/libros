import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatTableDataSource} from "@angular/material/table";
import {PrestamosService} from "./shared/prestamos.service";
import {FormPrestamoComponent} from "./shared/form-prestamo/form-prestamo.component";


@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  dataSource: MatTableDataSource<object>;
  libro: string;
  lector: string;
  fecha_prestamo: string;
  fecha_devolucion: string;
  estado_devuelto: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = [
    'libro',
    'lector',
    'fecha_prestamo',
    'fecha_devolucion',
    'estado_devuelto',
    'actualizar'
  ];

  constructor(private prestamosService: PrestamosService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormPrestamoComponent, {
      width: '250px',
      data: {
        libro: '',
        lector: '',
        fecha_prestamo: '',
        fecha_devolucion: '',
        estado_devuelto: '',
        _id: ''
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.buscar();
    });
  }

  updateData(id: string) {
    this.prestamosService.find(id).subscribe(data => {
      const dialogRef = this.dialog.open(FormPrestamoComponent, {
        width: '250px',
        data: data['data']
      });
      dialogRef.afterClosed().subscribe(result => {
        this.buscar();
      });
    })
  }


  deleteData(id: string) {
    this.prestamosService.delete(id).subscribe(() => {
      this._snackBar.open("Se ha eliminado el préstamo", "Aceptar", {
        duration: 2000,
      });
      this.buscar();
    })
  }

  ngOnInit(): void {
    this.buscar();
  }

  buscar(): void {
    this.prestamosService.find().subscribe(data => {
      this.dataSource = new MatTableDataSource(data['data']);
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log(error);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
