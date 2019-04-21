import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit {
  
  usuarios=["usuario1","usuario2","usuario3","usuario4","usuario5","usuario6"];
  constructor() { }

  ngOnInit() {
  }

}
