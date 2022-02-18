import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Routes } from 'react-router-dom'
import ContactForm from '../components/Form/ContactForm'

export default function Contact() {
  return (
    <>
      <h1>Contactez-nous</h1>

      <address>
        <b>Adresse</b>
        <p>xxxxxxxxxxxx</p>

        <b>Téléphone</b>
        <p>01 00 00 00 00</p>

        <b>Vous préférez nous écrire ?</b><br />
        <LinkContainer to={'form'}>
          <Button variant='primary'>Formulaire de contact</Button>
        </LinkContainer>
      </address>

      <Routes>
        <Route path={'form'} element={<ContactForm />} />
      </Routes>
    </>
  )
}
