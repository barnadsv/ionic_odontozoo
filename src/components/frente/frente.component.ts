import { Component } from '@angular/core';

//import { trigger, state, style, animate, transition } from '@angular/animations';
import { DenteService } from '../../shared/services/dente.service';
import { TweenLite } from 'gsap';

@Component({
  selector: '[app-frente]',
  templateUrl: './frente.component.html'
})
export class FrenteComponent {

    // @ViewChild('frente') _frente: ElementRef;
    // @Output() onMedidas = new EventEmitter<{centerX: string, centerY: string, scaledHeight: number, scaledWidth: number, containerHeight: number, containerWidth: number}>();

    // centerX: string;
    // centerY: string;

    // scale: number;
    // scaledHeight: number;
    // scaledWidth: number;

    // containerHeight: number;
    containerWidth: number;

    frente: HTMLElement;
    // frenteHeight: number;
    frenteWidth: number;

    // frenteElement: any;
    
    constructor(private denteService: DenteService) {}

    ngOnInit() {

        this.centralizaImagem();

        this.denteService.denteSelecionado.subscribe((acao) => this.alteraLocalizacao(acao));
    }

    centralizaImagem() {
        let container = document.getElementsByClassName("svg-content")[0];
        let bcrC = container.getBoundingClientRect();
        // let wC = bcrC.width;
        this.containerWidth = bcrC.width;
        // let hC = bcrC.height;
        // this.containerHeight = bcrC.height;
        // let lC = bcrC.left;
        // let tC = bcrC.top;

        this.frente = document.getElementById("frente");
        // this.frenteElement = this._frente.nativeElement;
        let bcrF = this.frente.getBoundingClientRect();
        // let wF = bcrF.width;
        this.frenteWidth = bcrF.width;
        // let hF = bcrF.height;
        // this.frenteHeight = bcrF.height;
        // let lF = bcrF.left;
        // let tF = bcrF.top;

        // this.scaledWidth = hC/hF * wF;
        
        // let rawScale = hC/hF;
        // let rawFator = rawScale / 0.1;
        // let fator = Math.floor(rawFator);
        // this.scale = fator * 0.1;

        // this.scaledHeight = hF * this.scale;
        
        // console.log("container");
        // console.log(wC);
        // console.log(hC);
        // console.log(lC);
        // console.log(tC);
        // console.log("frente");
        // console.log(wF);
        // console.log(hF);
        // console.log(lF);
        // console.log(tF);
        
        // console.log("frente scaled");
        // console.log(this.scale);
        // console.log(this.scaledWidth);
        // console.log(this.scaledHeight);

        // this.centerX = lF.toString();
        // this.centerY = tF.toString();

        // this.onMedidas.emit(
        //     {
        //         centerX: this.centerX, 
        //         centerY: this.centerY, 
        //         scaledHeight: this.scaledHeight, 
        //         scaledWidth: this.scaledWidth, 
        //         containerHeight: this.containerHeight, 
        //         containerWidth: this.containerWidth
        //     }
        // );

        
    }

    alteraLocalizacao(acao) {

        if (acao.estado === 'nao-selecionado') {
            TweenLite.to(this.frente, 1, {attr: {x: 0}});
        } else {
            // let novaPosicao = acao.posicao === 'direita' ? 
            //     (-1 * (this.containerWidth / this.frenteWidth * 100 * 1.045) - 5).toString() :
            //      (this.containerWidth / this.frenteWidth * 100 * 1.045).toString();
            let novaPosicao = acao.posicao === 'direita' ? 
                 (-1 * (this.containerWidth / this.frenteWidth * 100) - 5).toString() :
                  (this.containerWidth / this.frenteWidth * 100).toString();
            TweenLite.to(this.frente, 1, {attr: {x: parseInt(novaPosicao)}});
        }
    }

}
