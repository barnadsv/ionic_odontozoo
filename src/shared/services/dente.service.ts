import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DenteService {

    denteSelecionado: EventEmitter<{estado: string, posicao: string}>;

    constructor() {
        this.denteSelecionado = new EventEmitter<{estado: string, posicao: string}>();
    }
}
