import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['inicial.scss'],
  animations:[
    trigger("divs", [
      state('active', style({})),
      transition("inactive => active", [
          animate(1000, keyframes([
              style({ transform: 'rotate(360deg)' }),
          ]))
      ]),
  ]),
  ]
})
export class InicialComponent implements OnInit {

  currentState: any;
  constructor() { }

  ngOnInit() {
    this.currentState = "inactive";
    setTimeout(() => {
        this.currentState = "active";
    }, 500);
  }

}
