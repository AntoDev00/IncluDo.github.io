"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corso = void 0;
class Corso {
    constructor(titolo, descrizione, settoreProfessionale, durata) {
        this.iscritti = [];
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }
    aggiungiPartecipante(partecipante) {
        if (!this.iscritti.includes(partecipante)) {
            this.iscritti.push(partecipante);
        }
    }
    toString() {
        return `${this.titolo} - ${this.settoreProfessionale}`;
    }
}
exports.Corso = Corso;
