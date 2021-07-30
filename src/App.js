import React from 'react'
import './App.css';
import axios from 'axios'
import {Button} from 'react-bootstrap'
import Taks1 from './Components/Task1/Taks1';
import Task2 from './Components/Task2/Taks2'

function App() {
  const [task1, setTask1] =React.useState(true)
  const base_url = 'https://api.sampleapis.com/futurama/characters';
  const [characters,setCharacters] = React.useState([])
    React.useEffect(()=>{
      axios.get(base_url).then((res)=>{
        console.log(res.data);
        setCharacters(res.data);
      })
    },[])
  return (
    <div className="App">
      <header className="App-header">
          <div className="btn_container">
            <Button onClick={()=>{setTask1(true)}}>Task-1</Button>
            <Button onClick={()=>{setTask1(false)}}>Task-2</Button>
          </div>
          
      </header>
      <div className="tasks_container">
            {
              (task1 === true) ?(characters!== undefined) ? <Taks1 characterData={characters}/> :null:<Task2/>
              
            }
          </div>
    </div>
  );
}

export default App;
