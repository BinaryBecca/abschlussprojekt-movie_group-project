import { Outlet } from "react-router"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Loader from "../components/loader/Loader"
import useMovies from "../functions/Functions"

export default function Layout() {
  // const { loader } = useMovies()

  return (
    <>
      {/* <div>
        {loader ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
      </div> */}

      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </>
  )
}
