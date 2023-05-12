/* add to local storage::::: */

const addExerciseTimeToLs = (time) =>{
    const addToLs1= JSON.stringify(time);
    localStorage.setItem('Exercise-Time', addToLs1);
}
const addBreakTimeToLs = (time) =>{
    const addToLs= JSON.stringify(time);
    localStorage.setItem('Break-Time', addToLs);
}


const getStoredBreakTime = () => {
    let times = {};

    //get the shopping Time from local storage
    const storedTime = localStorage.getItem('Break-Time');
    if (storedTime) {
        times = JSON.parse(storedTime);
    }
    return times;
}
const getStoredExerciseTime = () => {
    let times = {};

    //get the shopping Time from local storage
    const storedTime = localStorage.getItem('Exercise-Time');
    if (storedTime) {
        times = JSON.parse(storedTime);
    }
    return times;
}


export {
    addExerciseTimeToLs,
    addBreakTimeToLs,
    getStoredExerciseTime,
    getStoredBreakTime
}