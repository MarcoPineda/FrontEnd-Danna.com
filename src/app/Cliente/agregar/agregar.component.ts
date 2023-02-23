import { Component,OnInit } from '@angular/core';
import { ServicioClService } from 'src/app/Servicios/servicio-cl.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit
{  
  
  clientes2:Cliente=new Cliente();

 constructor(private router:Router, private service:ServicioClService)
 {
  
 }

 ngOnInit(): void {
     
 }

 Guardar()
 {
  this.service.createCliente(this.clientes2)
  .subscribe(data =>{
    alert("Cliente agregado con exito.....");
    this.router.navigate(["listar"]);
  });
 }
}
