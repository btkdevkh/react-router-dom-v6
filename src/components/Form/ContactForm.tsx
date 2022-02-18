import { Button, Form } from 'react-bootstrap'

export default function ContactForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nom" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control as="textarea" placeholder="Message" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  )
}
