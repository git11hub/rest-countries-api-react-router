import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import SingleCountry from '../SingleCountry/SingleCountry';

const Home = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <Container>
            
            <Row>
                {
                    countries.map(country => <SingleCountry country={country}></SingleCountry>)
                }
            </Row>
        </Container>

    );
};

export default Home;