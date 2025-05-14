"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Azienda = void 0;
class Azienda {
    constructor(nome, settoreAttivita, descrizione, posizioniAperte) {
        this.nome = nome;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }
    offriPosizione(partecipante, posizione) {
        if (this.posizioniAperte.includes(posizione)) {
            console.log(`L'azienda ${this.nome} offre la posizione di ${posizione} a ${partecipante.toString()}`);
        }
        else {
            console.log(`La posizione ${posizione} non è attualmente aperta presso ${this.nome}`);
        }
    }
    toString() {
        return `${this.nome} (${this.settoreAttivita})`;
    }
}
exports.Azienda = Azienda;
