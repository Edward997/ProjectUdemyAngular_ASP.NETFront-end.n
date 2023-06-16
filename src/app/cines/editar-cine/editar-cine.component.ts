import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cines';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: cineDTO = {nombre: "Sambil"};
  
  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
