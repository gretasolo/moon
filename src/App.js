import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu"]

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
    <div className='main'>
      <div id= "title"> <strong><p id="titleline"> The Evolution of 嫦娥 </p> </strong></div>
      <div className= 'clickclack'>
      <p id= "piccos">
      <img id="iconbutton"  src={(activate === "text1") ? mainContent[0] : mainContent[1]}  height="215" width="320" alt="valueeee"></img>
      <img id="firstpic" src={(activate==="text2") ? mainContent[1] : mainContent[0]} height="300" width="200" alt="value"></img>
      </p>
      </div>
    
      <div className = "clickers">
        <div id= "canyou"> <p id="line"> Which version of the story of Chang'E do you want? </p>
        <button id = "text1" onClick={ecoMode}> <strong><p> Old 嫦娥! </p></strong></button>
        <button id = "text2" onClick={ecoMode}> <strong><p> New 嫦娥! </p></strong></button>
        </div>
        <p className ="displayco2">{(activate==="text1") ? "This version of Chang'E was written in the Ming Dynasty but a Chinese painter." : ""} {(activate==="text2") ? "This version of Chang'E was written by a number of Chinese feminist writers in the" : ""}</p>
        
      </div>
      </div>
  );
}

export default App;
