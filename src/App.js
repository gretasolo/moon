import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu","http://bit.ly/2Eb4jTx"]

function App() {
  return (
  <div>
  <Profile/>
  </div>
  );
} 

function Profile(props) {

 const [activate, setActivate] = useState("");

 function ecoMode (e) {
   setActivate (e.target.id);
 }

  return (
    <div className="main">
      <div id= "title"> <p id="titleline"> The Evolution of 嫦娥 </p> </div>
      <p>
      <img id="iconbutton"  src={(activate === "text1") ? "" : mainContent[1]}  height="200" width="100" alt="value"/>
      <img id="firstpic" src={(activate==="text2") ? "" : mainContent[2]} height="315" width="520" alt="value"></img>
      </p>
     
    
      <div className = "clickers">
        <div id= "canyou"> <p id="line"> Which version of the story of Chang'E do you want? </p>
        <button id = "text1" onClick={ecoMode}> <strong><p> Version 1! </p></strong></button>
        <button id = "text2" onClick={ecoMode}> <strong><p> Version 2! </p></strong></button>
        </div>
        <p className ="displayco2">{(activate==="text1") ? "This version of Chang'E was written by a number of Chinese feminist writers in the " : ""} {(activate==="text2") ? "The difference is that you are saving 50kg of CO2 with Ecomode on the right video" : ""}</p>
        
      </div>
      </div>
  );
}

export default App;
