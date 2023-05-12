import React, { useEffect, useState } from 'react';
import './Container.css';
import logo from '../images/logo.png';
import Exercise from '../Exercise/Exercise';
import Details from '../Details/Details';
import {addBreakTimeToLs, addExerciseTimeToLs, getStoredBreakTime, getStoredExerciseTime} from '../utilities';

const Container = () => {
    const [exercises, setExercises] = useState([]);
 
    
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    
    useEffect(()=>{
   /* display previous time */
    const storedExerciseTime = getStoredExerciseTime();
    const timeExerciseTime = document.getElementById('total-ex-time');
    timeExerciseTime.innerText = storedExerciseTime;
    console.log(timeExerciseTime);

    const storedBreakTime = getStoredBreakTime();
    const inputBreakTime = document.getElementById('break-time-show');
    inputBreakTime.innerText = storedBreakTime;
    },[exercises])

let storedSelectedExercise =[];
const handleAdd =(selectedExercise)=>{
    storedSelectedExercise.push(selectedExercise);
    // console.log(storedSelectedExercise);
    const timeExerciseTime = document.getElementById('total-ex-time');
    let time = 0;
    for(var i= 0; i < storedSelectedExercise.length; i++){
        time = time + parseInt(storedSelectedExercise[i].time_require);
    }
    timeExerciseTime.innerText = time;
    // console.log(timeExerciseTime)
    /* add to local storage */
    addExerciseTimeToLs(time);
}

/* Exercise btn::::: */

const addBreakTime =(id) =>{
    const inputBreakTime = document.getElementById('break-time-show');
    const breakTimeFeild = document.getElementById(id);
    const setBreakTime = breakTimeFeild.innerText ;
    inputBreakTime.innerText = setBreakTime;

    /* add to local storage */
    addBreakTimeToLs(setBreakTime);
    // console.log(addTimeToLs)
}

    return (
        <div className='whole-container'>
            <div className="exercise-container">
            <header>
            <img src={logo} alt="" />
            <h2>Do-exercise-set-young</h2>
            </header>
            <h3>Select today’s exercise</h3>
               <div className='card-container'>
                {
                    exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} handleAdd={handleAdd}></Exercise>)
                }
               </div>
            </div>

       <div className="details-container">
        <div>
            {
                <Details addBreakTime ={addBreakTime}></Details>
            }
        </div>
       </div>
        </div>
    );
};

export default Container;