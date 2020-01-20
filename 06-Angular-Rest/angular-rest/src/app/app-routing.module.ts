import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RutaInicioComponent} from './rutas/ruta-inicio/ruta-inicio.component';
import {RutaLoginComponent} from './rutas/ruta-login/ruta-login.component';
import {RutaGestionUsuariosComponent} from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import {RutaGestionLibrosComponent} from './rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import {RutaBuscarLibrosComponent} from './rutas/ruta-buscar-libros/ruta-buscar-libros.component';
import {RutaCrearLibrosComponent} from './rutas/ruta-crear-libros/ruta-crear-libros.component';
import {RutaEditarLibrosComponent} from './rutas/ruta-editar-libros/ruta-editar-libros.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: RutaInicioComponent
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'inicio/gestion-usuarios',
    component: RutaGestionUsuariosComponent
  },
  {
    path: 'inicio/gestion-usuarios/:idUsuario/gestion-libros',
    component: RutaGestionLibrosComponent,
    children:[
      {
        path: 'buscar',
        component: RutaBuscarLibrosComponent
      },
      {
        path: 'crear',
        component: RutaCrearLibrosComponent
      },
      {
        path: 'editar/:idLibro',
        component: RutaEditarLibrosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
