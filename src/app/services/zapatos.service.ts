import { Injectable } from "@angular/core";


@Injectable();

export class zapatosService{
    constructor(){
        this.Zapatos=[
            new zapatos("wth","aliodas","red",80,false),
            new zapatos("omaga","kike","blu",75,true),
            new zapatos("bigg","kike","green",700,true),
            new zapatos("yankee","kike","brown",125,false),
            new zapatos("michin","fuma","orange",98,true) ]


        ]


    }
}