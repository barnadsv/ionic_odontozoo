import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { DenteService } from '../../../shared/services/dente.service';

@Component({
  selector: '[app-dente101]',
  templateUrl: './dente101.component.html',
  animations: [
    trigger('elementState', [
      state('normal', style({transform: 'scale(1)', 'transform-origin': 'center'})),
      state('aumentado125', style({transform: 'scale(1.25)', 'transform-origin': 'center'})),
      state('aumentado150', style({transform: 'scale(1.5)', 'transform-origin': 'center'})),
      state('aumentado200', style({transform: 'scale(2)', 'transform-origin': 'center'})),
      transition('normal => aumentado125', animate('100ms ease-in')),
      transition('normal => aumentado150', animate('100ms ease-in')),
      transition('normal => aumentado200', animate('100ms ease-in')),
      transition('aumentado125 => normal', animate('100ms ease-out')),
      transition('aumentado150 => normal', animate('100ms ease-out')),
      transition('aumentado200 => normal', animate('100ms ease-out'))
    ])
  ]
})
export class Dente101Component {
    
    constructor(private denteService: DenteService) {}

    ngOnInit() {
        
    }

    state = 'normal';
  
    selecionaDente(event) {
        console.log('chegou');
        let dente = event.target;
        let bbox = dente.getBBox();
        let minSize = Math.min(bbox.width, bbox.height);
        if (this.state === 'normal') {
            this.state = (minSize < 15) ? ((minSize < 10) ? 'aumentado200' : 'aumentado150') : 'aumentado125';
            this.denteService.denteSelecionado.emit('aumentadoEsquerda');
        } else {
            this.state = 'normal';
            this.denteService.denteSelecionado.emit('normal');
        }
        
    }

}