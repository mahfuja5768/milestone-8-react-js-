import { } from 'react'
import Container from './components/Container/Container'
import './App.css'

function App() {

  return (
    <div className='app'>
      
      <Container></Container>
      {/* questions */}
      <div className='questions'>
        <ol>
          <li>
            <h2>How does react works ?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components.React components <br />  work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. <br />  It’s possible to have as many components as necessary without cluttering your code</p>
          </li>
          <li>
            <h2>Differences between props and state ?</h2>
            <p>State is owned locally and the component itself updates it. Props are owned and read-only by a parent.</p>
          </li>
          <li>
            <h2>Uses of useEffect ?</h2>
            <p>Running on state change:validating input field, live filtering, trigger animation on new array value.</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default App
