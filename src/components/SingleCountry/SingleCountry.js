import { Button, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleCountry = (props) => {
    const { name, flag, capital, population, region } = props.country;
    const history = useHistory();
    const showCountry = name => {
        const url = `name/${name}`;
        history.push(url);
    }
    // const countryByName = useState([]);
    return (
        <Col className='mt-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>Capital: {capital}</p>
                        <p>Population: {population}</p>
                        <p>Region: {region}</p>
                    </Card.Text>
                    <Button onClick={() => showCountry(name)} variant="primary">More...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCountry;