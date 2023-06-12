import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  ngOnInit(): void {
      this.peliculasEnCines = [{
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster:'https://www.themoviedb.org/t/p/original/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg'
      },
      {
        titulo: 'Moana',
        fechaLanzamiento: new Date('2016-11-14'),
        precio: 300.99,
        poster: 'https://image.tmdb.org/t/p/original/4yGzhOVqBliZOBZZ4rDKpQoexb.jpg'
      }];
  }
  peliculasEnCines;
  peliculasProximosEstrenos =[];
}
