import { Component, ViewChild, ElementRef } from '@angular/core';
//import 'gsap';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { DenteService } from '../../shared/services/dente.service';
import { TweenLite } from 'gsap';

@Component({
  selector: '[app-frente]',
  templateUrl: './frente.component.html',
  animations: [
    trigger('elementState', [
        state('centro', style({opacity: 1, transform: 'translate(0, 0)', 'transform-origin': 'center'})),
        state('direita', style({opacity: 0.5, transform: 'translateX(87%)', 'transform-origin': 'center'})),
        state('esquerda', style({opacity: 0.5, transform: 'translateX(-87%)', 'transform-origin': 'center'})),
        transition('centro => *', animate('100ms linear')),
        transition('* => centro', animate('100ms linear'))
    ])
  ]
})
export class FrenteComponent {

    @ViewChild('frente') _frente: ElementRef;

    public centerX: string;
    public centerY: string;
    scale: number;
    
    constructor(private denteService: DenteService) {}

    ngOnInit() {

        let content = document.getElementsByClassName("svg-content")[0];
        let bbC = content.getBoundingClientRect();
        let wC = bbC.width;
        let hC = bbC.height;
        let lC = bbC.left;
        let tC = bbC.top;

        let frente = document.getElementById("frente");
        //let frenteHash = this._frente.nativeElement;
        let bbF = frente.getBoundingClientRect();
        let wF = bbF.width;
        let hF = bbF.height;
        let lF = bbF.left;
        let tF = bbF.top;

        let scaledWidth = hC/hF * wF;
        console.log("scaled width: " + scaledWidth);

        let rawScale = (hC - 50)/hF;
        if (rawScale < 1) {
            this.scale = rawScale;
        } else {
            let rawFator = rawScale / 0.5;
            let fator = Math.floor(rawFator);
            this.scale = fator * 0.5;
        }

        let scaledHeight = hF * this.scale;
        console.log("scaled height: "+ scaledHeight);

        console.log("content");
        console.log(wC);
        console.log(hC);
        console.log(lC);
        console.log(tC);
        console.log("frente");
        console.log(wF);
        console.log(hF);
        console.log(lF);
        console.log(tF);

        //this.centerX = Math.floor((wC - scaledWidth)/2 - (lF - lC)).toString();
        if (hC > hF) {
            this.centerX = Math.floor((wC - wF)/2 - (lF - lC)).toString();
        } else {
            this.centerX = Math.floor((wC - scaledWidth)/2 - (lF - lC) + lC).toString();
        }
        //this.centerX = Math.floor((wC - wF)/2 - (lF - lC)).toString();
        //this.centerY = Math.floor((hC - 50 - hF)/2 - (tF - tC)).toString();
        this.centerY = Math.floor((hC - scaledHeight - 50)/2 - (tF - tC)).toString();
        console.log("centerX: "+ this.centerX);
        console.log("centerY: "+ this.centerY);

        

        // let tl = TweenLite;
        // let tween = tl
        //     .to(this._frente.nativeElement, 0.1, { scale: this.scale })

        TweenLite.to(this._frente.nativeElement, 0.1, { scale: this.scale })
            
        frente.setAttribute("x", this.centerX);
        //frente.setAttribute("x", "0");
        if (hC > hF) {
            frente.setAttribute("y", this.centerY);
        }
        //frente.setAttribute("y", this.centerY);

        //this.denteService.denteSelecionado.subscribe(tamanho => this.alteraLocalizacao(tamanho));
    }

    state = 'centroo';
  
    alteraLocalizacao(tamanho: string) {

        if (tamanho === 'normal') {
            this.state = 'centro';
        } else {
            if (tamanho === 'aumentadoEsquerda') {
                this.state = 'direita';
            } else {
                this.state = 'esquerda';
            }
        }
    }

}
