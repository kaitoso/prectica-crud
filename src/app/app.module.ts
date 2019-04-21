import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseUno } from './Componente-uno/uno.component';
import { HolamundoComponent } from './holamundo/holamundo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaseUno,
    HolamundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
