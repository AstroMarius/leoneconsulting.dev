# Wireframes & Design Notes

## Principi di Design

### 1. Mobile First
- CTA principale visibile entro 1 scroll su mobile (< 600px viewport)
- Font size leggibile (min 16px body)
- Touch targets min 44x44px
- Stack verticale su mobile, grid su desktop

### 2. Hierarchy Visuale
- H1: 48-56px (desktop), 32-40px (mobile)
- H2: 36-40px (desktop), 28-32px (mobile)
- Body: 18-20px (desktop), 16-18px (mobile)
- Line height: 1.6-1.8 per readability

### 3. Colori (da Tailwind config esistente)
- Primary: #your-primary-color (da verificare in tailwind.config)
- Accent: per CTA e highlights
- Gray scale: per testo e backgrounds
- Success/Warning/Error: per stati e alerts

### 4. Spacing
- Section padding: py-20 (desktop), py-12 (mobile)
- Component margins: mb-8, mb-12, mb-16
- Grid gaps: gap-8 (default), gap-6 (mobile)

---

## Home Page - Nuove Sezioni

### Sezione: Risultati (dopo Hero, prima Services)

```
┌─────────────────────────────────────────────────┐
│  H2: Risultati Concreti                         │
│  Subtitle: Case study con numeri reali          │
│                                                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Card 1  │  │ Card 2  │  │ Card 3  │        │
│  │ Image   │  │ Image   │  │ Image   │        │
│  │ Title   │  │ Title   │  │ Title   │        │
│  │ Metrics │  │ Metrics │  │ Metrics │        │
│  │ CTA →   │  │ CTA →   │  │ CTA →   │        │
│  └─────────┘  └─────────┘  └─────────┘        │
│                                                  │
│  [Vedi tutti i case study →]                    │
└─────────────────────────────────────────────────┘
```

**Card CaseStudy:**
- Featured image (16:9 ratio, 400x225px)
- Title (H3, 2 lines max)
- Client/Sector (small text, gray)
- 2 metriche highlight (badge style, primary bg)
- Link "Leggi case study →"

---

### Sezione: Come Posso Aiutarti (dopo Services)

```
┌─────────────────────────────────────────────────┐
│  H2: Come Posso Aiutarti                        │
│  Subtitle: Pacchetti chiari per esigenze diverse│
│                                                  │
│  ┌───────────────┐  ┌───────────────┐          │
│  │  Tech Audit   │  │  MVP Sprint   │          │
│  │  [Icon]       │  │  [Icon]       │          │
│  │  5 giorni     │  │  2-4 settimane│          │
│  │  €2.500+      │  │  €5K - €12K   │          │
│  │  • Bullet 1   │  │  • Bullet 1   │          │
│  │  • Bullet 2   │  │  • Bullet 2   │          │
│  │  • Bullet 3   │  │  • Bullet 3   │          │
│  │  [Richiedi]   │  │  [Richiedi]   │          │
│  └───────────────┘  └───────────────┘          │
│                                                  │
│  ┌───────────────────────────────────┐          │
│  │  Data Pipeline & Dashboard        │          │
│  │  [Icon]                            │          │
│  │  2-6 settimane | €6K - €15K       │          │
│  │  • Bullet 1                        │          │
│  │  • Bullet 2                        │          │
│  │  • Bullet 3                        │          │
│  │  [Richiedi Pacchetto]              │          │
│  └───────────────────────────────────┘          │
│                                                  │
│  [Vedi tutti i pacchetti →]                     │
└─────────────────────────────────────────────────┘
```

**Card Package:**
- Icon/emoji rappresentativo
- Title (H3)
- Duration + Price range (subtext)
- 3 bullets "Per chi è" (compact)
- CTA "Richiedi [Nome]" (primary button)

---

### Sezione: Come Lavoro (dopo Packages)

```
┌─────────────────────────────────────────────────┐
│  H2: Come Lavoro                                │
│  Subtitle: Processo in 5 step                   │
│                                                  │
│  [1] → [2] → [3] → [4] → [5]                   │
│  ↓     ↓     ↓     ↓     ↓                     │
│  Disc. Prop. Impl. Test  Monit.                │
│  (breve descrizione sotto ogni step)            │
└─────────────────────────────────────────────────┘
```

**Visual:**
- Timeline orizzontale (desktop) o verticale (mobile)
- Numeri in cerchi (accent color)
- Titolo step + descrizione breve (2-3 righe)

---

### Sezione: Dicono di Me (prima Footer)

```
┌─────────────────────────────────────────────────┐
│  H2: Dicono di Me                               │
│                                                  │
│  ┌─────────────────┐  ┌─────────────────┐      │
│  │ "Quote lorem... │  │ "Quote lorem... │      │
│  │  ipsum dolor"   │  │  ipsum dolor"   │      │
│  │                 │  │                 │      │
│  │ — Nome Role     │  │ — Nome Role     │      │
│  │   Company       │  │   Company       │      │
│  │                 │  │                 │      │
│  │ [Metric badge]  │  │ [Metric badge]  │      │
│  └─────────────────┘  └─────────────────┘      │
│                                                  │
│  ┌─────────────────────────────────┐            │
│  │ "Quote lorem ipsum dolor sit... │            │
│  │                                  │            │
│  │ — Nome Role, Company             │            │
│  │ [Metric badge]                   │            │
│  └─────────────────────────────────┘            │
└─────────────────────────────────────────────────┘
```

**Card Testimonial:**
- Quote text (italic, 3-4 righe max)
- Author name + role + company
- Optional: metric badge (es: "2 giorni/sett risparmiati")
- Background subtle (gray-50 o primary-50)

---

## Portfolio Page - Layout

```
┌─────────────────────────────────────────────────┐
│  Hero: Case Study                               │
│  H1: Progetti e Risultati Concreti              │
│  Subtitle: Numeri reali, non solo slide         │
│                                                  │
│  [Filtri: Tutti | Audit | MVP | Data Pipeline]  │
│                                                  │
│  ┌────────────────────────────────────┐         │
│  │  Case Study Card (Large)           │         │
│  │  [Image 40%] [Content 60%]         │         │
│  │  • Title                            │         │
│  │  • Client/Sector                    │         │
│  │  • Problem (1 riga)                 │         │
│  │  • Metrics (2-3 badges)             │         │
│  │  • Tech stack (icon badges)         │         │
│  │  • [Leggi case study →]             │         │
│  └────────────────────────────────────┘         │
│                                                  │
│  [Ripetere per ogni case study]                 │
│                                                  │
│  CTA: Vuoi risultati simili?                    │
│  [Prenota una call] [Richiedi audit]            │
└─────────────────────────────────────────────────┘
```

---

## Portfolio Detail Page - Layout

```
┌─────────────────────────────────────────────────┐
│  Hero: [Featured Image full-width]             │
│  H1: [Case Study Title]                         │
│  Meta: Client | Sector | Year | Duration        │
│                                                  │
│  ┌──────────────┐  ┌──────────────┐            │
│  │ Il Problema  │  │ Vincoli      │            │
│  │ (2-3 righe)  │  │ • Timeline   │            │
│  │              │  │ • Budget     │            │
│  │              │  │ • Tech       │            │
│  └──────────────┘  └──────────────┘            │
│                                                  │
│  La Soluzione                                   │
│  • Architettura (descrizione + diagram opzion.)│
│  • Key Decisions (bullet list)                  │
│  • Approach                                     │
│                                                  │
│  ┌─────────────────────────────────┐            │
│  │  Risultati Misurabili           │            │
│  │  ┌────────┐ ┌────────┐ ┌────────┐│          │
│  │  │Metric 1│ │Metric 2│ │Metric 3││          │
│  │  │ Value  │ │ Value  │ │ Value  ││          │
│  │  └────────┘ └────────┘ └────────┘│          │
│  │                                  │            │
│  │  Impact: (descrizione globale)   │            │
│  └─────────────────────────────────┘            │
│                                                  │
│  Tech Stack                                     │
│  [Badge] [Badge] [Badge] ...                    │
│                                                  │
│  Il Mio Ruolo                                   │
│  • Bullet list                                  │
│                                                  │
│  [Screenshots opzionali]                        │
│                                                  │
│  CTA: Vuoi risultati simili?                    │
│  [Prenota call] [Richiedi audit]                │
│                                                  │
│  ← Torna al portfolio                           │
└─────────────────────────────────────────────────┘
```

---

## Pacchetti Page - Layout

```
┌─────────────────────────────────────────────────┐
│  Hero: Pacchetti                                │
│  H1: Servizi Chiari, Risultati Certi            │
│  Subtitle: Scegli il pacchetto per la tua fase  │
│                                                  │
│  [Comparison Table: 3 colonne]                  │
│  ┌─────────┬─────────┬─────────┐               │
│  │ Audit   │ MVP     │ Data    │               │
│  │ 5 gg    │ 2-4 sett│ 2-6 sett│               │
│  │ €2.5K+  │ €5-12K  │ €6-15K  │               │
│  ├─────────┼─────────┼─────────┤               │
│  │ Feature │ Feature │ Feature │               │
│  │ Feature │ Feature │ Feature │               │
│  │ ...     │ ...     │ ...     │               │
│  ├─────────┼─────────┼─────────┤               │
│  │[Request]│[Request]│[Request]│               │
│  └─────────┴─────────┴─────────┘               │
│                                                  │
│  ──────────────────────────────                 │
│                                                  │
│  [Per ogni pacchetto: detail section]           │
│  ┌─────────────────────────────────┐            │
│  │  Tech/AI Audit                  │            │
│  │  Icon | Tagline                 │            │
│  │                                  │            │
│  │  Per chi è (3 bullet)            │            │
│  │  Deliverables (list)             │            │
│  │  Requirements (list)             │            │
│  │  Timeline (breakdown)            │            │
│  │  FAQ (accordion)                 │            │
│  │                                  │            │
│  │  [Richiedi Audit] [Ho dubbi?]   │            │
│  └─────────────────────────────────┘            │
│                                                  │
│  [Ripetere per MVP e Data Pipeline]             │
│                                                  │
│  CTA Finale: Non sei sicuro quale scegliere?    │
│  [Audit Asincrono Gratuito]                     │
└─────────────────────────────────────────────────┘
```

---

## Styling Notes

### Componenti Riusabili
- `<CaseStudyCard />` - card anteprima case study
- `<PackageCard />` - card pacchetto
- `<TestimonialCard />` - card testimonianza
- `<MetricBadge />` - badge metrica (es: "2 gg risparmiati")
- `<TechBadge />` - badge tech stack
- `<ProcessStep />` - step del processo
- `<FAQ />` - accordion FAQ

### Animazioni (opzionali, ma nice-to-have)
- Fade-in on scroll (Intersection Observer)
- Hover effects su card (scale, shadow)
- Smooth scroll per anchor links

### Immagini
- Featured images case study: 1200x675px (16:9)
- Thumbnails: 400x225px
- Icons: 64x64px (SVG preferred)
- Tutti WebP format + fallback
- Lazy loading default
