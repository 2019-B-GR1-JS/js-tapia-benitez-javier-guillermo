import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FILAS} from './constantes/numero-filas-por-tabla';
import {MatDialog} from '@angular/material';
import {ModalEditarUsuarioComponent} from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {UsuarioRestService} from './services/rest/usuario-rest.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
//
//
// /Inicio -> Componente
// /Login -> Componente
// /Gestion de Usuarios -> Componente
//    /Gestion de libros -> Componente
