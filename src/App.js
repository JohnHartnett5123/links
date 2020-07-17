import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./Components/Todo";
import Word from "./Components/Word";
import Number from "./Components/Number";


function App() {
  const [color, setColor] = useState("")
  const [word, setWord] = useState([])
  const [number, setNumber] = useState([])
  const addNumber = (e) => {
    e.preventDefault()

    setWord([...number, { number }])

  }
  
  const addWord = (e) => {
    e.preventDefault()

    setWord([...word, { word }])

  }

  const [box, setBox] = useState([])
  const addBox = (e) => {
    e.preventDefault()

    setBox([...box, { color }])

  }
 


      return (
        <div className="container">
          <div className="jumbotron">
            <h1>Links</h1>
          </div>
          <div>
            
          </div>
          <form onSubmit={addBox}>

            <div className="formgroup">
              <input type="text" name="color" className="form-control"
                onChange={e => setColor(e.target.value)} value={color} />
                
                
            </div>
          </form>

          <form onSubmit={addWord}>

            <div className="formgroup">
              <input type="text" name="color" className="form-control"
                onChange={e => setWord(e.target.value)} value={word} />
                
                
            </div>
          </form>

          

          




          {box.map(please => <div  style={{ backgroundColor: please.color }}  >
            {please.color}
          </div>)}

          
          <Router>
            
            <Todo path="/color/:color" />
            <Word path="/word/:word" />
            <Number path="/number/:number"/>
            <More path="/:x/:y/:z"/>

          </Router>

          
      
          {word.map(please1 => <div  style={{ backgroundColor: please1.word }}  >
            {please1.word}
          
          </div>)}
          {number.map(please2 => <div  style={{ backgroundColor: please2.number }}  >
            {please2.number}
          
          </div>)}

        </div>

      );
    }
  
export default App;
