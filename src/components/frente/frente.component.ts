import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

//import { trigger, state, style, animate, transition } from '@angular/animations';
import { DenteService } from '../../shared/services/dente.service';
import { TweenLite } from 'gsap';

@Component({
  selector: '[app-frente]',
  templateUrl: './frente.component.html'
})
export class FrenteComponent {

    @ViewChild('frente') frente: ElementRef;
    @Output() onMedidas = new EventEmitter<{x: number, y: number, left: number, scaledHeight: number, scaledWidth: number, containerHeight: number, containerWidth: number}>();

    x: number;
    y: number;
    left: number;

    scale: number;
    scaledHeight: number;
    scaledWidth: number;

    containerHeight: number;
    containerWidth: number;

    // frente: HTMLElement;
    frenteHeight: number;
    frenteWidth: number;

    frenteElement: any;
    
    constructor(private denteService: DenteService) {
        this.denteService.selecionouDente.subscribe((acao) => this.alteraLocalizacao(acao));
    }

    ngOnInit() {
        this.iniciaImagem();
        this.centralizaImagem(0.1);      
    }

    iniciaImagem() {
        let containerElement = document.getElementsByClassName("svg-content")[0];
        let bcrC = containerElement.getBoundingClientRect();
        this.containerWidth = bcrC.width;
        this.containerHeight = bcrC.height - 60; // 56 eh a altura da barra inferior com os tabs -- Acho que eh por isso, pois os valores coincidem!
        let bbC = (containerElement as SVGGraphicsElement).getBBox();
        this.left = bbC.x;
        this.y = bbC.y;
        
        this.frenteElement = this.frente.nativeElement;
        let bbF = (this.frenteElement as SVGGraphicsElement).getBBox();
        console.log(bbF);
        this.frenteWidth = bbF.width;
        this.frenteHeight = bbF.height;

        this.scale = this.containerHeight/this.frenteHeight;
        this.scaledWidth = this.scale * this.frenteWidth;
        this.scaledHeight = this.scale * this.frenteHeight;

        this.x = this.containerWidth/2 - this.scaledWidth/2 - this.left; 

        this.denteService.capturouMedidas.emit({
            x: this.x, 
            y: this.y, 
            left: this.left,
            scale: this.scale,
            scaledHeight: this.scaledHeight, 
            scaledWidth: this.scaledWidth, 
            containerHeight: this.containerHeight, 
            containerWidth: this.containerWidth
        });

        this.onMedidas.emit(
            {
                x: this.x, 
                y: this.y, 
                left: this.left,
                scaledHeight: this.scaledHeight, 
                scaledWidth: this.scaledWidth, 
                containerHeight: this.containerHeight, 
                containerWidth: this.containerWidth
            }
        );

        console.log("container");
        console.log((containerElement as SVGGraphicsElement).getBBox());
        console.log(bcrC);
        console.log(this.containerWidth);
        console.log(this.containerHeight);
        console.log(this.left);
        console.log("frente");
        console.log((this.frenteElement as SVGGraphicsElement).getBBox());
        console.log(this.frenteElement.getBoundingClientRect());
        console.log(this.frenteWidth);
        console.log(this.frenteHeight);
        console.log("frente scaled");
        console.log(this.scale);
        console.log(this.scaledWidth);
        console.log(this.scaledHeight);

    }

    centralizaImagem(duracao) {
        
        TweenLite.to(this.frenteElement, duracao, { scale: this.scale, x: this.x });

        

        
    }

    alteraLocalizacao(acao) {

        

        if (acao.estado === 'nao-selecionado') {
            TweenLite.to(this.frenteElement, 1, {x: this.x});
        } else {
            // let novaPosicao = acao.posicao === 'direita' ? 
            //     (-1 * (this.containerWidth / this.frenteWidth * 100 * 1.045) - 5).toString() :
            //      (this.containerWidth / this.frenteWidth * 100 * 1.045).toString();
            let novaPosicao = acao.posicao === 'direita' ? 
                 -1 * (this.scaledWidth/2 + this.left) + 5 :
                  this.containerWidth - this.scaledWidth/2 - this.left - 5;
            TweenLite.to(this.frenteElement, 1, { scale: this.scale, x: this.x });
            TweenLite.to(this.frenteElement, 1, {x: novaPosicao});
        }
    }

    

}
