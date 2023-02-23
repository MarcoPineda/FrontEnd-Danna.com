import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Cliente/agregar/agregar.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { ListarComponent } from './Cliente/listar/listar.component';
//Articulo
import { AgregarArtComponent } from './Articulo/agregar-art/agregar-art.component';
import { EditarArtComponent } from './Articulo/editar-art/editar-art.component';
import { ListarArtComponent } from './Articulo/listar-art/listar-art.component';
//ordenes
import { ListarOrdComponent } from './Orden/listar-ord/listar-ord.component';
import { AgregarOrdComponent} from './Orden/agregar-ord/agregar-ord.component';
import { EditarOrdComponent} from './Orden/editar-ord/editar-ord.component';



const routes: Routes = 
[
  {path:'listar',component:ListarComponent},
  {path:'editar',component:EditarComponent},
  {path:'agregar',component:AgregarComponent},
  //Articulo
  {path:'listar-art',component:ListarArtComponent},
  {path:'editar-art',component:EditarArtComponent},
  {path:'agregar-art',component:AgregarArtComponent},
  //orden
  {path:'listar-ord',component:ListarOrdComponent},
  {path:'agregar-ord',component:AgregarOrdComponent},
  {path:'editar-ord',component:EditarOrdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
