import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { zapatosComponent } from './zapatos/zapatos.component';
import { videogameComponent } from './videogames/videogame.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'zapatos',component:zapatosComponent},
  {path:'videogames',component:videogameComponent},
  {path:'cursos',component:CursosComponent},

  {path:'',component:HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

