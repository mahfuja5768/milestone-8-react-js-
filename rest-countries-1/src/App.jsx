import { useEffect, useState } from 'react'
import './App.css'
import Person from './components/Person/Person'

function App() {
  
  return (
    <div className='App'>
      <Person></Person>
      <LoadCountries></LoadCountries>
    </div>
  )
}

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
  return(
    <div>
      <h2>Welcome to world tour!</h2>
      <p>Available Countries: {countries.length}</p>
      {
        countries.map(coutry => <Country name={coutry.name.common} flag={coutry.flags.png} startOfWeek={coutry.startOfWeek}></Country>)
      }
     
    </div>
  )
}

function Country (props){
  return(
    <div style={{border:'2px solid brown', margin:'15px', padding:'10px'}}>
      <h3>Name: {props.name}</h3>
      <h3>Flags: {props.flag}</h3>
      <h4>StartOfWeek: {props.startOfWeek}</h4>
    </div>
  )
}

export default App
