import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Articulo } from '../Modelo/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ServicioArticuloService 
{


  constructor(private http:HttpClient ){ }

  Url="http://localhost:8082/api/articulo";

  getArticulo()
  {
  
    return this.http.get<Articulo[]>(this.Url)
  }
}
