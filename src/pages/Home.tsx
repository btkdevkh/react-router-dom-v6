import Image from 'react-bootstrap/Image'
import bg from '../assets/img/bg.jpg'

export default function Home() {
  return (
    <div>
      <h1>Bienvenue</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt magni a commodi corporis, tenetur sunt similique numquam quos recusandae accusamus sed. Consequatur quo provident recusandae ipsam blanditiis placeat dolor.</p>

      <Image src={bg} fluid />
    </div>
  )
}
