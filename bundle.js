// File bundle.js - Versione consolidata senza import/export

// Classe Partecipante
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

// Classe Corso
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

// Classe Azienda
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
            return `L'azienda ${this.nome} offre la posizione di ${posizione} a ${partecipante.toString()}`;
        } else {
            console.log(`La posizione ${posizione} non è attualmente aperta presso ${this.nome}`);
            return `La posizione ${posizione} non è attualmente aperta presso ${this.nome}`;
        }
    }
    
    toString() {
        return `${this.nome} (${this.settoreAttivita})`;
    }
}

// Codice di inizializzazione - verrà eseguito quando la pagina si carica
document.addEventListener('DOMContentLoaded', function() {
    // Creiamo le istanze
    const partecipante1 = new Partecipante(
        'Ahmed',
        'Mohammed',
        'Egitto',
        'Laurea',
        ['Arabo', 'Inglese'],
        'Artigianato'
    );

    const corsoArtigianato = new Corso(
        'Artigianato Tradizionale',
        'Corso di formazione per l\'apprendimento delle tecniche artigianali locali',
        'Artigianato',
        6
    );

    const bottegaArtigiana = new Azienda(
        'Bottega del Maestro',
        'Artigianato',
        'Bottega specializzata in lavorazioni artigianali tradizionali',
        ['Apprendista Artigiano', 'Artigiano Junior']
    );

    // Iscriviamo il partecipante al corso
    partecipante1.iscrivitiCorso(corsoArtigianato);

    // Offriamo una posizione
    const risultatoOfferta = bottegaArtigiana.offriPosizione(partecipante1, 'Apprendista Artigiano');

    // Visualizziamo i dati nella pagina
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `
        <h1>IncluDO - Sistema di Formazione</h1>
        <div class="section">
            <h2>Partecipante</h2>
            <p><strong>Nome:</strong> ${partecipante1.nome} ${partecipante1.cognome}</p>
            <p><strong>Paese di origine:</strong> ${partecipante1.paeseOrigine}</p>
            <p><strong>Livello di istruzione:</strong> ${partecipante1.livelloIstruzione}</p>
            <p><strong>Competenze linguistiche:</strong> ${partecipante1.competenzeLinguistiche.join(', ')}</p>
            <p><strong>Ambito di formazione:</strong> ${partecipante1.ambitoFormazione}</p>
        </div>
        
        <div class="section">
            <h2>Corso</h2>
            <p><strong>Titolo:</strong> ${corsoArtigianato.titolo}</p>
            <p><strong>Descrizione:</strong> ${corsoArtigianato.descrizione}</p>
            <p><strong>Settore professionale:</strong> ${corsoArtigianato.settoreProfessionale}</p>
            <p><strong>Durata (mesi):</strong> ${corsoArtigianato.durata}</p>
            <p><strong>Iscritti:</strong> ${corsoArtigianato.iscritti.map(p => p.toString()).join(', ')}</p>
        </div>
        
        <div class="section">
            <h2>Azienda</h2>
            <p><strong>Nome:</strong> ${bottegaArtigiana.nome}</p>
            <p><strong>Settore di attività:</strong> ${bottegaArtigiana.settoreAttivita}</p>
            <p><strong>Descrizione:</strong> ${bottegaArtigiana.descrizione}</p>
            <p><strong>Posizioni aperte:</strong> ${bottegaArtigiana.posizioniAperte.join(', ')}</p>
        </div>
        
        <div class="result">
            <p>${risultatoOfferta}</p>
        </div>
    `;
    
    // Stampa anche nella console per debug
    console.log('Partecipante:', partecipante1);
    console.log('Corso:', corsoArtigianato);
    console.log('Azienda:', bottegaArtigiana);
});
