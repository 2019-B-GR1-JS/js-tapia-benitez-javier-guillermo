import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

  @Input()
  public titulo: string;

  @Input()
  public imagen: string;

  @Input()
  public textoImagen: string;

  @Input() // Atributo Propiedad
  public textoBoton: string;

  @Input() // Atributo Propiedad
  public tamanoImagen: string;

  @Output() // EVENTO
  public cambioSueldo = new EventEmitter();

  @Output() // EVENTO
  public cambioTamaño = new EventEmitter();

  constructor() {
    console.log('Instanciando');
    this.tamanoImagen = "200px";
  } // Instancia la clase (Ayuda -> Angular)

  ngOnInit() {
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  } // La clase está lista

  ngOnDestroy(): void {
  } // La clase está destruida

  saludar() {
    alert("HOLAAAAAAAAAA");
  }

  aumentoSueldo() {
    //this.textoBoton = this.textoBoton + 1;
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
  }

}

// class (etiqueta html) (web-component)
// Instanciar a la clase
// Clase esta lista
// Clase se destruye

