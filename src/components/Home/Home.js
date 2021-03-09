import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SingleCountry from '../SingleCountry/SingleCountry';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <Container>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            
                <SingleCountry></SingleCountry>
            
        </Container>

    );
};

export default Home;