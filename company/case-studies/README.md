# Case Studies

## Struttura Dati

Ogni case study deve seguire questa struttura:

```typescript
interface CaseStudy {
  slug: string;
  title: string;
  client: string; // "PMI settore X" se non pubblicabile
  sector: string;
  published: boolean;
  featuredImage?: string;
  
  problem: {
    description: string; // 2-3 righe
    painPoints: string[];
  };
  
  constraints: {
    timeline: string;
    budget: string;
    technical: string[];
    compliance?: string[];
  };
  
  solution: {
    architecture: string;
    keyDecisions: string[];
    approach: string;
  };
  
  results: {
    metrics: Array<{
      label: string;
      value: string;
      isProxy: boolean; // true se non è metrica diretta
      description?: string;
    }>;
    impact: string;
  };
  
  tech: {
    stack: string[];
    tools: string[];
  };
  
  role: string[]; // cosa hai fatto tu specificamente
  
  links?: {
    demo?: string;
    repository?: string;
    screenshots?: string[];
  };
  
  metadata: {
    duration: string;
    year: number;
    language: 'it' | 'en';
  };
}
```

## Template Case Study

Copia `template.json` e rinomina con lo slug del progetto.

## Linee Guida

### Numeri e Metriche
Se non ci sono metriche precise, usare **proxy onesti**:
- ✅ "Tempo di report ridotto da 2 giorni a 30 minuti"
- ✅ "Riduzione errori manuali: da ~20/mese a 0"
- ✅ "Latenza API migliorata del 60% (da 500ms a 200ms)"
- ✅ "Costi cloud: da ~€500/mese a ~€200/mese"
- ❌ "Performance aumentata del 300%" (troppo vago)

### Privacy
- Se il cliente non è pubblicabile: usa "PMI settore manifatturiero"
- Anonimizza screenshot se necessario
- Chiedi sempre permesso prima di pubblicare

### Formato
- Testi brevi e scannabili
- Max 3 pain points
- Max 5 key decisions
- Almeno 2 metriche (anche proxy)

## Case Studies da Creare (priorità)

1. **Dashboard KPI per Operations** (priorità alta)
2. **Pipeline dati per Analytics** (priorità alta)  
3. **Prototipo AI per Automazione** (priorità media)

## Esempi di Proxy Metrics Validi

| Metrica Diretta | Proxy Accettabile |
|----------------|-------------------|
| Revenue increase | Time to insight ridotto |
| Customer acquisition | Lead qualification rate |
| Sales conversion | Report automation |
| Cost reduction | Manual steps eliminated |
| User engagement | Error rate reduction |
