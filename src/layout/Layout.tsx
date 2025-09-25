import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'
import useMovies from '../functions/Functions'
import StartScreen from '../components/startScreen/StartScreen'

export default function Layout() {
  const { displayScreen, setDisplayScreen } = useMovies()

  if (displayScreen === 'loading') {
    return <Loader />
  }

  if (displayScreen === 'start') {
    return <StartScreen onClick={() => setDisplayScreen('home')} />
  }

  return (
    <>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </>
  )
}
