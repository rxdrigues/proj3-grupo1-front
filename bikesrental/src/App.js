import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import Edicao from './components/pages/Edicao'
import Remocao from './components/pages/Remocao'
import Lista from './components/pages/Lista'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/edicao" element={<Edicao/>} />
            <Route path="/remocao" element={<Remocao/>} />
            <Route path="/lista" element={<Lista/>} />
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
