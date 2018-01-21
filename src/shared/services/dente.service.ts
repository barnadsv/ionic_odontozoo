import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DenteService {

    denteSelecionado: EventEmitter<string>;

    constructor() {
        this.denteSelecionado = new EventEmitter<string>();
    }
}
