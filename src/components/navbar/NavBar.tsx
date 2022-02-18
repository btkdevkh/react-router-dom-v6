import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function NavBar() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <LinkContainer to={'/'}>
        <Navbar.Brand className='ms-2'>RGBA</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-2' />
      <Navbar.Collapse id='basic-navbar-nav' className='ms-2'>
        <Nav className="me-auto">
          <LinkContainer to={'/'}>
            <Nav.Link>Accueil</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/localisation'}>
            <Nav.Link>Localisation</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/contact'}>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
