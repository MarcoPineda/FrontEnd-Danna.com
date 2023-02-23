import { Component ,OnInit } from '@angular/core';
import { Articulo } from 'src/app/Modelo/Articulo';
import { Cliente } from 'src/app/Modelo/Cliente';
import { Route, Router } from '@angular/router';
import { ServicioClService} from '../../Servicios/servicio-cl.service';
import { ServicioOrdenService} from '../../Servicios/servicio-orden.service';
import { ServicioArticuloService} from '../../Servicios/servicio-articulo.service';
import { Orden } from 'src/app/Modelo/Orden';

@Component({
  selector: 'app-listar-ord',
  templateUrl: './listar-ord.component.html',
  styleUrls: ['./listar-ord.component.css']
})
export class ListarOrdComponent implements OnInit
{
  clienteloc:Cliente= new Cliente;
  articuloLoc:Articulo=new Articulo;
  ordenLoc:Orden=new Orden;
  
  clienteEx :Cliente[]=[];
  articuloEx:Articulo[]=[];
  ordenIn:Orden[]=[];

  constructor(
              private service:ServicioClService,
              private serviceArt:ServicioArticuloService,
              private serviceOrd:ServicioOrdenService,
              private router:Router){}

ngOnInit()
{
this.service.getCliente()
.subscribe(data =>{this.clienteEx = data;
                  });
this.serviceArt.getArticulo()
.subscribe(data =>{this.articuloEx = data;
                  });
this.serviceOrd.getOrden()
.subscribe(data =>{this.ordenIn = data;
                  })
}

  Actualizar(cliente:Cliente)
  {
  
  }


}
