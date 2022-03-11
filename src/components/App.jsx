import logo from './logo.svg';
import './App.css';
import Display from './Display.jsx';
import ButtonsPanel from './ButtonsPanel.jsx';
import { useState } from 'react';
import Button from './Button';
import calculate from '../logic/logic.js';

 
function App() {


  
  const[value,setValue]= useState(0);
  const[done,setDone] = useState(false);

  function reset(){
    
  }
  function handleClick(buttonName,type){
    if(done){
      setValue(0);
      setDone(false);
    }
    console.log(done);
    console.log("in handleClick" + value);
    if(done){
      setValue(calculate(0,buttonName,type));
    }
    else{
      setValue(calculate(value,buttonName,type));
    }
    if(buttonName === "="){
      setDone(true);
    }
  }
  return (
    <div className="App">
     <Display value = {value} setValue = {setValue}/>,
     <ButtonsPanel value = {value+1} setValue = {setValue} handleClick = {handleClick} />
    </div>
  );

}
export default App;
