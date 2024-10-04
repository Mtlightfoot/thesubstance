// CSS Imports
import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Page imports
import Intro from './pages/Intro';
import Steps from './pages/Steps';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </Router>
  )
}

export default App
