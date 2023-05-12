import React, { useEffect, useState } from 'react';
import Country from '../Country/Country/Country';
import'./Countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([]);
  useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setcountries(data))
  },[]);

    return (
        <div>
            <h1>Hello From Country: {countries.length}</h1>
            <div className='countries-style'>
            {
              countries.map(country => <Country  country={country} key={country.cca3}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;