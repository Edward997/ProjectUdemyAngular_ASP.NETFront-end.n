import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent {

  control: FormControl = new FormControl();
  actores = [
    {nombre: 'Tom Holland', personaje:'', foto:'https://th.bing.com/th/id/OIP.CpW_kEsyGV-XwnrY0goVkAHaJt?pid=ImgDet&rs=1'},
    {nombre: 'Tom Hanks', personaje:'', foto:'https://static.accessonline.com/uploads/195164.jpg'},
    {nombre: 'Tom hiddleston', personaje:'', foto:'https://th.bing.com/th/id/R.66d61c0759bfde189665b49fefb4e651?rik=w9x2Un7ARGr6JA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fmclHxMm8aPlCPKptP67257F5GPo.jpg&ehk=b%2f8%2bDqKDVqMNVtM2yJUHZDmIoqwGsBjfviysXYhgYIE%3d&risl=&pid=ImgRaw&r=0'}
  ];

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor =>{
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizarArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(
      actor => actor === event.item.data
    )
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }
}

