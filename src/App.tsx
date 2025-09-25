import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import HomePage from "./pages/homePage/HomePage"
import LoginPage from "./pages/loginPage/LoginPage"
import TrendingMoviesPage from "./pages/trendingMoviesPage/TrendingMoviesPage"
import GenresPage from "./pages/genresPage/GenresPage"
import DetailsPage from "./pages/detailsPage/DetailsPage"
import FavoritePage from "./pages/favoritePage/FavoritePage"
import DownloadPage from "./pages/downloadPage/DownloadPage"
import AccountPage from "./pages/accountPage/accountPage"

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
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
