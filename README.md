# 🎬 Mov. - Explore new Horizons

Deine Movie-Discovery-App für entspannte Filmabende – entdecke Trends, durchsuche die Filmbibliothek und baue deine persönliche Sammlung auf.

![Mov. Titel](/docs/mov_titel.png)

<div align="center">
  <img src="/docs/mov_app_loader_animation.gif" alt="Mov. Loader" width="280"/>
  <img src="/docs/mov_app_mobile_welcome.png" alt="Mov. Welcome" width="280"/>
  <img src="/docs/mov_app_mobile_start.png" alt="Mov. Start" width="280"/>
</div>

#### 🔗 [ Mov. App Live Demo](https://moviedbsession2.netlify.app/)

---

## 📋 Über das Projekt

Mov. – Einzigartiges Kino-Erlebnis trifft auf gemütliches Heimkino. Eine übersichtliche Movie-Discovery-Webanwendung, die endlich das Problem der endlosen Filmsuche löst. Die App ermöglicht es Nutzern, jederzeit und überall entspannt nach neuen Filmen zu suchen, aktuelle Trends zu entdecken und ihre persönliche Film-Bibliothek mit Favoriten und Downloads zu verwalten.

Für unser Abschlussprojekt im Modul 03 haben wir im Team mit React, TypeScript und der TMDB API eine umfassende Film-App entwickelt, die Genre-Filterung, Trailer-Integration, Dark/Light-Mode und LocalStorage-Persistenz bietet. Von entspanntem Stöbern bis zum schnellen Finden – hier beginnt der nächste Filmabend.

![Mov. Mission](/docs/mov_mission.png)

---

## 🛠️ Technologien

- **React 19** - UI-Framework mit modernen Features
- **TypeScript** - Typsichere Entwicklung
- **React Router 7** - Client-seitiges Routing
- **Vite 7** - Ultraschnelles Build-Tool mit SWC
- **Tailwind CSS 4** - Utility-First CSS Framework
- **React Bootstrap 2** - UI-Komponenten (Carousel)
- **Context API + useReducer** - State Management
- **Axios** - HTTP-Client für TMDB API
- **LocalStorage** - Persistierung von Favoriten & Downloads

---

## ✨ Features

### Film-Entdeckung

- ✅ **Trending Movies** - Tagesaktuelle Trends als Carousel
- ✅ **Genre-Navigation** - Horizontales Scrolling durch alle Genres
- ✅ **Suchfunktion** - Suche nach Filmtiteln
- ✅ **Detailansicht** - Umfassende Infos zu jedem Film
- ✅ **Trailer-Integration** - YouTube-Trailer direkt in der App

### Persönliche Bibliothek

- ✅ **Favoriten-System** - Filme als Favoriten markieren (LocalStorage)
- ✅ **Download-Liste** - Merkliste für spätere Downloads
- ✅ **Account-Verwaltung** - Persönliche Übersicht

### Design & UX

- ✅ **Custom Loading-Animation** - Pulsierende Kreise während API-Calls
- ✅ **Drei-Stufen-Ladebildschirm** - Loading → Start → Home
- ✅ **Mobile-First Design** - Responsive für Mobile (Desktop/Tablet in Arbeit)

### Technische Features

- ✅ **useReducer State Management** - Zentrale, vorhersehbare State-Logik
- ✅ **Batch-Requests mit Promise.all** - Parallele Detail-Requests für Performance
- ✅ **Privacy-freundliche YouTube-Embeds** - youtube-nocookie.com
- ✅ **Intelligentes Caching** - LocalStorage für Favoriten & Downloads
- ✅ **TypeScript-Interfaces** - Vollständig typisierte TMDB-Responses

---

## 📚 Was wir gelernt haben

- **useReducer Pattern**: Komplexes State Management mit Actions und Reducer-Logik für loading, error, genres, trending, favorites, downloads
- **Context API mit useMemo**: Performance-Optimierung durch Memoization des Context-Values
- **Promise.all für Batch-Requests**: Paralleles Laden von Film-Details statt sequentieller Requests
- **LocalStorage-Persistenz**: Speicherung von Favoriten/Downloads mit Toggle-Logik und Duplikat-Check
- **YouTube-Integration**: Intelligente Trailer-Auswahl mit Fallback-Logik (Official → Trailer → First Video)
- **Tailwind + Bootstrap**: Kombination von Utility-Classes mit komplexen UI-Komponenten (Carousel)
- **Custom Animations**: CSS Keyframes für pulsierende Loading-Animation
- **Three-Stage-Loading**: State-basierte Ladebildschirm-Steuerung (loading → start → home)

---

## 📸 Screenshots

<div align="center">
  <img src="/docs/mov_app_mobile_filter.png" alt="Mov. Loader" width="280"/>
  <img src="/docs/mov_app_mobile_scroll.png" alt="Mov. Welcome" width="280"/>
  <img src="/docs/mov_app_mobile_detail.png" alt="Mov. Start" width="280"/>
</div>

---

## 🌐 API-Integration

**Verwendete API:** The Movie Database (TMDB) v3

### Endpunkte

- `GET /trending/movie/day` - Tagesaktuelle Trending Movies
- `GET /movie/{id}` - Detaillierte Film-Informationen
- `GET /movie/{id}/videos` - Trailer und Videos
- `GET /genre/movie/list` - Alle verfügbaren Genres
- `GET /discover/movie` - Filme nach Genre mit Pagination
- `GET /search/movie` - Film-Suche nach Namen

### Besonderheiten

- **Axios-Instanz** mit zentraler Base-URL
- **Parallele Requests** mit Promise.all für Performance
- **Privacy-freundliche YouTube-Embeds** via youtube-nocookie.com
- **Intelligente Trailer-Auswahl** mit Fallback-Logik

---

## 🧩 Geplante Features & Verbesserungen

- [ ] **Responsive Design** - Optimierung für Desktop und Tablet
- [ ] **Dark/Light-Mode** - Verbessertes Erlebnis (Lerche oder Eule?)
- [ ] **UI/UX-Optimierung** - Weitere Hover-Effekte und Active-State Buttons
- [ ] **Profil-Seite** - Erweiterte Account-Verwaltung für App-Nutzer
- [ ] **Loader-Komponente** - Loading-Anzeige bei längerer API-Anfragezeit
- [ ] **Erweiterte Filterung** - Kombination von Genre, Jahr, Rating
- [ ] **Social Sharing** - Filme mit Freunden teilen
