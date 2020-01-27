// Servicio es un SINGLETON
// -> Solo 1 instancia del SERVICIO
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroRestService {
  // Inyeccion de dependencias
  url = environment.url + '/libro';

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

  buscar(busqueda: string): Observable<any> {
    let consulta = '';
    if (busqueda){
      consulta = '?' + busqueda;
    }
    const urlBuscar = this.url + consulta;
    return this._httpClient
      .get(
        urlBuscar
      );
  }

  eliminar(id: number): Observable<any> {
    const urlEliminar = this.url + '/' + id;
    return this._httpClient
      .delete(
        urlEliminar
      );
  }
}
