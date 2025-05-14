import { ICorso, IPartecipante } from './interfaces';

export class Corso implements ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    iscritti: IPartecipante[] = [];

    constructor(
        titolo: string,
        descrizione: string,
        settoreProfessionale: string,
        durata: number
    ) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }

    aggiungiPartecipante(partecipante: IPartecipante): void {
        if (!this.iscritti.includes(partecipante)) {
            this.iscritti.push(partecipante);
        }
    }

    toString(): string {
        return `${this.titolo} - ${this.settoreProfessionale}`;
    }
}
