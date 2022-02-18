import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap";
import Building from "../components/Building/Building";

let URL = 'https://etablissements-publics.api.gouv.fr/v3/departements/09/'

const buildings = [
  {
    title: 'Mairie',
    value: 'mairie'
  },
  {
    title: 'Commissariat police',
    value: 'commissariat_police'
  },
  {
    title: 'Pole emploi',
    value: 'pole_emploi'
  },
  {
    title: 'Préfecture',
    value: 'prefecture'
  },
]

export default function Localisation() {
  const [originBuildings, setOriginBuildings] = useState([])

  const searchBuildings = (type: string) => {
    fetch(URL + type)
      .then(res => res.json())
      .then(data => setOriginBuildings(data.features))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    searchBuildings("mairie")
  }, [])

  return (
    <div className="my-3">
      {
        buildings.map((b, i) => (
          <Button 
            key={i}
            variant="secondary" 
            className="me-1"
            onClick={() => searchBuildings(b.value)}
          >
            {b.title}
          </Button>
        ))
      }

      {/* Cards list */}
      <Row>
        {
          originBuildings &&
          originBuildings.length > 0 &&
          originBuildings.map((bui: any) => (
            <Col md={6} key={bui.properties.id}>
              <Building building={bui} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
