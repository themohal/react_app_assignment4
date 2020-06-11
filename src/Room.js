import React,{ useState } from 'react';
import './Room.css'

function Room() {
    let [isLit,setLit]= useState(true);    
    let [temp,setTemp] = useState(72);

    //const isLit = useState[0];
    //const setLit = useState[1];
    //console.log(isLit);
    //below function called upon onClick button event

    function turnOnLit(){
        console.log("Button Clicked");
        setLit(1);
        
    }
    function turnOffLit(){
        console.log("Button Clicked");
        setLit(0);
    }
    
    
  return (
    
    <div>
       
      <div className={`room ${isLit ? "lit" : "dark"}`}>
      <br/>
    <div>The Component is : {isLit ? "Lit" : "Dark"}</div>
    <br/>  
      <button className="buttonOn" onClick={turnOnLit}>ON</button>
      <button className="buttonOff" onClick={turnOffLit}>OFF</button>
      <br/>
      <br/>
    <div>The room temperature : {temp}</div>
    <br/>
    <button className="buttonIncreaseTemp" onClick={()=>{setTemp(++temp)}}><strong>+</strong></button>
    <button className="buttonDecreaseTemp" onClick={()=>{setTemp(--temp)}}><strong>-</strong></button>
    <br/>
    <br/>
    <br/>
    <div className="buttonOff"><strong>Developed by Muhammad Farjad Ali Raza</strong></div>
    </div>
    </div>
    
  );
}
export default Room;
