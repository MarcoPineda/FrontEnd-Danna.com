import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicioClService} from '../../Servicios/servicio-cl.service';
import { ServicioOrdenService} from '../../Servicios/servicio-orden.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit
{
  clientes:Cliente[]=[];

constructor(private service:ServicioClService,private router:Router){}
ngOnInit()
{
  console.log("linea de ingreso correcta");
this.service.getCliente()
.subscribe(data =>{this.clientes = data;
                  })
}

Editar(cliente:Cliente):void
{
localStorage.setItem("id",cliente.id.toString());
this.router.navigate(["editar"]);
}


EditarOrd(id:number):void
{
localStorage.setItem("id",id.toString());
this.router.navigate(["listar-ord"]);
}


Delete(cliente:Cliente){
  this.service.deleteCliente(cliente)
  .subscribe(data=>{
    this.clientes=this.clientes.filter(p=>p!==cliente);
    alert("Usuario eliminado...");
  })
}

}
