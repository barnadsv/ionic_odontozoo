import { Dente } from './dente.interface';

export interface Odontograma {
    id?: string;
    idAnimal?: string;
    dataCriacao?: any;
    dataUltimaAtualizacao?: any;
    filhote?: boolean;
    dentes?: Dente[];
}
