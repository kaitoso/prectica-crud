import {Component} from '@angular/core'; //importamos componente desde angular core

@Component({ //le decimos a angular que esta clase será un componente
    selector: 'uno',   //nombre del la etiqueta en html que luego llamaremos desde app.component.html
    templateUrl: './uno.component.html', //llamamos archivo html donde se ejecuta el codigo del componente
    styleUrls: ['./uno.component.css'] //llamamos el codigo css que utilizará el componente
})
export class ClaseUno {
    variable = "Prueba numero 1"; //se crea variable string
} //exportamos la clase