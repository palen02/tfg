import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';



@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
