import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
//import { DenteService } from '../../shared/services/dente.service';

@Component({
  selector: 'app-frente-form',
  templateUrl: './frente-form.component.html',
  animations: [
    trigger('elementState', [
      state('normal', style({transform: 'scale(1)', 'transform-origin': 'center'})),
      state('aumentado125', style({transform: 'scale(1.25)', 'transform-origin': 'center'})),
      state('aumentado150', style({transform: 'scale(1.5)', 'transform-origin': 'center'})),
      state('aumentado200', style({transform: 'scale(2)', 'transform-origin': 'center'})),
      transition('normal => aumentado125', animate('300ms linear')),
      transition('normal => aumentado150', animate('300ms linear')),
      transition('normal => aumentado200', animate('300ms linear')),
      transition('aumentado125 => normal', animate('300ms linear')),
      transition('aumentado150 => normal', animate('300ms linear')),
      transition('aumentado200 => normal', animate('300ms linear'))
    ])
  ]
})
export class FrenteFormComponent {
 
    constructor(/*private denteService: DenteService*/) {}

    ngOnInit() {
        
    }

}