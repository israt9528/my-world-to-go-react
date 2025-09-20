import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({countriesData}) => {
    const countries = use(countriesData);
    const countriesInfo = countries.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);
    
    const handleVisitedCountries = (country) => {
       const updateCountries = [...visitedCountries, country];
    setVisitedCountries(updateCountries);
    }

const [countriesFlag, setCountriesFlag] = useState([]);
const handleCountriesFlag = (country) => {
    const addCountriesFlag = [...countriesFlag, country];
    setCountriesFlag(addCountriesFlag);
};


    return (
        <div>
            <h1>Countries Container: {countriesInfo.length}</h1>
            <p>Visited Countries: {visitedCountries.length}</p>
            <ol>
                {
                visitedCountries.map(country => 
                <li  key={country.ccn3.ccn3}>
                    {country.name.common}
                </li>)

                }
            </ol>
            <div>
                {
                    countriesFlag.map(flags => 
                    <img src={flags.flags.flags.png} 
                        style={{width:100}}>
                    </img>)
                }
            </div>
            <div className='countries'>
                {
                    countriesInfo.map(country => <Country 
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}
                        handleCountriesFlag={handleCountriesFlag}
                        >
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;