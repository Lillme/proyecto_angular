import {Component, OnInit} from '@angular/core'
import { zapatos } from '../models/zapatos';

@Component({
    selector : 'zapatos',
    templateUrl: 'zapatos.component.html'
})

export class zapatosComponent implements OnInit{
    public titulo: string = 'Zapatos componente uwu';
    public zapatos:Array<zapatos>;
    public marcas:string[];
    public color:string;
    public mi_marca:string;

    // public marca:string;
    
    constructor(){

        this.zapatos=[ 
            new zapatos("wth","aliodas","red",80,false),
            new zapatos("omaga","kike","blu",75,true),
            new zapatos("bigg","kike","green",700,true),
            new zapatos("yankee","kike","brown",125,false),
            new zapatos("michin","fuma","orange",98,true) ]

            this.marcas = new Array();
            this.color='black';
            this.mi_marca="";

    }

    ngOnInit(): void {
        console.log(this.zapatos);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatos.forEach((zapato, index)=>{
            if(this.marcas.indexOf(zapato.marca)<0){

                this.marcas.push(zapato.marca);
            }
            

        })

        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    delMarca(marca:string){
        
        this.marcas=this.marcas.filter((item)=> {
            return item !== marca;
        })
        

    }

    onBlur(){
        this.addMarca()
    }

    
}