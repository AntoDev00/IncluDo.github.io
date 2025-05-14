"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partecipante_1 = require("./partecipante");
const corso_1 = require("./corso");
const azienda_1 = require("./azienda");
// Creazione partecipanti
const partecipante1 = new partecipante_1.Partecipante('Ahmed', 'Mohammed', 'Egitto', 'Laurea', ['Arabo', 'Inglese'], 'Artigianato');
const partecipante2 = new partecipante_1.Partecipante('Fatima', 'Al-Sayed', 'Siria', 'Diploma', ['Arabo', 'Francese'], 'Cucina');
// Creazione corsi
const corsoArtigianato = new corso_1.Corso('Artigianato Tradizionale', 'Corso di formazione per l\'apprendimento delle tecniche artigianali locali', 'Artigianato', 6);
const corsoCucina = new corso_1.Corso('Cucina Tradizionale', 'Corso di formazione per l\'apprendimento della cucina locale', 'Ristorazione', 4);
// Creazione azienda
const bottegaArtigiana = new azienda_1.Azienda('Bottega del Maestro', 'Artigianato', 'Bottega specializzata in lavorazioni artigianali tradizionali', ['Apprendista Artigiano', 'Artigiano Junior']);
// Iscrizione partecipanti ai corsi
partecipante1.iscrivitiCorso(corsoArtigianato);
partecipante2.iscrivitiCorso(corsoCucina);
// Offerta posizioni lavorative
bottegaArtigiana.offriPosizione(partecipante1, 'Apprendista Artigiano');
bottegaArtigiana.offriPosizione(partecipante2, 'Artigiano Junior');
// Stampa informazioni
console.log('\nPartecipanti iscritti ai corsi:');
console.log(`${partecipante1.toString()} - Corsi: ${partecipante1.corsiIscritto.map(c => c.toString()).join(', ')}`);
console.log(`${partecipante2.toString()} - Corsi: ${partecipante2.corsiIscritto.map(c => c.toString()).join(', ')}`);
console.log('\nIscritti ai corsi:');
console.log(`${corsoArtigianato.toString()} - Iscritti: ${corsoArtigianato.iscritti.map(p => p.toString()).join(', ')}`);
console.log(`${corsoCucina.toString()} - Iscritti: ${corsoCucina.iscritti.map(p => p.toString()).join(', ')}`);
