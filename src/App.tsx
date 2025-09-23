import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import "./App.css"
import Layout from "./layout/Layout"
import HomePage from "./pages/homePage/HomePage"
import StartPage from "./pages/startPage/StartPage"
import LoginPage from "./pages/loginPage/LoginPage"
import TrendingMoviesPage from "./pages/trendingMoviesPage/TrendingMoviesPage"
import GenresPage from "./pages/genresPage/GenresPage"
import DetailsPage from "./pages/detailsPage/DetailsPage"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="start" element={<StartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="trending" element={<TrendingMoviesPage />} />
        <Route path="genres" element={<GenresPage />} />
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
