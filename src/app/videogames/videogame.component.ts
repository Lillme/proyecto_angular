import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'videogame',
    templateUrl: 'videogame.component.html'
})
export class videogameComponent implements OnInit{

    public titulo: string;
    public lista: string;


    constructor(){
        
        this.titulo="pagina angular"

        this.lista="listado de juegos"

        console.log("se ha cargado con exito el componente")
    }

    ngOnInit(): void {

        console.log("OnInit cargado")
        
    }
}