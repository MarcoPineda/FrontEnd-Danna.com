import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miTienda';
  constructor(private router:Router)
  {

  }
  Listar()
  {
    this.router.navigate(["listar"]);
  }

  ListarArt()
  {
    this.router.navigate(["listar-art"]);
  }
  Nuevo()
  {
    this.router.navigate(["agregar"]);
  }
  Editar()
  {
    this.router.navigate(["editar"]);
  }

  ListarOrd()
  {
    this.router.navigate(["listar-ord"]);
  }
}
