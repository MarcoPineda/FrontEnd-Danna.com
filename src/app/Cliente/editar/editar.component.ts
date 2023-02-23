import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioClService } from 'src/app/Servicios/servicio-cl.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente222 :Cliente=new Cliente();

  constructor(private router:Router,private service:ServicioClService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id:any=localStorage.getItem("id");
    this.service.getClienteId(+id)
    .subscribe(data=>{
      this.cliente222=data;
    })

  }
  Actualizar(cliente:Cliente){
    this.service.updateCliente(cliente)
    .subscribe(data=>{
      this.cliente222=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}