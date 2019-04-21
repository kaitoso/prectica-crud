import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Producto} from '../models/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listaProductos: AngularFireList<any>;
  selectedProducto: Producto= new Producto;

  constructor(private firebase: AngularFireDatabase) {

   }

   getProducto(){
     this.listaProductos = this.firebase.list('productos');
   }

   insertProducto(producto: Producto){

    this.listaProductos.push({
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      precio: producto.precio
    });

   }

   updateProducto(producto: Producto){

    this.listaProductos.update(producto.id, {
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      precio: producto.precio
    });

   }

   deleteProducto(id: string){
     this.listaProductos.remove(id);
   }
}
