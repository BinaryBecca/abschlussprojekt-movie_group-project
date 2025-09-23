import type { IGenres } from "../interfaces/IGenres"
import type { IMovieDetails } from "../interfaces/IMovieDetails"
import type { ITrendingMovies } from "../interfaces/ITrendingMovies"

export const trendingMovies: ITrendingMovies = {
  page: 1,
  total_pages: 10,
  total_results: 300,
  results: [
    {
      adult: false,
      backdrop_path: "/s94NjfKkcSczZ1FembwmQZwsuwY.jpg",
      id: 617126,
      title: "The Fantastic 4: First Steps",
      original_title: "The Fantastic 4: First Steps",
      overview:
        "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
      poster_path: "/x26MtUlwtWD26d0G0FXcppxCJio.jpg",
      media_type: "movie",
      original_language: "en",
      genre_ids: [878, 12],
      popularity: 108.3034,
      release_date: "2025-07-23",
      video: false,
      vote_average: 7.2,
      vote_count: 1310,
    },
    {
      adult: false,
      backdrop_path: "/j7KqDRzjbvIjDv7cdHz9G3ZYEQy.jpg",
      id: 1233413,
      title: "Sinners",
      original_title: "Sinners",
      overview:
        "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
      poster_path: "/4CkZl1LK6a5rXBqJB2ZP77h3N5i.jpg",
      media_type: "movie",
      original_language: "en",
      genre_ids: [27, 28, 53],
      popularity: 41.2788,
      release_date: "2025-04-16",
      video: false,
      vote_average: 7.543,
      vote_count: 2563,
    },
    {
      adult: false,
      backdrop_path: "/vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg",
      id: 157336,
      title: "Interstellar",
      original_title: "Interstellar",
      overview:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      media_type: "movie",
      original_language: "en",
      genre_ids: [12, 18, 878],
      popularity: 76.5163,
      release_date: "2014-11-05",
      video: false,
      vote_average: 8.5,
      vote_count: 37885,
    },
  ],
}

export const dummyMovieDetails: IMovieDetails[] = [
  {
    id: 2,
    title: "Ariel",
    original_language: "fi",
    origin_country: ["FI"],
    overview:
      "A Finnish man goes to the city to find a job after the mine where he worked is closed and his father commits suicide.",
    release_date: "1988-10-21",
    runtime: 73,
    budget: 0,
    revenue: 0,
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" },
      { id: 80, name: "Crime" },
    ],
    production_companies: [{ id: 2303, name: "Villealfa Filmproductions", origin_country: "FI", logo_path: null }],
    spoken_languages: [{ english_name: "Finnish", iso_639_1: "fi", name: "suomi" }],
    vote_average: 7.095,
    vote_count: 357,
    poster_path: "/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg",
    backdrop_path: "/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg",
    belongs_to_collection: {
      id: 1382526,
      name: "Aki Kaurismäki's Proletariat Trilogy",
      poster_path: "/bUrReoZFLGti6ehkBW0xw8f12MT.jpg",
      backdrop_path: "/zAUItK1Nr473DIe8gWMsZ0DMR7L.jpg",
    },
    status: "Released",
    video: false,
    adult: false,
    imdb_id: "tt0094675",
    homepage: "",
    tagline: "",
  },
  {
    id: 6,
    title: "Judgment Night",
    original_language: "en",
    origin_country: ["US"],
    overview:
      "Four young friends, while taking a shortcut en route to a local boxing match, witness a brutal murder which leaves them running for their lives.",
    release_date: "1993-10-15",
    runtime: 109,
    budget: 21000000,
    revenue: 12136938,
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
    ],
    production_companies: [
      { id: 1644, name: "Largo Entertainment", origin_country: "US", logo_path: "/l5JFudbLN3vr1sSkjRoqF7To8Ky.png" },
      { id: 182, name: "JVC", origin_country: "JP", logo_path: "/1BPbXmwi1DZS1Qp0koK7AuponY6.png" },
      { id: 33, name: "Universal Pictures", origin_country: "US", logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png" },
    ],
    spoken_languages: [{ english_name: "English", iso_639_1: "en", name: "English" }],
    vote_average: 6.454,
    vote_count: 359,
    poster_path: "/3rvvpS9YPM5HB2f4HYiNiJVtdam.jpg",
    backdrop_path: "/sS6dFQTQmgNwZiVY26V32vY4fOO.jpg",
    belongs_to_collection: null,
    status: "Released",
    video: false,
    adult: false,
    imdb_id: "tt0107286",
    homepage: "",
    tagline: "Don't move. Don't whisper. Don't even breathe.",
  },
  {
    id: 12,
    title: "Finding Nemo",
    original_language: "en",
    origin_country: ["US"],
    overview:
      "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium...",
    release_date: "2003-05-30",
    runtime: 100,
    budget: 94000000,
    revenue: 940335536,
    genres: [
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" },
    ],
    production_companies: [
      { id: 3, name: "Pixar", origin_country: "US", logo_path: "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png" },
    ],
    spoken_languages: [{ english_name: "English", iso_639_1: "en", name: "English" }],
    vote_average: 7.817,
    vote_count: 19919,
    poster_path: "/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    backdrop_path: "/eCynaAOgYYiw5yN5lBwz3IxqvaW.jpg",
    belongs_to_collection: {
      id: 137697,
      name: "Finding Nemo Collection",
      poster_path: "/cCovtlN16ykvyFYnzKyv3dFtceG.jpg",
      backdrop_path: "/bcWmv9xsKv6xXmdz5OP2wefHcdx.jpg",
    },
    status: "Released",
    video: false,
    adult: false,
    imdb_id: "tt0266543",
    homepage: "http://movies.disney.com/finding-nemo",
    tagline: "There are 3.7 trillion fish in the ocean. They're looking for one.",
  },
]

export const dummyGenres: IGenres = {
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
}
