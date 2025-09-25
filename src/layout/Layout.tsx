import { Outlet, useMatch } from 'react-router'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Loader from '../components/loader/Loader'
import useMovies from '../functions/Functions'
import StartScreen from '../components/startScreen/StartScreen'

export default function Layout() {
  const { displayScreen, setDisplayScreen } = useMovies()

  // true, wenn wir uns auf details/:id befinden
  const isDetailsPage = useMatch('details/:id') !== null

  if (displayScreen === 'loading') {
    return <Loader />
  }

  if (displayScreen === 'start') {
    return <StartScreen onClick={() => setDisplayScreen('home')} />
  }

  return (
    <div className="bg-darkblue">
      {/* hideControls stammt aus Header.tsx zum Ausblenden von Suche/Genres */}
      <Header hideControls={isDetailsPage} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
