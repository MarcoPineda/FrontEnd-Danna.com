import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicioArticuloService} from '../../Servicios/servicio-articulo.service'
import { Articulo } from 'src/app/Modelo/Articulo';

@Component({
  selector: 'app-listar-art',
  templateUrl: './listar-art.component.html',
  styleUrls: ['./listar-art.component.css']
})
export class ListarArtComponent implements OnInit
{
  articulos:Articulo[]=[];

constructor(private service:ServicioArticuloService,private router:Router){}
ngOnInit()
{
  console.log("linea de ingreso correcta");
this.service.getArticulo()
.subscribe(data =>{this.articulos = data;
                  })
}

}

