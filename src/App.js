import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About.jsx';
import Home from './components/Home.jsx';
import WeatherInfo from './components/WeatherInfo.jsx';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
               <Nav.Link href="/weather">Weather</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/weather" element={<WeatherInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
