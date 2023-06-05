import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  
  peliculas;
  ngOnInit(): void {
    this.peliculas = [{
      titulo: 'Spider Man',
      fechaLanzamiento: new Date(),
      precio: 1400.99
    },
    {
      titulo: 'Moana',
      fechaLanzamiento: new Date('2016-11-14'),
      precio: 300.99
    }]
  }

}
