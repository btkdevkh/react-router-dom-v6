import { Card } from 'react-bootstrap'

type Props = {
  building: any
}

export default function Building(props: Props) {
  return (
    <>
      {
        props.building && (
          <Card style={{ width: '18rem', margin: '5px' }}>
            <Card.Header>{props.building.properties.nom}</Card.Header>
            <Card.Body>
              <Card.Title>{props.building.properties.telephone}</Card.Title>
              <Card.Text>
                {props.building.properties.adresses[0].lignes[0]}
                {props.building.properties.adresses[0].commune} {' '}
                {props.building.properties.adresses[0].codePostal}
              </Card.Text>
              {props.building.properties.url && <Card.Link href={props.building.properties.url} target="_blank">Visiter le site</Card.Link>}
              <br />
              <b>Horaires : </b>
              {
                props.building.properties.horaire &&
                props.building.properties.horaire.length > 0 &&
                props.building.properties.horaires.map((h: any, i: number) => (
                  <ul key={i}>
                    <li>
                      Du {h.du} au {h.au} de {h.heures[0].de} à {h.heures[0].a}
                    </li>
                  </ul>
                ))
              }
            </Card.Body>
          </Card>
        )
      }
    </>
  )
}
