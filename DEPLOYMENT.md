# Guida al Deployment

Questo progetto può essere deployato su diversi servizi di hosting per siti statici.

## Opzioni di Deployment

### 1. Vercel (Consigliato)

1. Vai su [vercel.com](https://vercel.com)
2. Importa il repository GitHub
3. Vercel rileverà automaticamente Astro
4. Click "Deploy"

### 2. Netlify

1. Vai su [netlify.com](https://netlify.com)
2. Importa il repository GitHub
3. Le configurazioni sono già presenti in `netlify.toml`
4. Click "Deploy"

### 3. GitHub Pages

1. Vai nelle Settings del repository
2. Pages > Source > GitHub Actions
3. Il workflow è già configurato in `.github/workflows/deploy.yml`
4. Ogni push su main fa partire il deployment automatico

### 4. Cloudflare Pages

1. Vai su [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connetti il repository GitHub
3. Configurazione:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: 20

## Configurazione Domini

### Domini Principali
- **leoneconsulting.dev** → Sito principale
- **portfolio.leoneconsulting.dev** → Portfolio (da configurare separatamente)

### DNS Configuration

Per configurare il sottodominio portfolio:

1. Aggiungi un record DNS CNAME:
   - Name: `portfolio`
   - Target: indirizzo del servizio di hosting del portfolio

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
