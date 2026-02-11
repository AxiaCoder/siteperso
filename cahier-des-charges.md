# Cadrage — Site Portfolio Personnel

## 1. Objectif

Site vitrine personnel pour **se vendre** en tant que développeur backend PHP/JS. Le site doit être simple, efficace, et refléter un profil technique sérieux.

**Public cible** : recruteurs, leads techniques, potentiels collaborateurs.

---

## 2. Spécifications techniques

| Élément | Choix |
|---------|-------|
| Type | Site statique (one-pager) |
| Générateur | **Astro** |
| Langage | TypeScript |
| Styling | Tailwind CSS |
| Hébergement | Vercel ou Netlify (push-to-deploy, SSL auto) |
| Responsive | Mobile-first |

### Pourquoi Astro

- Écosystème JS/TS familier
- Possibilité d'intégrer des composants React si besoin
- Zéro JS côté client par défaut (performance maximale)
- Excellent pour le contenu statique

---

## 3. Direction artistique

- **Ambiance** : sombre, tons bleu foncé
- **Palette suggérée** :
  - Background principal : `#0a0f1a` (bleu très foncé / quasi noir)
  - Background secondaire : `#111827` (cards, sections alternées)
  - Accent primaire : `#3b82f6` (bleu vif pour les CTA et liens)
  - Accent secondaire : `#60a5fa` (hover, éléments interactifs)
  - Texte principal : `#e2e8f0` (gris clair)
  - Texte secondaire : `#94a3b8` (gris moyen pour les descriptions)
- **Typographie** : sans-serif moderne (Inter, JetBrains Mono pour le code)
- **Style général** : clean, aéré, pas de fioritures, animations subtiles (fade-in au scroll)

---

## 4. Structure — Sections

Le site est un **one-pager** avec navigation par ancres. Chaque section est séparée visuellement.

### 4.1 Navigation (sticky top)

- Logo / Nom
- Liens ancres vers chaque section
- Lien externe vers CV PDF (optionnel, à fournir plus tard)

### 4.2 Hero

- Nom complet
- Titre : "Développeur Backend — PHP & Node.js"
- Accroche courte (1-2 lignes) : résumé percutant de qui tu es et ce que tu recherches
- CTA : "Voir mes projets" (scroll vers section Projets)
- Liens sociaux : GitHub, LinkedIn, email

> **À fournir** : nom complet, accroche souhaitée, liens GitHub/LinkedIn/email

### 4.3 À propos

- Paragraphe court sur le parcours et la philosophie de dev
- Ce qui te motive, ce que tu cherches (remote, stack moderne, etc.)

> **À fournir** : texte libre ou bullet points d'idées, Claude Code peut aider à rédiger

### 4.4 Compétences / Stack technique

Affichage visuel des technologies maîtrisées, organisé par catégorie :

- **Backend** : PHP (Phalcon, connaissances Symfony/Laravel), Node.js (AdonisJS, NestJS), Java
- **API** : REST, OpenAPI/Swagger, Spectral
- **Frontend** : React, Inertia.js, Tailwind CSS
- **Outils** : Git, Docker, Jira, Confluence, Linear
- **Paiement** : Payline, Adyen
- **Autre** : CI/CD, tests, monorepo pnpm

Format suggéré : grille d'icônes/badges par catégorie (pas un mur de logos).

### 4.5 Projets personnels

Cards cliquables pour chaque projet, avec :
- Nom du projet
- Description courte (1-2 lignes)
- Stack utilisée (badges)
- Lien vers le repo ou le site si disponible
- Statut (en développement, alpha, idée...)

**Projets à afficher :**

| Projet | Description | Stack | Statut |
|--------|-------------|-------|--------|
| **MyLittleLibrary** | Bibliothèque multimédia unifiée | AdonisJS, Inertia, React, pnpm monorepo | Approche alpha |
| **MyLittleTrivia** | Jeu de quiz multijoueur en mode party game | AdonisJS, Inertia, React, pnpm monorepo | Approche alpha |

> **À fournir** : descriptions plus détaillées si souhaitées, liens repos, screenshots éventuels

### 4.6 Expérience professionnelle

Timeline verticale, sobre. Pour chaque poste :
- Entreprise + poste
- Période
- Résumé court des responsabilités / réalisations clés

> **À fournir** : détails de l'expérience (VoyagePrive + postes précédents si pertinents)

### 4.7 Contact

- Phrase d'accroche ("Intéressé par mon profil ? Discutons.")
- Liens : email, LinkedIn, GitHub
- Pas de formulaire de contact (simplicité maximale, un mailto suffit)

---

## 5. Contenu à fournir

Checklist de ce qui est nécessaire pour que Claude Code puisse générer le site :

- [ ] Nom complet
- [ ] Accroche / tagline hero
- [ ] Texte "À propos" (même en vrac, on peut polir)
- [ ] Expérience pro (entreprises, postes, dates, résumé)
- [ ] Liens : GitHub, LinkedIn, email de contact
- [ ] Descriptions détaillées des projets (optionnel, on peut partir de ce qu'on a)
- [ ] CV en PDF (optionnel, pour lien de téléchargement)
- [ ] Photo / avatar (optionnel)

---

## 6. Contraintes

- **Pas de backend** — tout est statique
- **Pas de CMS** — le contenu est dans le code (fichiers Astro/Markdown)
- **Pas de formulaire** — mailto pour le contact
- **Pas de tracking/analytics** — sauf si souhaité plus tard (simple ajout)
- **Performance** — score Lighthouse 95+ visé
- **SEO de base** — meta tags, Open Graph, sitemap

---

## 7. Livrables attendus de Claude Code

1. Projet Astro initialisé avec Tailwind CSS
2. Structure complète du one-pager avec les 6 sections
3. Design responsive (mobile-first) dans les tons bleu foncé
4. Contenu placeholder là où les infos ne sont pas encore fournies
5. Configuration déploiement (Vercel ou Netlify)
6. README avec instructions de build et de personnalisation du contenu
