import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components';
  arregloObjetos = [
    {
      id: 1, // number
      "nombre": "Javier", // string
      apellido: 'Tapia', // string
      sueldo: 12.12, // number
      casado: false, // boolean
      comida: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg", //
      carro: null,
      ojos: undefined,
    },
    {
      id: 2, // number
      "nombre": "Nicole", // string
      apellido: 'Pirca', // string
      sueldo: 312.35, // number
      casado: false, // boolean
      comida: "https://ryukoch.com/images/food-blog/kimbap-t.jpg", //
      carro: null,
      ojos: undefined,
    },
    {
      id: 3, // number
      "nombre": "Lilly", // string
      apellido: 'Aviles', // string
      sueldo: 290.78, // number
      casado: true, // boolean
      comida: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7klP9MGPGSN3qdzNbyea_5eSvcqe7aySFQUw06orwJ0MLOXl-Q&s", //
      carro: null,
      ojos: undefined,
    }
  ]

  imprimirSueldo(sueldo: string) {
    console.log(sueldo);
  }
}
