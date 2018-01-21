import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { DenteService } from '../../shared/services/dente.service';

@Component({
  selector: '[app-frente]',
  templateUrl: './frente.component.html',
  animations: [
    trigger('elementState', [
      state('opaco', style({opacity: '1',})),
      state('transparente', style({opacity: '0'})),
      transition('opaco => transparente', animate('100ms linear')),
      transition('transparente => opaco', animate('100ms linear'))
    ])
  ]
})
export class FrenteComponent {
    
    constructor(private denteService: DenteService) {}

    ngOnInit() {
        this.denteService.denteSelecionado.subscribe(tamanho => tamanho === 'normal' ? this.state = 'opaco' : this.state = 'transparente');
    }

    state = 'opaco';
  
    alteraOpacidade() {
        if (this.state === 'opaco') {
            this.state = 'transparente'
        } else {
            this.state = 'opaco';
        }
    }

}
