import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/environments/environment';
import { PeliculaPostGet } from './peiliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  private apiURL = enviroment.apiURL + 'peliculas';
  public postGet(): Observable<PeliculaPostGet>{
    return this.http.get<PeliculaPostGet>(`${this.apiURL}/postget`)
  }
}
