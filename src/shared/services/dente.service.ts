import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DenteService {

    denteSelecionado: EventEmitter<{dente: string, estado: string, posicao: string}>;

    constructor() {
        this.denteSelecionado = new EventEmitter<{dente: string, estado: string, posicao: string}>();
    }
}
