import { Outlet } from 'react-router-dom'
import Navbar from './Navbar_2'
import Footer from './Footer'


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default Layout