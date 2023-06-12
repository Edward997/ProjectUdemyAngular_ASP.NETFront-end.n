import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent {
  
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id);
    })
  }
}
