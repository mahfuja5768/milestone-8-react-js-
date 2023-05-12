import React from 'react';
import'./Country.css'
import Footer from '../../Footer/Footer';


const Country = (props) => {
    // console.log(props.country);
    const {name,area,population, independent, flags, startOfWeek} = props.country;
    // console.log(props.country.independent);
    return (
        <div className='country bg-secondary text-white p-4'> {/* using bootstrap */}
            <h2>Country Name: {name.common}</h2>
            <h2>Country area: {area}</h2>
            <h3>Population: {population}</h3>
            <p>Independent: {independent}</p>{/* can't see but why??? */}
            <p>startOfWeek: {startOfWeek}</p>
            <img src={flags.png} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Country;