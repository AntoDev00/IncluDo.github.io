import { IAzienda, IPartecipante } from './interfaces';

export class Azienda implements IAzienda {
    nome: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];

    constructor(
        nome: string,
        settoreAttivita: string,
        descrizione: string,
        posizioniAperte: string[]
    ) {
        this.nome = nome;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }

    offriPosizione(partecipante: IPartecipante, posizione: string): void {
        if (this.posizioniAperte.includes(posizione)) {
            console.log(`L'azienda ${this.nome} offre la posizione di ${posizione} a ${partecipante.toString()}`);
        } else {
            console.log(`La posizione ${posizione} non è attualmente aperta presso ${this.nome}`);
        }
    }

    toString(): string {
        return `${this.nome} (${this.settoreAttivita})`;
    }
}
