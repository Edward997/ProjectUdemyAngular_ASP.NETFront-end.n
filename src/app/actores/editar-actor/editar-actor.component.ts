import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent {
  
  constructor(private activatedRoute: ActivatedRoute){}

  modelo: actorDTO = {nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://th.bing.com/th/id/OIP.RLNgzR2SlOP2aNVlFx5B4QHaIu?w=186&h=219&c=7&r=0&o=5&pid=1.7'}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);
  }

}
