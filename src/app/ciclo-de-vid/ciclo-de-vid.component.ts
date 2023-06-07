import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-de-vid',
  templateUrl: './ciclo-de-vid.component.html',
  styleUrls: ['./ciclo-de-vid.component.css']
})
export class CicloDeVidComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef){ }

  @Input()
  titulo: string;

  @ViewChild(RatingComponent)
  raitingComponenet: RatingComponent;

  timer: ReturnType<typeof setInterval>;

  ngOnChanges(changes: SimpleChanges): void{
    console.log('on changes');
  }
  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('do check');
  }
  ngAfterViewInit(): void {
    console.log('after view init');
    this.raitingComponenet.ratingSeleccionado = 3;
    this.changeDetectorRef.detectChanges();
  }
  ngOnInit(): void {
    console.log('on init');
    this.timer = setInterval(() => console.log(new Date()), 1000);
  }
}


