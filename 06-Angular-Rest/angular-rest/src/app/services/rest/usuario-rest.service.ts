// Servicio es un SINGLETON
// -> Solo 1 instancia del SERVICIO
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService {
  // Inyeccion de dependencias
  url = environment.url + '/usuario';

  constructor(
    // public readonly httpClient: HttpClient, // Servicio -> http
    private readonly _httpClient: HttpClient, // Servicio -> http
  ) {

  }

  editar(id: number, datos): Observable<any> {
    const urlEditar = this.url + '/' + id;
    return this._httpClient
      .put(
        urlEditar,
        datos
      );
  }
}
