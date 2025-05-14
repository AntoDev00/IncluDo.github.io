"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partecipante = void 0;
class Partecipante {
    constructor(nome, cognome, paeseOrigine, livelloIstruzione, competenzeLinguistiche, ambitoFormazione) {
        this.corsiIscritto = [];
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoFormazione = ambitoFormazione;
    }
    iscrivitiCorso(corso) {
        if (!this.corsiIscritto.includes(corso)) {
            this.corsiIscritto.push(corso);
            corso.aggiungiPartecipante(this);
        }
    }
    toString() {
        return `${this.nome} ${this.cognome} (${this.paeseOrigine})`;
    }
}
exports.Partecipante = Partecipante;
