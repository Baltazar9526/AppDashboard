import { Component, OnInit } from '@angular/core';
import { NorthwindComponent } from 'src/app/services/northwind/northwind.component';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {
  constructor(private north: NorthwindComponent) { }
  dataDimension: Label[] = [];
  dataValues: number[] = [];
  customer$: Observable<any[]>;
  selectedCustomer: any = [];
  selectedDimension = null;
  defaultBindingsList = [
    { value: 1, label: 'Cliente' },
    { value: 2, label: 'Producto' },
    { value: 3, label: 'Empleado'}
];

  ngOnInit(): void {
    this.selectedDimension = this.defaultBindingsList[0];
    this.north.getTop5('Cliente', 'DESC').subscribe((result: any)=> {
      this.dataDimension = result.datosDimension;
      this.dataValues = result.datosVenta;
    });
    // this.customer$ = this.north.getCustomers();

  }
  onChangeDimension($event) {
    this.selectedDimension = $event;
    this.north.getTop5(this.selectedDimension.label, 'DESC').subscribe((result: any)=> {
      this.dataDimension = result.datosDimension;
      this.dataValues = result.datosVenta;
    });
  }
  clearModel() {
    this.selectedCustomer = [];
  }
  changeModel() {
    this.selectedCustomer = [{ name: 'New person' }];
  }
}