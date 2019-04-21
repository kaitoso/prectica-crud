import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from "../environments/environment";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseUno } from './Componente-uno/uno.component';
import { HolamundoComponent } from './holamundo/holamundo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/productos/lista-productos/lista-productos.component';
import { ProductoComponent } from './componentes/productos/producto/producto.component';
import { ProductoService } from "./services/producto.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ClaseUno,
    HolamundoComponent,
    UsuariosComponent,
    ProductosComponent,
    ListaProductosComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
