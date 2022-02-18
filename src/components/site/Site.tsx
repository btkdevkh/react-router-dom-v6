import { Routes, Route } from 'react-router-dom'
import Home from "../../pages/Home"
import Localisation from "../../pages/Localisation"
import Contact from "../../pages/Contact"
import NavBar from '../navbar/NavBar'
import { Container } from 'react-bootstrap'
import NotFound from '../../pages/NotFound'
import Footer from '../Footer/Footer'

export default function Site() {
  return (
    <>
      <div className="site">
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/localisation" element={<Localisation />} />
            <Route path="/contact/*" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </>
  )
}
