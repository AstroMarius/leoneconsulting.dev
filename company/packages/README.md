# Pacchetti Productized Services

## Strategia

Offrire 3 pacchetti **chiari, specifici e acquistabili** per ridurre frizione e qualificare i lead:

1. **Tech/AI Audit** (5 giorni) - Diagnosi e roadmap
2. **MVP Sprint** (2-4 settimane) - Prototipo funzionante
3. **Data Pipeline & Dashboard** (2-6 settimane) - Infrastruttura dati

## Struttura Dati

```typescript
interface Package {
  slug: string;
  title: string;
  tagline: string;
  price?: {
    display: string; // "a partire da €X" o "su richiesta"
    value?: number;
    currency?: string;
  };
  
  forWhom: {
    title: string;
    bullets: string[]; // max 3
  };
  
  deliverables: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      format?: string; // "PDF", "GitHub repo", "live demo"
    }>;
  };
  
  requirements: {
    title: string;
    items: string[]; // cosa serve dal cliente
  };
  
  timeline: {
    duration: string;
    breakdown?: Array<{
      phase: string;
      days: string;
    }>;
  };
  
  process: string[]; // 3-5 step
  
  cta: {
    text: string;
    url: string;
  };
  
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  
  metadata: {
    featured: boolean;
    language: 'it' | 'en';
  };
}
```

## Linee Guida

### Deliverables
- **Specifici e tangibili**: "Report PDF 15-20 pagine" invece di "Analisi completa"
- **Formati chiari**: PDF, GitHub repo, dashboard live, video walkthrough
- **Ownership**: chi possiede cosa dopo il progetto?

### Pricing
Opzioni:
1. **Trasparente**: "€3.500" (se sei sicuro del prezzo)
2. **Range**: "€3.000 - €5.000" (per variabilità contenuta)
3. **A partire da**: "A partire da €3.000" (se molte variabili)
4. **Su richiesta**: ultima opzione, meglio evitare

**Consiglio**: inizia con "a partire da" per testare mercato.

### Per Chi È
- Descrivi il **problema/situazione** non il titolo
- ✅ "Hai dati in 3 sistemi diversi e report manuali"
- ❌ "Per CTO di PMI"

### Requirements
- Cosa serve **realmente** dal cliente per iniziare
- ✅ "Accesso read-only ai sistemi dati"
- ✅ "1 stakeholder disponibile per 2h/settimana"
- ✅ "Brief di 1 pagina su obiettivi e vincoli"

## CTA & Funnel

Ogni pacchetto ha 2 CTA:
1. **Primaria**: "Richiedi [Nome Pacchetto]" → pre-call form
2. **Secondaria**: "Ho dubbi" → audit asincrono o FAQ

## Differenziazione

| Audit | MVP Sprint | Data Pipeline |
|-------|------------|---------------|
| Diagnosi | Prototipo | Infrastruttura |
| 5 giorni | 2-4 settimane | 2-6 settimane |
| €2-3K | €5-12K | €6-15K |
| Report + roadmap | App funzionante | Pipeline + dashboard |

## Prossimi Step

1. Validare pricing con mercato
2. Creare 1 case study per ogni pacchetto
3. Testare copy con 3-5 potenziali clienti
4. A/B test CTA in Home
