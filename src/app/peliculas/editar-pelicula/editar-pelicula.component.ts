import { Component } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peiliculas';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  modelo: PeliculaDTO = {
    titulo: 'The Amazing Spider-Man',
    resumen: 'cosa',
    enCines: true,
    fechaLanzamiento: new Date(),
    trailer: 'abc',
    poster: 'https://th.bing.com/th/id/R.abbd714dca9b123d4f97eced00350884?rik=gpfiidOOs5THFA&riu=http%3a%2f%2fimages2.wikia.nocookie.net%2f__cb20130216020209%2fmarveldatabase%2fimages%2f0%2f04%2fAmazing_Spider-Man_Film_April_2012_Poster.jpg&ehk=IuEuXsTU%2fje31QbJvparlpRN4TCnT86vxygHnCcGPbo%3d&risl=&pid=ImgRaw&r=0'
  }

  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log(pelicula);
  }
}
