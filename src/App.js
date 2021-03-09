import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <Container>
      <Router>
        <div>
          
          <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="*">No Match</Nav.Link>
                </Nav>
            </Navbar>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">

            </Route>
            <Route path="/users">

            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            {/* <Route path="*">
              <NoMatch />
            </Route> */}
            <Route path="/name/:country">
              <CountryDetails></CountryDetails>
            </Route>
          </Switch>
        </div>
      </Router>
      </Container>
  );
}

export default App;
