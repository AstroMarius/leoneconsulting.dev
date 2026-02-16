# LeoneConsulting.dev - High Impact Upgrade Plan (2026)

Obiettivo
Aumentare conversione e qualità dei lead su leoneconsulting.dev, trasformando il sito da vetrina a “macchina” che:
- mostra prove concrete (case study con numeri)
- rende l’offerta acquistabile (pacchetti)
- filtra e qualifica (pre-call form + audit asincrono)

Vincoli
- Non stravolgere lo stile attuale, aggiornamenti incrementali
- Priorità assoluta: conversione, chiarezza, fiducia
- Output finale: Home aggiornata + nuove pagine/section + portfolio strutturato + form qualificazione

Stack e repo
- Rileva dal repo esistente (framework, routing, componenti)
- Mantieni coerenza di stile con UI attuale
- SEO: aggiungere metadata, OpenGraph, schema.org

Deliverable principali (ordine di implementazione)

1) Case Study (3) con numeri
Creare una pagina Portfolio/Case Studies e una sezione in Home “Risultati”.
Ogni case study deve avere questa struttura fissa:
- Titolo breve (es. “Dashboard KPI per operations”)
- Cliente/settore (se non pubblicabile: “PMI settore X”)
- Problema (2-3 righe)
- Vincoli (tempo, budget, dati, compliance)
- Soluzione (architettura e scelte chiave)
- Risultati misurabili (almeno 2 metriche, anche proxy)
- Stack (badge)
- Ruolo (cosa ho fatto io)
- Link: demo/screenshot/repo privato (se possibile)

Aggiungere nella Home una griglia con 3 card + CTA “Vedi tutti i case study”.

Note importanti sui numeri
Se non ci sono metriche precise, usare proxy onesti:
- tempo ridotto (prima/dopo)
- riduzione errori o step manuali
- latenza migliorata
- stabilità / uptime
- costi cloud ridotti (range)

2) Offerta a pacchetti (productized services)
Creare una pagina “Pacchetti” (o sezione in Servizi) con 3 pacchetti:
- Tech/AI Audit (5 giorni lavorativi)
  Deliverable: report rischi, quick wins, roadmap 30/60/90 giorni, stima effort
- MVP Sprint (2-4 settimane)
  Deliverable: prototipo funzionante, deploy, metriche minime, handover
- Data Pipeline & Dashboard (2-6 settimane)
  Deliverable: ingestion, storage, KPI, dashboard, monitoring base

Per ogni pacchetto includere:
- Per chi è (3 bullet)
- Cosa ottieni (deliverable chiari)
- Cosa serve da te (input richiesti)
- Timeline
- Prezzo: opzionale. Se non si mette, usare “a partire da” o “range” oppure “su richiesta”.
- CTA: “Richiedi questo pacchetto”

In Home aggiungere una sezione “Come posso aiutarti” con i 3 pacchetti.

3) Funnel contatto: form pre-call + audit asincrono
Implementare due CTA principali:
- Prenota una call (con questionario pre-call)
- Audit asincrono (feedback scritto)

Pre-call form (max 5 domande):
- Obiettivo principale (select)
- Stack attuale (text)
- Dati disponibili (select: nessuno / parziale / completo)
- Scadenza (select)
- Budget range (select)
Dopo submit: porta al booking oppure invia email/CRM con i dati.

Audit asincrono (landing dedicata):
- Promessa: feedback scritto entro 48h/72h (scegliere uno standard)
- Cosa inviare: breve brief + link repo o zip + screenshot + obiettivi
- Output: 1) rischi 2) quick wins 3) roadmap 4) stima ordine grandezza
- CTA: “Invia materiali” (form upload o link a email con template)

Se upload è complesso, fare MVP con:
- form che genera una email precompilata (mailto) oppure invio a endpoint backend esistente.

4) Sezione “Come lavoro” (processo)
Aggiungere in Home (e in Servizi) una sezione in 5 step:
1. Scoperta e diagnosi
2. Proposta con roadmap e opzioni
3. Implementazione iterativa
4. Test, deploy, handover
5. Monitoring e miglioramento

5) Prova sociale minima
Aggiungere una sezione “Dicono di me”:
- 2-3 testimonianze brevi (anche anonime)
Oppure, se non disponibili:
- “Prima/Dopo” con metriche (mini-case)

6) Pagina “Per chi non sono”
Aggiungere una pagina breve:
- “Non faccio demo che non vanno in produzione”
- “Non faccio AI per moda senza obiettivi misurabili”
- “Non prendo progetti senza dati minimi o senza accesso alle persone chiave”
Chiude con: “Se ti riconosci, perfetto: ecco come iniziare (Audit o Call)”.

SEO e trust (da fare mentre si implementa)
- Aggiornare meta title/description per Home, Servizi, Portfolio, Pacchetti, Contatti
- OpenGraph (titolo, descrizione, immagine)
- Schema.org:
  - Organization
  - WebSite
  - Service (per i pacchetti)
  - FAQPage (sezione FAQ su pacchetti o audit)

FAQ consigliate (5)
- Quanto tempo serve per vedere risultati?
- Lavori anche con repo privati e NDA?
- Posso partire senza dati puliti?
- Che stack supporti?
- Cosa succede dopo l’audit?

Piano di implementazione (checklist)
Fase 1 (massimo impatto)
- Creare data structure per case studies (JSON/MD/TS) + pagina listing + pagina dettaglio
- Aggiornare Home con sezione Risultati (3 card)
- Creare pagina Pacchetti + sezione pacchetti in Home
- Implementare form pre-call + invio (email o endpoint)
- Creare landing Audit Asincrono

Fase 2 (rifinitura)
- Sezione Come lavoro
- Sezione Prova sociale
- Pagina Per chi non sono
- FAQ + Schema.org + OpenGraph

Contenuti (da preparare subito)
- Testi dei 3 case study (anche bozza)
- Testi dei 3 pacchetti (deliverable chiari)
- Domande/risposte FAQ
- 1 immagine OG (social preview)

Requisiti di qualità
- Mobile first, CTA sempre visibile entro 1 scroll
- Copy conciso, orientato a risultati
- Nessuna promessa irrealistica, numeri o proxy dichiarati chiaramente
- Performance: immagini ottimizzate, Lighthouse buono

Output atteso
- Home aggiornata con: Risultati, Pacchetti, Processo, CTA doppia
- Portfolio con 3 case study (scalabile a N)
- Pagina Pacchetti
- Pre-call form + Audit asincrono landing
- SEO base e schema.org

Istruzione a Copilot
Implementa tutto in modo incrementale, creando PR logiche:
- PR1: Case studies data + Portfolio pages + Home results section
- PR2: Packages page + Home packages section
- PR3: Pre-call form + audit async landing + wiring
- PR4: Process, social proof, “per chi non sono”, SEO/schema
