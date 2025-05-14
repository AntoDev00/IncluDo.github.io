import { IPartecipante, ICorso } from './interfaces';

export class Partecipante implements IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    ambitoFormazione: string;
    corsiIscritto: ICorso[] = [];

    constructor(
        nome: string,
        cognome: string,
        paeseOrigine: string,
        livelloIstruzione: string,
        competenzeLinguistiche: string[],
        ambitoFormazione: string
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }

    iscrivitiCorso(corso: ICorso): void {
        if (!this.corsiIscritto.includes(corso)) {
            this.corsiIscritto.push(corso);
            corso.aggiungiPartecipante(this);
        }
    }

    toString(): string {
        return `${this.nome} ${this.cognome} (${this.paeseOrigine})`;
    }
}
