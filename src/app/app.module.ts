import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarComponent } from './Cliente/listar/listar.component';
import { ListarArtComponent } from './Articulo/listar-art/listar-art.component';
//listar cliente
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ServicioClService} from '../app/Servicios/servicio-cl.service'
import { ServicioArticuloService} from '../app/Servicios/servicio-articulo.service';
import { ServicioOrdenService} from "../app/Servicios/servicio-orden.service";

//admninbistracion de orden
import { ListarOrdComponent } from './Orden/listar-ord/listar-ord.component';
import { AgregarOrdComponent } from './Orden/agregar-ord/agregar-ord.component';
import { EditarOrdComponent } from './Orden/editar-ord/editar-ord.component'


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    //Articulos
    ListarArtComponent,
    
    //ordenes
    ListarOrdComponent,
    AgregarOrdComponent,
    EditarOrdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServicioClService,ServicioArticuloService,ServicioOrdenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
