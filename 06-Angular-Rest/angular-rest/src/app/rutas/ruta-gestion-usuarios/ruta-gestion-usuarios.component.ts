import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {UsuarioRestService} from '../../services/rest/usuario-rest.service';
import { FILAS } from 'src/app/constantes/numero-filas-por-tabla';
import { ModalEditarUsuarioComponent } from 'src/app/modales/modal-editar-usuario/modal-editar-usuario.component';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';
  busquedaUsuario = '';

  // INYECCION DE DEPENDENCIAS
  // DEPENDENCIAS -> Servicios!
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _matDialog: MatDialog,
    private readonly _usuarioRestService: UsuarioRestService
  ) {
    // CASI NUNCA HACER CONFIGURACIONES
  }

  ngOnInit(): void {
    // http://localhost:1337 + /usuario

    // CORS ->
    // http://localhost:4200 -> http://localhost:1337
    const urlUsuarios = this.url + '/usuario';
    // $ -> Observable
    const usuarios$ = this._httpClient.get(
      urlUsuarios
    );
    usuarios$
      .subscribe(
        (usuarios: any[]) => { // TRY
          console.log('Usuarios: ', usuarios);
          this.usuarios = usuarios;
        },
        (error) => { // CATCH
          console.error({
            error: error,
            mensaje: 'Error consultando usuarios'
          });
        }
      );
  }

  editar(usuario) {
    // console.log('Editando usuario', usuario);
    const matDialogRefModalEditarUsuario = this._matDialog
      .open(
        ModalEditarUsuarioComponent,
        {
          width: '500px',
          data: {
            usuario,
          }
        }
      );
    const respuestaDialogo$ = matDialogRefModalEditarUsuario
      .afterClosed();

    respuestaDialogo$
      .subscribe(
        (datos) => { // try
          console.log('Datos', datos);
          if (datos) {
            this.editarUsuarioHTTP(usuario.id, datos);
          } else {

          }
        },
        (error) => { //catch
          console.log('Error', error);
        }
      );
  }

  editarUsuarioHTTP(id: number, datos) {
    const usuarioEditado$ = this._usuarioRestService
      .editar(id, datos);
    usuarioEditado$
      .subscribe(
        (usuarioEditado: any) => {
          console.log(usuarioEditado);
          const indice = this.usuarios.findIndex(
            (usuario) => {
              return usuario.id === id;
            }
          );
          this.usuarios[indice].nombre = datos.nombre;
          this.usuarios[indice].apellido = datos.apellido;
          this.usuarios[indice].correo = datos.correo;
          this.usuarios[indice].password = datos.password;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  eliminar(usuario) {
    const usuarioEliminado$ = this._usuarioRestService
      .eliminar(usuario.id);
    usuarioEliminado$
      .subscribe(
        (usuarioEliminado) => {
          console.log(usuarioEliminado);
          const indice = this.usuarios
            .findIndex(
              (usuarioBuscado) => {
                return usuarioBuscado.id === usuario.id;
              }
            );
          this.usuarios.splice(indice,1);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  usuariosFiltrados() {
    return this.usuarios.filter(
      (usuario) => {
        return usuario.nombre.includes(this.nombreFiltrado)
          && usuario.apellido.includes(this.apellidoFiltrado)
          && usuario.correo.includes(this.correoFiltrado)
          && usuario.password.includes(this.passwordFiltrado);
      }
    );
  }

  buscarUsuarioPorNombre() {
    const busqueda$ = this._usuarioRestService
      .buscar(this.busquedaUsuario);
    busqueda$
      .subscribe(
        (usuarios) => { // OK - TRY
          this.usuarios = usuarios;
        },
        (error) => { // ERROR - CATCH
          console.log(error);
        }
      );
  }

}
