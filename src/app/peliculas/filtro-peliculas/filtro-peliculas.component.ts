import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent {
 
  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup
  
  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Miedo'},
    {id: 3, nombre: 'Comedia'},
  ];

  peliculas =[
    {titulo: 'Spider-Man: Far From Fome', enCines: false, proximosEstrenos: true, generos:[1,3], poster: 'https://www.themoviedb.org/t/p/original/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg'},
    {titulo: 'Moana', enCines: true, proximosEstrenos: false, generos:[3], poster: 'https://image.tmdb.org/t/p/original/4yGzhOVqBliZOBZZ4rDKpQoexb.jpg'},
    {titulo: 'Interestelar', enCines: false, proximosEstrenos: false, generos:[1,2], poster: 'https://th.bing.com/th/id/OIP.8A707ygGKj_-MsgM-gOchgHaKe?pid=ImgDet&rs=1'}
  ]

  peliculasOriginal = this.peliculas;

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  };

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.formularioOriginal);

    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas = this.peliculasOriginal;
        this.buscarPeliculas(valores);
      })
  }

  buscarPeliculas(valores: any){
    if (valores.titulo){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1);
    }

    if(valores.generoId !==0){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoId) !== -1);
    }

    if (valores.proximosEstrenos){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos);
    }

    if (valores.enCines){
      this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
