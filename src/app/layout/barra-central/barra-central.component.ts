import { Component, OnInit,trigger, state, transition, animate, style, keyframes } from '@angular/core';

@Component({
  selector: 'app-barra-central',
  templateUrl: './barra-central.component.html',
  styleUrls: ['barra-central.scss'],
  animations:[
    // coloca a animação apenas onde possuir a diretiva [@menuCentral]="currentState" currentState 
    // ativa ou inativa a animação
    trigger("menuCentral", [
      state('active', style({})),
      transition("inactive => active", [
          animate(1000, keyframes([
              style({ transform: 'rotate(60deg)' }),
              style({ transform: 'scale(2)' }),
              style({ transform: 'scale(1)' }),
          ]))
      ]),
      
  ]),
  ]
})
export class BarraCentralComponent implements OnInit {
  currentState:any;
  constructor() { }

  ngOnInit() {
    this.currentState = "inactive";
    setTimeout(() => {
        this.currentState = "active";
    }, 500);
  }

}
