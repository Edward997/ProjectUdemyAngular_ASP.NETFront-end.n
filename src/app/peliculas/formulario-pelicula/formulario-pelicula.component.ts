import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peiliculas';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModelo';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent {

  constructor( private formbuilder: FormBuilder){ }

  form: FormGroup

  @Input()
  modelo: PeliculaDTO;
  
  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO> = new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[] = [
    {llave: 1, valor:'Drama'},
    {llave: 2, valor:'Accion'},
    {llave: 3, valor:'Comedia'}
  ];

  generosSeleccionados: MultipleSelectorModel[] =[];

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      titulo: [
        '',
        {
        validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }

  guardarCambios(){
    console.log(this.generosSeleccionados);
    const generosIds = this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosId').setValue(generosIds);
    this.OnSubmit.emit(this.form.value);
  }

}
