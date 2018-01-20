import { Defeitos } from './defeitos.interface';

export interface Dente {
    numero?: string;
    desabilitado?: boolean;
    defeitos?: Defeitos;
}