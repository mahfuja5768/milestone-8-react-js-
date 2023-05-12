import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  return (
    <div className='App'>
      <ExternalComments></ExternalComments>
    </div>
  )
}

function ExternalComments(){
  const [comments, setComments] = useState([]);
  // useEffect(()=>{}, [])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data))

  }, []);
  return (
    <div>
      <h1>External comments</h1>
      <p>Comments Data Length : {comments.length}</p>
      {
        comments.map(comment => <Comment name={comment.name} body={comment.body}></Comment>)
      }
    </div>
  )
}

function Comment(props){
  return(
    <div style={{border: '2px solid red', margin:'15px', padding:'10px'}}>
      <h3>Name: {props.name}</h3>
      <p>Description: {props.body}</p>
    </div>
  )
}

// function App() {
  
//   return (
//     <div className='App'>
//       <ExternalUsers></ExternalUsers>
//     </div>
//   )
// }

// function ExternalUsers(){
//   const [users, setUsers] = useState([]);
//   // useEffect(()=>{}, [])
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data))

//   }, []);
//   return (
//     <div>
//       <h1>External Users</h1>
//       <p>Users Data Length : {users.length}</p>
//       {
//         users.map(user => <User name={user.name} email={user.email}></User>)
//       }
//     </div>
//   )
// }

// function User(props){
//   return(
//     <div style={{border: '2px solid red', margin:'15px', padding:'10px'}}>
//       <h3>Name: {props.name}</h3>
//       <h3>Email: {props.email}</h3>
//     </div>
//   )
// }

// function App() {
  
//   return (
//     <div className='App'>
//       <Counter></Counter>
//     </div>
//   )
// }

// function Counter(){
//   const [count, setCount]= useState(0);
//   const increaseCount = () =>setCount(count + 1);
//   const decreaseCount = () =>setCount(count -1);
//   // const increaseCount = () =>{
//   // const newCount = count + 1;
//   // setCount(newCount);
//   // }
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount} className='container'>Increase</button>
//       <button onClick={decreaseCount} className='container'>Decrease</button>
//     </div>
//   )
// }

// // const singers = ['a', 'b', 'c', 'd']
// const singers =[
//   {name: 'Myra', job: 'std'},
//   {name: 'Muna', job: 'backend developer'},
//   {name: 'Barbiul', job: 'backend developer'},
//   {name: 'Muna', job: 'backend developer'},
//   {name: 'Robi', job: 'developer'},
//   {name: 'Muna', job: 'backend developer'},
// ]
// const  singerStyle ={
//   display:'grid',
//   gridTemplateColumns:'repeat(3, 1fr)'
// }
// function App() {
  
//   return (
//   //  <div className='App' style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)'}}>{/* style inline */}
//    <div className='App' style={singerStyle}>{/* style apart*/}
//      {
//       // singers.map(singer => <li className='container'>Name: {singer}</li>)
//       singers.map(singer => <Person name={singer.name} job={singer.job}></Person>)
//      }
//    </div>
//   );
// }

// function Person(props){
//   return (
//     <div className='container'>
//       <h1>Name: {props.name}</h1>
//       <h2>Job: {props.job}</h2>
//     </div>
//   )
// }

export default App
