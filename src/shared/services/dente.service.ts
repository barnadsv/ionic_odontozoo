import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DenteService {

    selecionouDente: EventEmitter<{dente: string, estado: string, posicao: string}>; 
    capturouMedidas: EventEmitter<{x: number, y: number, left: number, scale: number, scaledHeight: number, scaledWidth: number, containerHeight: number, containerWidth: number}>;


    constructor() {
        this.selecionouDente = new EventEmitter<{dente: string, estado: string, posicao: string}>();
        this.capturouMedidas = new EventEmitter<{x: number, y: number, left: number, scale: number, scaledHeight: number, scaledWidth: number, containerHeight: number, containerWidth: number}>();

    }
}
