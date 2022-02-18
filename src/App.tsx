import Site from './components/site/Site';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Site />
    </Router>
  );
}

export default App;
