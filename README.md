# 🌍 IncluDO

IncluDO è un sistema di formazione professionale progettato per facilitare l'inclusione lavorativa di migranti e persone svantaggiate, preservando al contempo mestieri artigianali tradizionali a rischio di scomparsa.

## ✨ Caratteristiche Principali

- **Formazione Professionale**: Percorsi formativi personalizzati per l'apprendimento di mestieri tradizionali
- **Integrazione Lavorativa**: Collegamento diretto tra partecipanti e aziende partner
- **Preservazione Culturale**: Salvaguardia di tradizioni artigianali locali
- **Inclusione Sociale**: Opportunità concrete per migranti e persone svantaggiate
- **Modello Sostenibile**: Finanziamento tramite fondi europei e workshop per turisti

## 🛠️ Tecnologie Utilizzate

- **Linguaggio**: TypeScript
- **Architettura**: Object-Oriented Programming (OOP)
- **Pattern**: Interface-based design
- **Deployment**: GitHub Pages
- **Versioning**: Git

## 🚀 Installazione e Utilizzo

### Requisiti Preliminari

- Node.js (versione 14.x o superiore)
- npm (versione 6.x o superiore)

### Passaggi per l'Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/AntoDev00/IncluDo.github.io.git
   cd IncluDo.github.io
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Compila il codice TypeScript:
   ```bash
   npm run build
   ```

4. Apri il file index.html nel browser per visualizzare il progetto

## 📁 Struttura del Progetto

```
IncluDo.github.io/
├── dist/                # File JavaScript compilati
│   ├── azienda.js
│   ├── corso.js
│   ├── interfaces.js
│   ├── partecipante.js
│   └── index.js
├── src/                 # File TypeScript sorgenti
│   ├── azienda.ts
│   ├── corso.ts
│   ├── interfaces.ts
│   ├── partecipante.ts
│   └── index.ts
├── bundle.js            # Versione consolidata di tutto il codice
├── index.html           # Pagina HTML principale
├── package.json         # Configurazione npm e dipendenze
└── tsconfig.json        # Configurazione TypeScript
```

## 📱 Come Funziona il Sistema

Il sistema IncluDO si basa su tre componenti principali:

1. **Partecipanti**: Rappresentati dalla classe `Partecipante`, sono persone (tipicamente migranti o soggetti svantaggiati) che si iscrivono ai corsi di formazione.

2. **Corsi**: Rappresentati dalla classe `Corso`, sono i programmi formativi offerti nelle diverse discipline artigianali.

3. **Aziende**: Rappresentate dalla classe `Azienda`, sono i partner che offrono opportunità lavorative ai partecipanti formati.

Il flusso tipico prevede:
- Un partecipante si iscrive a un corso di interesse
- Completa il percorso formativo
- Un'azienda partner può offrire una posizione lavorativa al partecipante

## 🔄 Sviluppi Futuri

- Implementazione di un'interfaccia utente completa
- Sistema di monitoraggio dei progressi formativi
- Piattaforma di matchmaking avanzata tra partecipanti e aziende
- Integrazione con sistemi di e-learning per formazione ibrida
- Modulo per il tracciamento dei finanziamenti e delle sponsorizzazioni

## 📜 Licenza

Questo progetto è distribuito con licenza MIT. Consulta il file `LICENSE` per maggiori dettagli.

## 👥 Contributi

Contributi, segnalazioni di bug e richieste di funzionalità sono benvenuti. Sentiti libero di aprire una issue o inviare una pull request.

---

Creato con ❤️ per favorire l'inclusione sociale e preservare le tradizioni artigianali.
