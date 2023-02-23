import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orden } from '../Modelo/Orden';

@Injectable({
  providedIn: 'root'
})
export class ServicioOrdenService 
{


  constructor(private http:HttpClient ){ }

  Url="http://localhost:8082/api/cliente";

  getOrden()
  {
  
    return this.http.get<Orden[]>(this.Url)
  }
  createOrden(orden1:Orden)
  {
   return this.http.post<Orden>(this.Url,orden1)
  }

  getOrdenId(id:number)
  {
    return this.http.get<Orden>(this.Url+"/"+id);
  }
  
  updateOrden(orden1:Orden)
  {
    return this.http.put<Orden>(this.Url+"/"+orden1.id,orden1);
  }

  deleteOrden(orden1:Orden)
  {
    return this.http.delete<Orden>(this.Url+"/"+orden1.id);
  }
}