import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  private apiURL = enviroment.apiURL + 'generos';

  public obtenerTodos(): Observable<generoDTO[]>{
    return this.http.get<generoDTO[]>(this.apiURL)
  }

  public crear(genero: generoCreacionDTO){
    return this.http.post(this.apiURL, genero);
  }
}
