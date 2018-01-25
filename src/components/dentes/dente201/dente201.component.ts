import { Component, ViewChild, ElementRef } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { DenteService } from '../../../shared/services/dente.service';

@Component({
  selector: '[app-dente201]',
  templateUrl: './dente201.component.html',
  animations: [
    trigger('elementState', [
      state('normal', style({transform: 'scale(1)', 'transform-origin': 'center'})),
      state('aumentado125', style({transform: 'scale(1.25)', 'transform-origin': 'center', opacity: 1})),
      state('aumentado150', style({transform: 'scale(1.5)', 'transform-origin': 'center', opacity: 1})),
      state('aumentado200', style({transform: 'scale(2)', 'transform-origin': 'center', opacity: 1})),
      transition('normal => aumentado125', animate('1000ms linear')),
      transition('normal => aumentado150', animate('1000ms linear')),
      transition('normal => aumentado200', animate('1000ms linear')),
      transition('aumentado125 => normal', animate('1000ms linear')),
      transition('aumentado150 => normal', animate('1000ms linear')),
      transition('aumentado200 => normal', animate('1000ms linear'))
    ])
  ]
})
export class Dente201Component {

    denteSelecionado: string;

    @ViewChild('innerFill') innerFill: ElementRef;
    @ViewChild('innerBorder') innerBorder: ElementRef;
    @ViewChild('outerFill') outerFill: ElementRef;
    @ViewChild('outerBorder') outerBorder: ElementRef;
    
    constructor(private denteService: DenteService) {
        this.denteSelecionado = '';
        this.denteService.selecionouDente.subscribe(acao => this.denteSelecionado = acao.estado === 'selecionado' ? acao.dente : '');
    }

    ngOnInit() {}

    state = 'normal';
  
    selecionaDente(event) {
        
        if (this.state === 'normal') {
            if (this.denteSelecionado === '') {
                let dente = event.target;
                let bbox = dente.getBBox();
                let minSize = Math.min(bbox.width, bbox.height);
                this.state = (minSize < 15) ? ((minSize < 10) ? 'aumentado200' : 'aumentado150') : 'aumentado125';
                this.denteService.selecionouDente.emit({dente: '201', estado: 'selecionado', posicao: 'direita'});
            }
        } else {
            if (this.denteSelecionado === '201') { // Esta condicao deve acontecer sempre pra selecao unica
                this.state = 'normal';
                this.denteService.selecionouDente.emit({dente: '201', estado: 'nao-selecionado', posicao: 'direita'});
            }
        }
        
    }
    

}