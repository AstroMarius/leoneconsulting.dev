# Guida al Deployment

Questo progetto è attualmente deployato su **Vercel**.

## Deployment Attivo

### ✅ Vercel (Produzione)

**URL di Produzione:**
- Main: https://leoneconsulting.dev
- Vercel: https://leoneconsulting-dev.vercel.app

**Deployment Automatico:**
- Ogni push su `main` triggera un deployment automatico su Vercel
- Preview deployments per ogni PR

**Setup Iniziale (già configurato):**
1. Progetto linkato: `leoneconsulting-dev`
2. Dominio custom aggiunto: `leoneconsulting.dev`
3. Build command: `npm run build`
4. Output directory: `dist`

## Configurazione DNS su OVH

**IMPORTANTE:** Per far funzionare il dominio `leoneconsulting.dev`, configura questi record DNS su OVH:

### Record Obbligatori

#### Opzione 1: Record A (Root Domain)
```
Tipo: A
Nome: @ (oppure lascia vuoto)
Valore: 76.76.21.22
TTL: 300
```

#### Opzione 2: Record A Alternativo (Ridondanza)
```
Tipo: A
Nome: @ (oppure lascia vuoto)
Valore: 66.33.60.129
TTL: 300
```

#### Record CNAME per WWW (Opzionale)
```
Tipo: CNAME
Nome: www
Valore: cname.vercel-dns-017.com
TTL: 300
```

### Verifica DNS
Dopo la configurazione, attendi 5-10 minuti e verifica:
```bash
dig +short leoneconsulting.dev
# Dovrebbe restituire: 76.76.21.22 o 66.33.60.129
```

### Alternative: Nameserver Vercel (Più Automatico)
Se preferisci, puoi cambiare i nameserver su OVH:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
Questo permette a Vercel di gestire automaticamente tutti i record DNS.

## Domini Principali
- **leoneconsulting.dev** → Sito principale
- **portfolio.leoneconsulting.dev** → Portfolio (da configurare separatamente)

## Altre Opzioni di Deployment (Non Attive)

### Netlify (Supportato)
Le configurazioni sono già presenti in `netlify.toml` se vuoi usare Netlify.

### ~~GitHub Pages~~ (Disabilitato)
Il workflow GitHub Pages è stato disabilitato per evitare conflitti.
File: `.github/workflows/deploy.yml.disabled`

2. Il redirect automatico è già configurato nel sito

## Variabili d'Ambiente

Attualmente il sito non richiede variabili d'ambiente. Se in futuro aggiungi integrazioni (es. form, analytics), aggiungile qui:

```env
# Esempio
PUBLIC_ANALYTICS_ID=xxx
```

## Build Locale

Per testare la build di produzione localmente:

```bash
npm run build
npm run preview
```

## Troubleshooting

### Build Fallisce

1. Verifica di avere Node.js >= 18
2. Cancella `node_modules` e reinstalla:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Immagini non Caricate

Metti tutte le immagini statiche nella cartella `public/`

### Errori TypeScript

Installa le dipendenze opzionali:
```bash
npm install -D @astrojs/check typescript
```

## Performance

Il sito è ottimizzato per:
- ✅ Lighthouse Score > 95
- ✅ First Contentful Paint < 1s
- ✅ Mobile responsive
- ✅ SEO optimized

## Prossimi Passi

1. Configura un form backend (es. Formspree, Netlify Forms)
2. Aggiungi Google Analytics o Plausible
3. Configura il sottodominio portfolio
4. Setup booking system (quando richiesto)
