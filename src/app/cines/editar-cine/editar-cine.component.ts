import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: cineDTO = {nombre: "Sambil", latitud: 19.86054458432284, longitud: -99.909828901290911};
  
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
