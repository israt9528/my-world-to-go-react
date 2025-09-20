import React, { useState } from 'react';
import './Country.css'
const Country = ({country,  handleVisitedCountries,handleCountriesFlag}) => {
    
    const {name,flags,population,capital,area} = country;

    const [visited, setVisited] = useState(false);

    const handleClick = () => {
         setVisited(visited ? false : true);  
          handleVisitedCountries(country);      
    }
    const [flagsState, setFlags] = useState(false);
    const handleFlags = () => {
          setFlags(!flagsState);
          handleCountriesFlag(country);
    }

    return (
        <div className='country'>
            <h3 style={{margin:0}}>Name: {name.common} </h3>
            <p>Capital: {capital.capital}</p>
            <p>Area: {area.area} 
                {area.area>300000 ? '--Big country' : '--Small county'} 
            </p>
            <p>Population: {population.population}</p>
            <img src={flags.flags.png} alt={country.flags.flags.alt} />
            <button onClick={handleClick} 
            className={`${visited && 'visited-country'}`}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={handleFlags}
            className={`${flagsState && 'country-flag'}`}>
                {flagsState ? 'Flag Added' : 'Add Visited Flags'}
            </button>
        </div>
    );
};

export default Country;