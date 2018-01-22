import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AlteracoesEur } from '../../shared/interfaces/alteracoeseur.interface';
import { Dente } from '../../shared/interfaces/dente.interface';
import { Odontograma } from '../../shared/interfaces/odontograma.interface';

import { trigger, state, style, animate, transition } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  // centerX: string;
  // centerY: string;

  odontograma: Odontograma;

  dentes = [
        {	numero: '102', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '103', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '104', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '105', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '106', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '107', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '108', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '109', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '110', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '201', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '202', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '203', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '204', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '205', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '206', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '207', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '208', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '209', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '210', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '301', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '302', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '303', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '304', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '305', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '306', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '307', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '308', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '309', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '310', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '311', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '401', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '402', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '403', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '404', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '405', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '406', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '407', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '408', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '409', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '410', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente,
        {	numero: '411', desabilitado: false, alteracoes: {} as AlteracoesEur } as Dente
  ];

  
  
  colors = {
      red: "#D33700",//[211, 55, 0], //
      blue: "#04A1E2",//[4, 161, 226], //
      yellow: "#FFD200",//[255, 210, 0], //
      grey: "#CCCCCC",//[204, 204, 204], //
      lightGrey: "#E0E0E0",//[224, 224, 224], //
      lightLightGrey: "#F0F0F0",//[240, 240, 240], //
      purple: "#B598E5",//[181, 152, 229], //
      white: "#FFFFFF",//[255, 255, 255], //
      black: "#000000",//[0, 0, 0], //
      darkBlue: "#0E4993",//[14, 73, 147], //
      orange: "#FF9D02",//[255, 157, 2], //
      green: "#24B48D",//[36, 180, 141], //
      pink: "#961EB0"//[150, 30, 176] //
  };
  
  estiloDente =  {
      ausente: { fill: { bgColor: this.colors.grey, priority: 1 }, innerBorder: { bgColor: this.colors.white, priority: 1 }, border: { borderColor: this.colors.grey, priority: 1 } },	
      deciduo: { innerBorder: { bgColor: this.colors.blue, priority: 2 }, visibility: { basic: true, advanced: { dog: true, cat: false } } }, // ultrapassa a borda interna de ausente, extraido e tratamento, de modo que priority deve ser > 1
      desabilitado: { border: { borderColor: this.colors.lightGrey }, fill: { bgColor: this.colors.lightLightGrey } },
      extraido: { fill: { bgColor: this.colors.purple, priority: 2 }, innerBorder: { bgColor: this.colors.white, priority: 1 }, border: { borderColor: this.colors.purple, priority: 2 }, isAdvanced: false },
      fraturado: { innerBorder: { bgColor: this.colors.red, priority: 4 }, isAdvanced: false },	
      inflamacao: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: false }, // apenas a borda externa, entao priority nao tem importancia
      ortodontia: { innerBorder: { bgColor: this.colors.green, priority: 3 }, isAdvanced: true },
      outro: { shape: { name: "otherShape", type: "rect", centerX: -4, centerY: -4, width: 8, height: 8, bgColor: this.colors.darkBlue, borderWidth: 0, borderColor: null } },
      outroTratamento: { fill: { bgColor: this.colors.pink, priority: 2 }, innerBorder: { bgColor: this.colors.white, priority: 1 }, border: { borderColor: this.colors.pink, priority: 2 }, isAdvanced: true },	
      selecao: { shape: { name: "selectionBox", type: "rect", x: 0, y: 0, right: 0, bottom: 0, borderWidth: 2, borderColor: [1,63,142], borderStyle: "ShortDot", strokeLinecap: 'miter', strokeLinejoin: 'butt' } },
      bifurcacao: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: true },
      doencaperiodontal: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: true },
      estomatite: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: true },
      gengiva: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: true },
      mobilidade: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: true },
      nota: { shape: { name: "otherShape", type: "rect", centerX: -4, centerY: -4, width: 8, height: 8, bgColor: this.colors.darkBlue, borderWidth: 0, borderColor: null } },
      ppd: { outerBorder: { bgColor: this.colors.orange, priority: 1 }, isAdvanced: true },
      reabsorcao: { innerBorder: { bgColor: this.colors.red, priority: 4 }, isAdvanced: true },	
      tipofratura: { innerBorder: { bgColor: this.colors.red, priority: 4 }, isAdvanced: true },	
      tratamento: { innerBorder: { bgColor: this.colors.red, priority: 4 }, isAdvanced: true },	
  };
  

  constructor(public navCtrl: NavController) {
      
  }

  ngOnInit() {
      // let content = document.getElementsByClassName("svg-content")[0];
      // let bbC = content.getBoundingClientRect();
      // let wC = bbC.width;
      // let hC = bbC.height;
      // let lC = bbC.left;
      // let tC = bbC.top;

      // let frente = document.getElementById("frente");
      // let bbF = frente.getBoundingClientRect();
      // let wF = bbF.width;
      // let hF = bbF.height;
      // let lF = bbF.left;
      // let tF = bbF.top;

      // let yScale = hC/hF;

      // console.log(wC);
      // console.log(hC);
      // console.log(lC);
      // console.log(wF);
      // console.log(hF);
      // console.log(lF);

      // this.centerX = Math.floor((wC - wF)/2 - (lF - lC)).toString();
      // this.centerY = Math.floor((hC - hF)/2 - (tF - tC + 50)).toString();

      // frente.setAttribute("x", this.centerX);
      // frente.setAttribute("y", this.centerY);
      
    
  }

}
