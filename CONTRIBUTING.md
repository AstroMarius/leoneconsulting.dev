# 🎯 Contribuire a Leone Consulting

Grazie per l'interesse nel migliorare il sito di Leone Consulting!

## 🚀 Quick Start

1. **Clone il repository**
   ```bash
   git clone https://github.com/AstroMarius/leoneconsulting.dev.git
   cd leoneconsulting.dev
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il dev server**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Vai su `http://localhost:4321`

## 📝 Standard di Codice

### Stile

- Usa TypeScript strict mode
- Segui le convenzioni Astro per i componenti
- Usa TailwindCSS per gli stili
- Mantieni i componenti semplici e riutilizzabili

### Commit

Usa commit messages descrittivi:
```
feat: aggiunge nuova sezione al portfolio
fix: corregge layout mobile
docs: aggiorna README
style: migliora stili footer
```

### Branch

- `main` - branch di produzione
- `develop` - branch di sviluppo
- `feature/nome-feature` - nuove funzionalità
- `fix/nome-fix` - correzioni

## 🧪 Testing

Prima di fare commit:

1. **Build di produzione**
   ```bash
   npm run build
   ```

2. **Preview della build**
   ```bash
   npm run preview
   ```

3. **Controlla che non ci siano errori**

## 📦 Pull Request

1. Fork il repository
2. Crea un branch per la tua feature
3. Fai commit delle tue modifiche
4. Push al branch
5. Apri una Pull Request

### Checklist PR

- [ ] Il codice è testato
- [ ] La build passa
- [ ] Il codice segue gli standard del progetto
- [ ] La documentazione è aggiornata (se necessario)
- [ ] Nessun warning o errore in console

## 🎨 Aggiungere Nuove Pagine

1. Crea file in `src/pages/nome-pagina.astro`
2. Usa il layout esistente
3. Aggiungi link in Header e Footer
4. Aggiorna la sitemap (automatico)

## 🔧 Aggiungere Componenti

1. Crea file in `src/components/NomeComponente.astro`
2. Mantieni i componenti piccoli e focalizzati
3. Usa TypeScript per le props
4. Aggiungi commenti per spiegare l'uso

## 📱 Mobile First

Tutti i nuovi design devono essere:
- Responsive
- Testati su mobile
- Accessibili (WCAG 2.1 AA)

## ⚡ Performance

Mantieni il sito veloce:
- Ottimizza le immagini
- Minimizza JavaScript
- Usa lazy loading dove appropriato
- Score Lighthouse > 90

## 🐛 Segnalare Bug

Apri una issue con:
- Descrizione del bug
- Steps per riprodurre
- Browser/OS
- Screenshot (se rilevante)

## 💡 Suggerimenti

Per suggerimenti di nuove feature:
- Apri una discussion
- Spiega il caso d'uso
- Proponi una soluzione

## 📞 Contatti

Per domande: info@leoneconsulting.dev

---

Grazie per il tuo contributo! 🙏
