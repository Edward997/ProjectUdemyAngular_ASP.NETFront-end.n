import { Component, EventEmitter, Input, Output } from '@angular/core';
import { 
  tileLayer, 
  latLng, 
  LeafletMouseEvent, 
  Marker, 
  marker, 
  icon
} from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  @Input()
  coordenadasIniciales: Coordenada[] = [];

  @Output()
  coordenadaSelelccionada: EventEmitter<Coordenada> = new EventEmitter<Coordenada>();

  ngOnInit(): void{
    this.capas = this.coordenadasIniciales.map(valor => marker([valor.latitud, valor.longitud]));
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(19.863571768300243, -99.91489291191102)
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud})

    this.capas = [];
    this.capas.push(marker([latitud, longitud], {
      icon: icon({
        iconSize: [25,41],
        iconAnchor: [13, 41],
        iconUrl: 'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'

      })
    }));
    this.coordenadaSelelccionada.emit({latitud: latitud, longitud: longitud});
  }
}
