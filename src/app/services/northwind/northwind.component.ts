import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_API = environment.API.EndPoint.Northwind;

@Component({
  selector: 'app-northwind',
  templateUrl: './northwind.component.html',
  styleUrls: ['./northwind.component.css']
})
export class NorthwindComponent implements OnInit {

  datosAPI: any;

  constructor(private http: HttpClient) {

  }

  getTop5(dimension: String, orden: String){
    return this.http.get(`${URL_API}Top5/${dimension}/${orden}`);
  }

  getSerieHistorica(){
    // return this.http.get(`${URL_API}Top5/${dimension}/${orden}`)
  }

  getCustumers(){
    return this.http.get(`./assets/json/clientes.json`);
  }

  ngOnInit(): void {
  }

}
