import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { Defeitos } from '../../shared/interfaces/defeitos.interface';
import { Dente } from '../../shared/interfaces/dente.interface';
import { Odontograma } from '../../shared/interfaces/odontograma.interface';

import { trigger, state, style, animate, transition } from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  animations: [
    trigger('elementState', [
      state('normal', style({transform: 'scale(1)'})),
      state('aumentado125', style({transform: 'scale(1.25)'})),
      state('aumentado150', style({transform: 'scale(1.5)'})),
      state('aumentado200', style({transform: 'scale(2)'})),
      transition('normal => aumentado125', animate('4000ms ease-in')),
      transition('normal => aumentado150', animate('4000ms ease-in')),
      transition('normal => aumentado200', animate('4000ms ease-in')),
      transition('aumentado125 => normal', animate('4000ms ease-out')),
      transition('aumentado150 => normal', animate('4000ms ease-out')),
      transition('aumentado200 => normal', animate('4000ms ease-out'))
    ])
  ]
})
export class AboutPage {

  state = 'normal';
  
  selecionaDente(event) {
    console.log('chegou');
    let dente = event.target;
    let bbox = dente.getBBox();
    let minSize = Math.min(bbox.width, bbox.height);
    this.state = (minSize < 15) ? ((minSize < 10) ? 'aumentado200' : 'aumentado150') : 'aumentado125';
  }

  odontograma: Odontograma;

  dentes = [
        {	numero: '102', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '103', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '104', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '105', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '106', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '107', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '108', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '109', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '110', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '201', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '202', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '203', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '204', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '205', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '206', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '207', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '208', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '209', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '210', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '301', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '302', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '303', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '304', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '305', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '306', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '307', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '308', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '309', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '310', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '311', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '401', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '402', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '403', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '404', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '405', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '406', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '407', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '408', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '409', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '410', desabilitado: false, defeitos: {} as Defeitos } as Dente,
        {	numero: '411', desabilitado: false, defeitos: {} as Defeitos } as Dente
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

}
