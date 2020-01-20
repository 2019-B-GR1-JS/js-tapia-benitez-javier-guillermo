import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UsuarioRestService} from './services/rest/usuario-rest.service';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {ModalEditarUsuarioComponent} from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionLibrosComponent } from './rutas/ruta-gestion-libros/ruta-gestion-libros.component';
import { RutaBuscarLibrosComponent } from './rutas/ruta-buscar-libros/ruta-buscar-libros.component';
import { RutaCrearLibrosComponent } from './rutas/ruta-crear-libros/ruta-crear-libros.component';
import { RutaEditarLibrosComponent } from './rutas/ruta-editar-libros/ruta-editar-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalEditarUsuarioComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaGestionUsuariosComponent,
    RutaGestionLibrosComponent,
    RutaBuscarLibrosComponent,
    RutaCrearLibrosComponent,
    RutaEditarLibrosComponent
  ],
  entryComponents: [
    ModalEditarUsuarioComponent
  ],
  imports: [
    BrowserModule, // -> Directivas
    // ngFor ng If
    AppRoutingModule,
    FormsModule, // -> Formularios
    HttpClientModule, // -> HTTP
    ButtonModule,
    TableModule,
    InputTextModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [
    UsuarioRestService
  ], // Servicio
  bootstrap: [AppComponent]
})
export class AppModule {
}
