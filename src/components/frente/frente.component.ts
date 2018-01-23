import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
    @Output() onMedidas = new EventEmitter<{centerX: string, centerY: string, scaledHeight: number, scaledWidth: number, contentHeight: number, contentWidth: number}>();

    centerX: string;
    centerY: string;

    scale: number;
    scaledHeight: number;
    scaledWidth: number;

    contentHeight: number;
    contentWidth: number;

    frente: HTMLElement;
    frenteHeight: number;
    frenteWidth: number;

    frenteElement: any;
    
    constructor(private denteService: DenteService) {}

    ngOnInit() {

        this.centralizaImagem();

        this.denteService.denteSelecionado.subscribe((acao) => this.alteraLocalizacao(acao));
    }

    centralizaImagem() {
        let content = document.getElementsByClassName("svg-content")[0];
        let bbC = content.getBoundingClientRect();
        let wC = bbC.width;
        this.contentWidth = bbC.width;
        let hC = bbC.height;
        this.contentHeight = bbC.height;
        let lC = bbC.left;
        let tC = bbC.top;

        this.frente = document.getElementById("frente");
        this.frenteElement = this._frente.nativeElement;
        let bbF = this.frente.getBoundingClientRect();
        let wF = bbF.width;
        this.frenteWidth = bbF.width;
        let hF = bbF.height;
        this.frenteHeight = bbF.height;
        let lF = bbF.left;
        let tF = bbF.top;

        // let bbbF = this.frente.getBBox();
        // console.log("frente bbox");
        

        this.scaledWidth = hC/hF * wF;
        // console.log("scaled width: " + scaledWidth);

        let rawScale = (hC - 50)/hF;
        if (rawScale < 1) {
            this.scale = rawScale;
        } else {
            let rawFator = rawScale / 0.1;
            let fator = Math.floor(rawFator);
            this.scale = fator * 0.1;
        }

        this.scaledHeight = hF * this.scale;
        // console.log("scaled height: "+ scaledHeight);

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
        
        console.log("scaled");
        console.log(this.scale);
        console.log(this.scaledWidth);
        console.log(this.scaledHeight);

        this.centerX = lF.toString();
        this.centerY = tF.toString();

        //this.centerX = Math.floor((wC - scaledWidth)/2 - (lF - lC)).toString();
        // if (hC > hF) {
        //     this.centerX = Math.floor((wC - wF)/2 - (lF - lC)).toString();
        // } else {
        //     this.centerX = Math.floor((wC - this.scaledWidth)/2 - (lF - lC) + lC).toString();
        // }

        // //this.centerY = Math.floor((hC - 50 - hF)/2 - (tF - tC)).toString();
        // //this.centerY = Math.floor((hC - this.scaledHeight - 50)/2 - (tF - tC)).toString();
        // this.centerY = ((hC - this.scaledHeight)/2).toString();
        // this.centerY ="0";
        console.log("centerX: " + this.centerX);
        console.log("centerY: " + this.centerY);

        //TweenLite.to(this.frenteElement, 0.1, { scale: this.scale, transformOrigin: "50% 50%" })
        //TweenLite.to(frente, 0.1, { transform: { scale: this.scale, transformOrigin: "50% 50%" }})
        //TweenLite.to(frente, 0.1, { transform: { width: this.scaledWidth, height: scaledHeight }})
        //TweenLite.to(frente, 0.1, { attr: { viewBox: "0 0 "+ this.scaledWidth + " " + this.scaledHeight }})
        //TweenLite.to(this.frente, 0.1, { scale: this.scale })
        //TweenLite.to(this.frenteElement, 0.1, { scale: this.scale })
        
        //this.frente.style.transform = "scale(" + this.scale.toString()  + ")";
            
        // this.frente.setAttribute("x", this.centerX);
        // //TweenLite.to(this.frenteElement, 0.1, {x: parseInt(this.centerX)});
        // if (hC > hF) {
        //     this.frente.setAttribute("y", this.centerY);
        //     //TweenLite.to(this.frenteElement, 0.1, {y: parseInt(this.centerY)});
        // }
        // //frente.setAttribute("y", this.centerY);

        this.onMedidas.emit(
            {
                centerX: this.centerX, 
                centerY: this.centerY, 
                scaledHeight: this.scaledHeight, 
                scaledWidth: this.scaledWidth, 
                contentHeight: this.contentHeight, 
                contentWidth: this.contentWidth
            }
        );

        
    }

    state = 'centroo';
  
    alteraLocalizacao(acao) {

        if (acao.estado === 'nao-selecionado') {
            //this.frente.setAttribute("x", this.centerX);
            TweenLite.to(this.frente, 1, {attr: {x: 0}});
            //TweenLite.to(this.frente, 1, {x: parseInt(this.centerX)});

            //TweenLite.to(this.frenteElement, 0.1, {x: parseInt(this.centerX)});
            // if (this.contentHeight > this.frenteHeight) {
            //     //this.frente.setAttribute("y", this.centerY);
            //     TweenLite.to(this.frenteElement, 0.1, {y: parseInt(this.centerY)});
            // }

            //TweenLite.to(this.frenteElement, 0.1, { autoAlpha: 1 });

            // TweenLite.to(this.frente, 0.8, { autoAlpha: 1 })

            //this.state = 'centro';  
        } else {
            //this.frente.setAttribute("x", (parseInt(this.centerX) + 100).toString());
            // this.frente.setAttribute("x", (this.contentWidth - acao.x - 20).toString());

            let novaPosicao = acao.posicao === 'direita' ? (-1 * ((this.contentWidth - this.frenteWidth)/2 + parseInt(this.centerX))).toString() : (this.contentWidth - this.frenteWidth).toString();
            //this.frente.setAttribute("x", novaPosicao);

            TweenLite.to(this.frente, 1, {attr: {x: parseInt(novaPosicao)}});
            //TweenLite.to(this.frente, 1, {x: parseInt(novaPosicao)});
            
            //this.frente.setAttribute("x", (this.contentWidth - this.scaledWidth/2 + 10).toString());
            //this.frente.setAttribute("x", (-this.scaledWidth/2 + 20).toString()); // Este aqui é para os dentes do lado direito

            console.log("container width: " + this.contentWidth);
            console.log("frente width: " + this.frenteWidth);
            console.log("scaled width: " + this.scaledWidth);
            
            //TweenLite.to(this.frenteElement, 0.1, {x: parseInt(this.centerX) + 100});
            //TweenLite.to(this.frenteElement, 0.1, { autoAlpha: 0.3 });

            // TweenLite.to(this.frente, 0.8, { autoAlpha: 0.1 })

            // if (tamanho === 'aumentadoEsquerda') {
            //     this.state = 'direita';
            // } else {
            //     this.state = 'esquerda';
            // }
        }
    }

}
