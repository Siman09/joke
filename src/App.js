
import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios'
function App() {
  const[jokes,setjokes]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    }).catch((error)=>{
    console.log(error);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
      <h1>Total Jokes:-{jokes.length}</h1>
       
            {jokes.map((joke)=>(
              <div key={joke.id}>
               <p>Jokes Name:{joke.name}</p>
               <p>Class Name:{joke.class}</p> 
              </div>
                  
            ))}
      
        
          
      </header>
    </div>
  );
}

export default App;
