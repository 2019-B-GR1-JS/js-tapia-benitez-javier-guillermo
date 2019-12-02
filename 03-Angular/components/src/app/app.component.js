var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component } from '@angular/core';
export let AppComponent = class {
    constructor() {
        this.title = 'components';
        this.arregloObjetos = [
            {
                id: 1,
                "nombre": "Javier",
                apellido: 'Tapia',
                sueldo: 12.12,
                casado: false,
                comida: "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 2,
                "nombre": "Nicole",
                apellido: 'Pirca',
                sueldo: 312.35,
                casado: false,
                comida: "https://ryukoch.com/images/food-blog/kimbap-t.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 3,
                "nombre": "Lilly",
                apellido: 'Aviles',
                sueldo: 290.78,
                casado: true,
                comida: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7klP9MGPGSN3qdzNbyea_5eSvcqe7aySFQUw06orwJ0MLOXl-Q&s",
                carro: null,
                ojos: undefined,
            }
        ];
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
