import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DenteService {

    selecionouDente: EventEmitter<{dente: string, estado: string, posicao: string}>; 

    constructor() {
        this.selecionouDente = new EventEmitter<{dente: string, estado: string, posicao: string}>();
    }
}
