import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(public router: Router) { }

  ngOnInit() {
    this.currentState = "inactive";
    setTimeout(() => {
        this.currentState = "active";
    }, 500);
  }

}
