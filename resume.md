# 📱 Movie App - Projekt Resume

## Inhaltlicher Überblick

Eine moderne Movie-Discovery-Webanwendung, die es Nutzern ermöglicht:

- 🎬 Trendende Filme zu entdecken
- 🔍 Nach Filmen zu suchen
- 📺 Filmdetails inkl. Trailer anzusehen
- ⭐ Favoriten und Downloads zu verwalten
- 🎭 Nach Genres zu filtern
- 👤 Persönliche Account-Verwaltung

---

## 🛠️ Tech-Stack

### Frontend-Framework & Tooling

- **React 19.1.1** mit **TypeScript 5.8.3**
- **Vite 7.1.7** als Build-Tool mit SWC (Super-fast Compilation)
- **React Router 7.9.1** für Navigation

### Styling

- **Tailwind CSS 4.1.13** als Hauptstyling-Framework
- **Bootstrap 5.3.8** / **React-Bootstrap 2.10.10** für UI-Komponenten (Carousel)
- **Custom Fonts**: Raleway, Amiko, Nunito (lokal eingebunden)
- **Custom CSS** für Animationen (Loading-Puls-Animation)
- **tailwind-scrollbar-hide** Plugin

### State Management & Data Fetching

- **React Context API** mit `MainProvider`
- **useReducer** Hook für komplexe State-Logik
- **Axios 1.12.2** für HTTP-Requests
- **LocalStorage** für Persistierung (Favoriten/Downloads)

### Code Quality

- **ESLint 9** mit TypeScript-ESLint-Integration
- Strikte TypeScript-Konfiguration

---

## 🎨 Styling-Besonderheiten

### Farbschema (Custom Theme)

```css
@theme {
  --color-green: #4da895;
  --color-lightgreen: #b7f3bb;
  --color-darkblue: #181732;
  --color-darkgrey: #3e434b;
  --color-mediumgrey: #a1b9b5;
  --color-lightgrey: #e7efed;

  --font-base: 'Amiko-Regular', sans-serif;
  --font-healdine: 'Raleway-Variable', sans-serif;
  --font-button: 'Nunito-Variable', sans-serif;
}
```

### Typografie

Drei Custom Font-Familien mit Variable Fonts:

```css
@font-face {
  font-family: 'Raleway-Variable';
  src: url('/fonts/Raleway-VariableFont_wght.ttf');
}

@font-face {
  font-family: 'Amiko-Regular';
  src: url('/fonts/Amiko-Regular.ttf');
}

@font-face {
  font-family: 'Nunito-Variable';
  src: url('/fonts/NunitoSans-VariableFont.ttf');
}
```

**Font-Hierarchie:**
- **Amiko** → Base Text
- **Raleway** → Headlines
- **Nunito** → Buttons

### Design-Elemente

- ✅ Dunkles Theme (Dark Mode by default)
- ✅ Gradient-Buttons mit Tailwind
- ✅ Custom Loading-Animation (pulsierende Kreise)
- ✅ Responsive Design mit Mobile-First-Ansatz
- ✅ Horizontales Scrolling für Genre-Bar

### Custom Loading-Animation

```css
.loading {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 10rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.loading:before,
.loading:after {
  content: '';
  position: absolute;
  border-radius: 50%;
  animation: pulsOut 1.8s ease-in-out infinite;
  filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
}

@keyframes pulsIn {
  0% {
    box-shadow: inset 0 0 0 1rem #fff;
    opacity: 1;
  }
  50%, 100% {
    box-shadow: inset 0 0 0 0 #fff;
    opacity: 0;
  }
}

@keyframes pulsOut {
  0%, 50% {
    box-shadow: 0 0 0 0 #fff;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem #fff;
    opacity: 1;
  }
}
```

---

## 🏗️ Projektstruktur

```
src/
├── api/              → API-Logik (Axios-Instanz & Requests)
├── components/       → Wiederverwendbare UI-Komponenten (14 Komponenten)
│   ├── backButton/
│   ├── footer/
│   ├── genreBar/
│   ├── header/
│   ├── loader/
│   ├── movieButton/
│   ├── movieCard/
│   ├── movieCarousel/
│   ├── movieCarouselCard/
│   ├── movieList/
│   ├── navButton/
│   ├── posterImage/
│   ├── searchBar/
│   ├── searchResults/
│   ├── startScreen/
│   └── trailer/
├── context/          → Global State (MainProvider mit Context API)
├── data/             → Statische Daten
├── functions/        → Custom Hooks & Reducer-Logik
├── interfaces/       → TypeScript-Typdefinitionen
├── layout/           → Layout-Wrapper
└── pages/            → Route-basierte Seiten (8 Pages)
    ├── accountPage/
    ├── detailsPage/
    ├── downloadPage/
    ├── favoritePage/
    ├── genresPage/
    ├── homePage/
    ├── loginPage/
    └── trendingMoviesPage/
```

### Komponenten-Architektur

- ✅ Klare Trennung von Präsentations- und Container-Komponenten
- ✅ Atomares Design-Pattern (Buttons, Cards, Lists)
- ✅ Spezielle Komponenten für Trailer-Modal, Carousel, Search

---

## 🔌 API-Integration (The Movie Database - TMDB)

### API-Setup

```typescript
import axios from 'axios'

const myAPI = import.meta.env.VITE_apiKey

export const api = axios.create({ 
  baseURL: 'https://api.themoviedb.org/3' 
})
```

- **Basis-URL**: `https://api.themoviedb.org/3`
- **Axios-Instanz** mit zentraler Konfiguration
- **API-Key** via Environment Variables (`VITE_apiKey`)

### API-Funktionen

#### 1. Detaillierte Film-Informationen

```typescript
export async function getDetailedMovie(id: number) {
  const { data } = await api.get<IMovieDetails>(
    `https://api.themoviedb.org/3/movie/${id}`,
    {
      params: { api_key: myAPI },
    }
  )
  return data
}
```

#### 2. Genre-Liste

```typescript
export async function getGenres() {
  const { data } = await api.get<IGenres>('/genre/movie/list', {
    params: { api_key: myAPI },
  })
  return data
}
```

#### 3. Trending Movies

```typescript
export async function getTrendingMoviesByGenres() {
  const { data } = await api.get<ITrendingMovies>(
    `/trending/movie/day?api_key=${myAPI}`
  )
  return data
}
```

#### 4. Movie Videos (Trailer)

```typescript
export async function getMovieVideos(id: number) {
  const { data } = await api.get(`/movie/${id}/videos`, {
    params: { api_key: myAPI, language: 'en-us' },
  })
  return data.results as IVideo[]
}
```

#### 5. Filme nach Genre mit Pagination

```typescript
export async function getMoviesByGenre(genreId: number, page = 1) {
  const { data } = await api.get<ITrendingMovies>('/discover/movie', {
    params: {
      api_key: myAPI,
      with_genres: genreId,
      sort_by: 'popularity.desc',
      page,
    },
  })
  return data
}
```

#### 6. Film-Suche

```typescript
export async function searchMovies(name: string) {
  const { data } = await api.get<ISearchResponse>(
    `/search/movie?api_key=${myAPI}`,
    {
      params: { query: name },
    }
  )
  return data
}
```

### Besonderheiten der API-Nutzung

#### Batch-Requests mit Promise.all

```typescript
// In MainProvider.tsx
async function fetchTrendingMovies() {
  dispatch({ type: "FETCH_START" })
  try {
    const data = await getTrendingMoviesByGenres()
    const results = data.results ?? []

    // Parallele Requests für detaillierte Informationen
    const detailResults = await Promise.all(
      results.map((movie) => getDetailedMovie(movie.id))
    )

    dispatch({ type: "FETCH_TRENDING", payload: detailResults })
  } catch (err: any) {
    dispatch({
      type: "FETCH_ERROR",
      payload: err?.message ?? "Fehler beim Laden der Genres",
    })
  }
}
```

**Vorteil**: Für jeden gefundenen Film werden zusätzliche Details parallel geholt, was die Performance erheblich verbessert.

#### Intelligentes Caching

```typescript
// Favoriten aus LocalStorage laden
useEffect(() => {
  try {
    const raw = localStorage.getItem("favorites")
    if (raw) {
      const parsed = JSON.parse(raw) as IMovieDetails[]
      dispatch({ type: "SET_FAVORITES", payload: parsed })
    }
  } catch (error: any) {
    dispatch({
      type: "FETCH_ERROR",
      payload: error.message ?? "Fehler bei der Suchanfrage.",
    })
  }
}, [])

// Favoriten setzen/entfernen
function setFavorites(favorite: IMovieDetails) {
  const favoritesArrayCopy = [...states.favorites]
  const alreadyMarkedAsFavorite = favoritesArrayCopy.find(
    (movie) => movie.id === favorite.id
  )

  let newFavorites
  if (!alreadyMarkedAsFavorite) {
    favoritesArrayCopy.push(favorite)
    newFavorites = favoritesArrayCopy
  } else {
    newFavorites = favoritesArrayCopy.filter(
      (movie) => movie.id !== favorite.id
    )
  }
  
  localStorage.setItem("favorites", JSON.stringify(newFavorites))
  dispatch({ type: "SET_FAVORITES", payload: newFavorites })
}
```

#### YouTube-Integration

```typescript
// In DetailsPage.tsx
const ytVideos = Array.isArray(videos)
  ? videos.filter((v) => v.site === 'YouTube')
  : []

// Intelligente Trailer-Auswahl
const trailer =
  ytVideos.find((v) => v.type === 'Trailer' && v.official) ||  // Offizieller Trailer
  ytVideos.find((v) => v.type === 'Trailer') ||                // Inoffizieller Trailer
  ytVideos[0]                                                   // Fallback: erstes Video

// Privacy-freundlicher Embed
const embedUrl = trailer
  ? `https://www.youtube-nocookie.com/embed/${trailer.key}?autoplay=1&modestbranding=1`
  : null
```

**Besonderheiten:**
- Privacy-freundliche YouTube-Embeds (`youtube-nocookie.com`)
- Intelligente Fallback-Logik
- Autoplay und minimales Branding

---

## 🧠 Technische Highlights

### 1. Reducer-Pattern für State-Management

```typescript
// interfaces/ProviderInterfaces.ts
export interface IState {
  loading: boolean
  error: string | null
  genres: Genre[]
  details: IMovieDetails | null
  trending: IMovieDetails[]
  query: string
  searchResults: IMovieDetails[]
  videos: IVideo[]
  favorites: IMovieDetails[]
  downloads: IMovieDetails[]
}

export type TAction =
  | { type: "START_LOADING" }
  | { type: "FETCH_START" }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "FETCH_GENRES"; payload: Genre[] }
  | { type: "FETCH_TRENDING"; payload: IMovieDetails[] }
  | { type: "FETCH_DETAILS"; payload: IMovieDetails }
  | { type: "FETCH_VIDEOS"; payload: IVideo[] }
  | { type: "FETCH_SEARCHRESULTS"; payload: IMovieDetails[] }
  | { type: "FETCH_QUERY"; payload: string }
  | { type: "SET_FAVORITES"; payload: IMovieDetails[] }
  | { type: "SET_DOWNLOADS"; payload: IMovieDetails[] }

// functions/Functions.ts
export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, loading: true, error: null }
    case "FETCH_START":
      return { ...state, loading: true, error: null }
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload }
    case "FETCH_GENRES":
      return { ...state, loading: false, genres: action.payload }
    case "FETCH_TRENDING":
      return { ...state, loading: false, trending: action.payload }
    case "FETCH_DETAILS":
      return { ...state, loading: false, details: action.payload }
    case "FETCH_VIDEOS":
      return { ...state, loading: false, videos: action.payload }
    case "FETCH_SEARCHRESULTS":
      return { ...state, loading: false, searchResults: action.payload }
    case "FETCH_QUERY":
      return { ...state, query: action.payload }
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload }
    case "SET_DOWNLOADS":
      return { ...state, downloads: action.payload }
    default:
      return state
  }
}
```

**Vorteile:**
- ✅ Zentrale State-Logik
- ✅ Type-Safe Actions mit TypeScript
- ✅ Vorhersehbares State-Management
- ✅ Leichte Erweiterbarkeit

### 2. Context-Provider mit useMemo

```typescript
export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [states, dispatch] = useReducer(reducer, initialState)
  const [search, setSearch] = useState<string>("")
  const [displayScreen, setDisplayScreen] = useState<"loading" | "start" | "home">("loading")
  const [clickedOnSearchButton, setClickedOnSearchButton] = useState<boolean>(false)

  // ... API-Funktionen ...

  // Performance-Optimierung durch Memoization
  const value = useMemo<MainProviderProps>(
    () => ({
      ...states,
      fetchGenreNavBar,
      searchMovieByName,
      setQuery,
      fetchDetailedMovie,
      fetchTrendingMovies,
      setSearch,
      fetchMoviesByGenre,
      fetchGenreByTrend,
      setDisplayScreen,
      fetchMovieVideos,
      search,
      displayScreen,
      setClickedOnSearchButton,
      clickedOnSearchButton,
      setFavorites,
      setDownloads,
    }),
    [states, search, displayScreen, clickedOnSearchButton]
  )

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>
}
```

**Besonderheit:** Das `useMemo` verhindert unnötige Re-Renders aller Consumer-Komponenten, wenn sich der Context-Value nicht geändert hat.

### 3. Custom Hook Pattern

```typescript
// functions/Functions.ts
export default function useMovies() {
  const context = useContext(mainContext)
  if (!context) throw new Error("Sorry, useContext is not working.")
  return context
}

// Verwendung in Komponenten
export default function HomePage() {
  const {
    fetchTrendingMovies,
    trending,
    searchResults,
    clickedOnSearchButton,
    setClickedOnSearchButton,
  } = useMovies()
  
  useEffect(() => {
    fetchTrendingMovies()
  }, [setClickedOnSearchButton])
  
  // ...
}
```

### 4. Drei-Stufen-Ladebildschirm

```typescript
// In MainProvider
const [displayScreen, setDisplayScreen] = useState<"loading" | "start" | "home">("loading")

// Startscreen Loading Simulation
useEffect(() => {
  if (displayScreen === "loading") {
    const timer = setTimeout(() => {
      setDisplayScreen("start")
    }, 3000)
    return () => clearTimeout(timer)
  }
}, [displayScreen])
```

**Flow:**
1. `"loading"` → 3 Sekunden Custom Loading-Animation
2. `"start"` → Willkommensbildschirm
3. `"home"` → Hauptanwendung

### 5. React Router Setup

```typescript
// App.tsx
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="trending" element={<TrendingMoviesPage />} />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="genres/:genreId" element={<GenresPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
      </Route>
    )
  )
  
  return <RouterProvider router={router} />
}
```

**Features:**
- Nested Routes mit gemeinsamen Layout
- Dynamic Route Params (`:id`, `:genreId`)
- Programmatische Navigation

### 6. React Bootstrap Carousel Integration

```typescript
// components/movieCarousel/MovieCarousel.tsx
export default function MovieCarousel({ movies }: MovieCarouselProps) {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <div className="flex flex-row justify-between px-6 items-baseline mb-3">
        <h1>Trending Movies</h1>
        <MovieButton
          link="/trending"
          text="See all"
          linkClassName="!text-green font-bold !no-underline !hover:text-lightgreen"
        />
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className="px-10 pb-15">
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <MovieCarouselCard movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
```

**Pattern:** Controlled Component mit State-Lifting für Carousel-Index.

### 7. Genre-Navigation mit horizontalem Scrolling

```typescript
// components/genreBar/GenreBar.tsx
export default function GenreBar() {
  const { genres, fetchGenreNavBar, loading } = useMovies()
  const navigate = useNavigate()

  useEffect(() => {
    if (genres.length === 0) void fetchGenreNavBar()
  }, [genres.length, fetchGenreNavBar])

  if (loading && genres.length === 0) return <div>Lade Genres...</div>

  return (
    <div className="overflow-x-auto py-1 px-2 md:pl-6 [scrollbar-width:none]">
      <div className="flex gap-2 py-2 whitespace-nowrap m-3">
        {genres.map((g: Genre) => (
          <MovieButton
            key={g.id}
            genre={g.name}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded shrink-0"
            onClick={() => navigate(`/genres/${g.id}`)}
          />
        ))}
      </div>
    </div>
  )
}
```

**Besonderheit:** `[scrollbar-width:none]` für versteckte Scrollbar bei horizontalem Scrolling.

### 8. TypeScript-Interfaces

```typescript
// interfaces/IMovieDetails.ts
export interface IMovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}
```

**Vorteile:**
- ✅ Vollständige Typsicherheit
- ✅ IntelliSense-Support
- ✅ Compile-Zeit-Fehlerprüfung
- ✅ Selbstdokumentierender Code

---

## 🎯 Besondere Anwendungen & Patterns

### 1. Modal-System für Trailer

```typescript
// components/trailer/TrailerModal.tsx (Konzept)
interface TrailerModalProps {
  open: boolean
  embedUrl: string | null
  onClose: () => void
}

// Verwendung in DetailsPage
const [showTrailer, setShowTrailer] = useState(false)

<MovieButton
  text="Watch Trailer"
  onClick={() => setShowTrailer(true)}
/>

<TrailerModal
  open={showTrailer}
  embedUrl={embedUrl}
  onClose={() => setShowTrailer(false)}
/>
```

### 2. Search-Toggle-Mechanismus

```typescript
// HomePage.tsx
const {
  fetchTrendingMovies,
  trending,
  searchResults,
  clickedOnSearchButton,
  setClickedOnSearchButton,
} = useMovies()

return (
  <div className="h-full">
    {clickedOnSearchButton ? (
      <SearchResults results={searchResults} />
    ) : (
      <MovieCarousel movies={trending} />
    )}
  </div>
)
```

**Pattern:** Bedingtes Rendering basierend auf Search-State.

### 3. Responsive Rating-Display

```typescript
// DetailsPage.tsx
<div className="flex items-center justify-center pr-8">
  <img src="/img/icon_star.png" className="pr-2" />
  {typeof details.vote_average === 'number' && (
    <li className="list-none pt-1">
      {details.vote_average.toFixed(1)}
    </li>
  )}
</div>
```

### 4. Runtime-Formatierung

```typescript
{details.runtime ? (
  <li>
    {Math.floor(details.runtime / 60)}h {details.runtime % 60}m
  </li>
) : null}
```

**Output:** `120` → `2h 0m`

### 5. Bullet-Point-Liste mit Tailwind

```css
/* CSS-Trick für Trennpunkte */
.after:mx-4 
.after:inline-block 
.after:content-[''] 
.after:w-1.5 
.after:h-1.5 
.after:rounded-full 
.after:bg-mediumgrey 
.last:after:hidden
```

```tsx
<ul className="flex justify-center items-center">
  <li className="after:mx-4 after:inline-block after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-mediumgrey last:after:hidden">
    {details.release_date.slice(0, 4)}
  </li>
  <li className="after:mx-4 after:inline-block after:content-[''] after:w-1.5 after:h-1.5 after:rounded-full after:bg-mediumgrey last:after:hidden">
    {details.genres[0].name}
  </li>
  <li>{Math.floor(details.runtime / 60)}h {details.runtime % 60}m</li>
</ul>
```

**Ergebnis:** `2024 • Action • 2h 30m`

---

## 📊 Datenfluss-Diagramm

```
User Action
    ↓
Component (z.B. SearchBar)
    ↓
Context Function (searchMovieByName)
    ↓
API Call (searchMovies)
    ↓
Batch Detail Requests (Promise.all)
    ↓
Reducer Dispatch (FETCH_SEARCHRESULTS)
    ↓
State Update
    ↓
Component Re-render (SearchResults)
```

### Beispiel: Search-Flow

```typescript
// 1. User gibt Text ein → SearchBar Component
<SearchBar />

// 2. Submit triggert Context-Function
const { searchMovieByName } = useMovies()
searchMovieByName(searchTerm)

// 3. API-Request
async function searchMovieByName(name: string) {
  dispatch({ type: "FETCH_START" })
  dispatch({ type: "FETCH_QUERY", payload: name })
  setClickedOnSearchButton(true)

  try {
    // 4. Suchergebnisse holen
    const data = await searchMovies(name)
    const results = data.results ?? []

    // 5. Für jedes Ergebnis Details laden (parallel)
    const detailResults = await Promise.all(
      results.map((movie) => getDetailedMovie(movie.id))
    )

    // 6. State updaten
    dispatch({ type: "FETCH_SEARCHRESULTS", payload: detailResults })
  } catch (error: any) {
    dispatch({
      type: "FETCH_ERROR",
      payload: error.message ?? "Fehler bei der Suchanfrage.",
    })
  }
}

// 7. Component re-rendert mit neuen Daten
<SearchResults results={searchResults} />
```

---

## 🚀 Performance-Optimierungen

### 1. useMemo für Context-Value

```typescript
const value = useMemo<MainProviderProps>(
  () => ({
    ...states,
    fetchGenreNavBar,
    // ... weitere Functions
  }),
  [states, search, displayScreen, clickedOnSearchButton]
)
```

### 2. Promise.all für parallele Requests

```typescript
const detailResults = await Promise.all(
  results.map((movie) => getDetailedMovie(movie.id))
)
```

### 3. Lazy Loading mit useEffect

```typescript
useEffect(() => {
  if (genres.length === 0) void fetchGenreNavBar()
}, [genres.length, fetchGenreNavBar])
```

### 4. LocalStorage für Persistenz

```typescript
// Favoriten bleiben auch nach Browser-Neustart erhalten
localStorage.setItem("favorites", JSON.stringify(newFavorites))
```

---

## 📦 Dependencies Overview

```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.13",
    "axios": "^1.12.2",
    "bootstrap": "^5.3.8",
    "react": "^19.1.1",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.1.1",
    "react-router": "^7.9.1",
    "tailwind-scrollbar-hide": "^4.0.0",
    "tailwindcss": "^4.1.13"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^4.1.0",
    "eslint": "^9.36.0",
    "typescript": "~5.8.3",
    "vite": "^7.1.7"
  }
}
```

---

## 🎓 Lessons Learned & Best Practices

### ✅ Was gut funktioniert hat:

1. **TypeScript-First Approach** → Weniger Bugs zur Laufzeit
2. **Reducer Pattern** → Übersichtliches State-Management
3. **Promise.all** → Deutlich bessere Performance bei API-Calls
4. **LocalStorage** → Einfache Persistenz ohne Backend
5. **Custom Hooks** → Wiederverwendbare Logik
6. **Tailwind CSS** → Schnelles Styling mit Utility-Classes

### 🔄 Verbesserungspotenzial:

1. **Error Boundaries** für besseres Error-Handling
2. **React Query** statt manueller API-Calls (Caching, Retries)
3. **Skeleton Screens** statt einfacher Loading-Spinner
4. **Lazy Loading** für Bilder (Intersection Observer)
5. **Unit Tests** mit Vitest/Jest
6. **E2E Tests** mit Playwright

---

## 🎬 Fazit

Dieses Projekt zeigt eine **professionelle, skalierbare Movie-App** mit modernen React-Patterns, TypeScript-Best-Practices und durchdachter API-Integration. 

Die Kombination aus **Tailwind CSS** und **Bootstrap** ermöglicht schnelles Styling bei gleichzeitiger Verwendung komplexer UI-Komponenten wie dem Carousel.

Die **Context API** mit **useReducer** bietet ein robustes State-Management ohne zusätzliche Libraries, während **Axios** eine saubere Abstraktion für API-Calls bietet.

Besonders hervorzuheben sind:
- 🎯 Intelligentes Caching mit LocalStorage
- ⚡ Performance-Optimierung durch Promise.all
- 🎨 Custom Animations und Dark Theme
- 📱 Mobile-First Responsive Design
- 🔒 Privacy-freundliche YouTube-Integration

---

**Projekt erstellt im Rahmen des Bootcamp 2025**  
**Repository:** BinaryBecca/abschlussprojekt-movie_group-project  
**Branch:** main
