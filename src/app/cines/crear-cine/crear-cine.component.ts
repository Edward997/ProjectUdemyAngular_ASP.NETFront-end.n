import { Component } from '@angular/core';
import { cineCreacionDTO } from '../cines';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent {

  errores: string[] = [];

  constructor(private router: Router, private cinesService: CineService) {}

  guardarCambios(cine: cineCreacionDTO) {
    this.cinesService.crear(cine).subscribe(
      () => {
        this.router.navigate(['/cines']);
      },
      (error) => this.errores = parsearErroresAPI(error)
    );
  }
}