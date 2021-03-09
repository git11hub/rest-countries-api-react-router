import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { country } = useParams();
    const [countryInfo, setCountryInfo] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${country}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryInfo(data[0]))
    }, [country]);
    
    // console.log(country);
    const { flag, name, capital, area, population } = countryInfo;

    return (
        <div>
            <img src={flag} alt=""/>
            <h1>Here is country details of {country}:</h1>
            <h3>Country: {name}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>            
        </div>
    );
};

export default CountryDetails;