import { Component, OnInit, trigger, state, transition, animate, style, keyframes } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-central',
  templateUrl: './barra-central.component.html',
  styleUrls: ['barra-central.scss'],
  animations: [
    // coloca a animação apenas onde possuir a diretiva [@menuCentral]='currentState' currentState 
    // ativa ou inativa a animação
    trigger('menuCentral', [
      state('inactive', style({
        marginLeft: '-200%',
        opacity: '0',
        transition: '5s'
      })),
      transition('inactive => active', [
        animate(4000, keyframes([
          style({
            opacity: '1',
            marginLeft: '0px'
          })
        ]))
      ]),
    ]),
  ]
})
export class BarraCentralComponent implements OnInit {
  currentState: any;
  constructor(public router: Router) { }

  ngOnInit() {
    this.currentState = 'inactive';
    setTimeout(() => {
      this.currentState = 'active';
    }, 500);
  }

}
