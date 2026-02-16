# Piano di Implementazione - High Impact Upgrade 2026

## Fase 1: Massimo Impatto (Sprint 1 - Settimana 1-2)

### 1.1 Case Studies & Portfolio
- [ ] Creare struttura dati TypeScript per case studies
- [ ] Implementare pagina `/portfolio` con listing
- [ ] Creare template per pagina dettaglio case study
- [ ] Aggiungere sezione "Risultati" in Home con 3 card
- [ ] Popolare con i primi 3 case studies

**Files da creare:**
- `src/types/case-study.ts`
- `company/case-studies/[slug].json` (x3)
- `src/pages/portfolio.astro`
- `src/pages/portfolio/[slug].astro`
- `src/components/CaseStudyCard.astro`
- `src/components/ResultsSection.astro`

### 1.2 Pacchetti Productized
- [ ] Definire struttura dati per i 3 pacchetti
- [ ] Creare pagina `/pacchetti`
- [ ] Aggiungere sezione "Come posso aiutarti" in Home
- [ ] Design card pacchetti con CTA chiare

**Files da creare:**
- `src/types/package.ts`
- `company/packages/tech-audit.json`
- `company/packages/mvp-sprint.json`
- `company/packages/data-pipeline.json`
- `src/pages/pacchetti.astro`
- `src/components/PackageCard.astro`
- `src/components/PackagesSection.astro`

### 1.3 Funnel di Contatto
- [ ] Form pre-call con 5 domande di qualificazione
- [ ] Landing page Audit Asincrono
- [ ] Endpoint email/CRM per form submission
- [ ] Thank you page dopo submission

**Files da creare:**
- `src/pages/prenota.astro` (con form pre-call)
- `src/pages/audit-asincrono.astro`
- `api/pre-call.ts`
- `api/audit-request.ts`
- `src/components/PreCallForm.astro`
- `src/components/AuditForm.astro`

## Fase 2: Rifinitura (Sprint 2 - Settimana 3)

### 2.1 Processo & Social Proof
- [ ] Sezione "Come lavoro" (5 step) in Home
- [ ] Sezione "Dicono di me" con 2-3 testimonianze
- [ ] Pagina "Per chi NON sono"

**Files da creare:**
- `src/components/ProcessSection.astro`
- `src/components/TestimonialsSection.astro`
- `src/pages/per-chi-non-sono.astro`
- `company/content/testimonials.json`

### 2.2 SEO & Trust
- [ ] Meta tags ottimizzati per tutte le pagine
- [ ] OpenGraph images
- [ ] Schema.org (Organization, Service, FAQPage)
- [ ] FAQ section con 5 domande strategiche

**Files da creare:**
- `src/components/SEO.astro`
- `src/utils/schema.ts`
- `src/components/FAQ.astro`
- `company/content/faq.json`

### 2.3 i18n - Versione Inglese
- [ ] Tradurre tutti i nuovi contenuti
- [ ] Creare `/en/portfolio`
- [ ] Creare `/en/pacchetti`
- [ ] Aggiornare translations.ts

## Checklist Qualità

- [ ] Mobile first - CTA visibile entro 1 scroll
- [ ] Performance - Lighthouse score > 90
- [ ] Immagini ottimizzate (WebP, lazy loading)
- [ ] Copy conciso e orientato ai risultati
- [ ] Numeri e metriche chiari (o proxy dichiarati)
- [ ] Accessibilità (ARIA labels, contrast)
- [ ] Form validation con feedback chiaro
- [ ] Error handling su tutti gli endpoint

## Metriche di Successo

### Pre-Launch
- Lighthouse Performance > 90
- Lighthouse SEO > 95
- Tutti i link funzionanti
- Forms testati su mobile/desktop

### Post-Launch (30 giorni)
- Conversion rate contact form > 5%
- Bounce rate < 50%
- Tempo medio sulla pagina > 2 min
- Audit requests > 2/settimana

## Repository & Deployment

- Branch: `feature/high-impact-upgrade-2026`
- Review PR: `main` ← `feature/high-impact-upgrade-2026`
- Deploy preview: Vercel automatic
- Deploy production: merge to main

## Note Tecniche

### Stack
- Astro 5.17.1
- Tailwind CSS 3.4.19
- TypeScript 5.9.3
- Vercel Serverless (SSR)

### Conventions
- Componenti in PascalCase
- File di dati in kebab-case
- Contenuti in company/ directory
- Types in src/types/
- API endpoints in api/
