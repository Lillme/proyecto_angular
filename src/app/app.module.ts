import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { videogameComponent } from './videogames/videogame.component';
import { zapatosComponent } from './zapatos/zapatos.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    videogameComponent,
    zapatosComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
