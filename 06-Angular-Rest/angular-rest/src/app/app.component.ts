import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FILAS} from './constantes/numero-filas-por-tabla';
import {MatDialog} from '@angular/material';
import {ModalEditarUsuarioComponent} from './modales/modal-editar-usuario/modal-editar-usuario.component';
import {UsuarioRestService} from './services/rest/usuario-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rest';
  url = 'http://localhost:1337';
  usuarios = [];
  FILAS = FILAS;
  nombreFiltrado = '';
  apellidoFiltrado = '';
  correoFiltrado = '';
  passwordFiltrado = '';

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
          this.usuarios[indice].nombre=datos.nombre;
          this.usuarios[indice].apellido=datos.apellido;
          this.usuarios[indice].correo=datos.correo;
          this.usuarios[indice].password=datos.password;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  eliminar(usuario) {
    console.log('Eliminado usuario', usuario);
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
}
