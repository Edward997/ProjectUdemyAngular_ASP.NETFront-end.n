import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';
import { GenerosService } from '../generos.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent  {
  errores: string[] = [];

  constructor(private router: Router, private generosService: GenerosService) { }
  
  guardarCambios(genero: generoCreacionDTO){
    // ... guardar los cambios
    this.generosService.crear(genero).subscribe(()=> {
      this.router.navigate(['/generos']);
    }, 
    error => this.errores = parsearErroresAPI(error)
    );
  }

  
}
