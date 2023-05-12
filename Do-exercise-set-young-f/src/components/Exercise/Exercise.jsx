import React, {} from 'react';
import './Exercise.css'

const Exercise = (props) => {
    // console.log(props);
    const {picture, name, description, for_age, time_require} = props.exercise;
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <div className='card-info'>
            <h2 className='card-name'>{name}</h2>
            <p>{description}</p>
            <p>For Age : <b>{for_age}</b></p>
            <p>Time Require : <b>{time_require} min</b></p>
            </div>
            <button onClick={()=> props.handleAdd(props.exercise)} className='card-btn'>
                <p>
                    Add to list
                </p>
            </button>
        </div>
    );
};

export default Exercise;