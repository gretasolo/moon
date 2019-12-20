import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu"]
let nainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu"]
let painContent = ["http://bit.ly/2SdbCCy", "http://bit.ly/34bWvvu"]
let qainContent = ["http://bit.ly/2SdbCCy", "http://bit.ly/34bWvvu"]

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
function fcoMode (e) {
    setActivate (e.target.id);
 }
 function gcoMode (e) {
  setActivate (e.target.id);
}

  return (

    <div id= "learnmore"> 
       
    <div className='main'>
      <div id= "title"> <strong><p id="titleline"> The Evolution of 嫦娥 </p> </strong></div>

<h1><strong>The Story</strong> </h1>

一
<div id = "story1"><p>
It is said that Chang E waas married to Yi. Their story transformed into folk legends and poetry regarding the moon. In the myths and legends, Chang E stole a special elixir from Yi and drank it becoming immortal. It is said that she is trapped, living in the moon above the Moon Palace. It was known later on Taoist mythology, Hou Yi became the Sun King. </p>
</div>
二

<div id = "story1"><p>
  Chinese feminists have by now carefully re-read and rewritten the story of goddess Chang E. In their words, she was not confined to living solitarily on the moon because she stole the pill of immortality from her husband Hou Yi. Rather, she chose to live on the moon because it was nearest the earth, and she was forced by circumstances to swallow the elixir to free herself from the threat of having to belong to a man craving power and possession who asserted he had killed her husband. For as long as the light of the moon is merely spoken of as having its birth in the sun, decreasing in proportion to its distance from the solar ray, and being accordingly light or dark as the sun comes and goes, women will reject woman.</p>

  </div>

<h1><strong>Explore the Many Visions of Chang' E </strong> </h1>


      <div className= 'clickclack'>
      <p id= "piccos">
      <img id="iconbutton"  src={(activate === "text1") ? mainContent[0] : mainContent[1]}  height="215" width="320" alt="valueeee"></img>
      <img id="firstpic" src={(activate==="text2") ? mainContent[1] : mainContent[0]} height="300" width="200" alt="value"></img>
      </p>
      </div>
    
      <div className = "clickers">
        <div id= "canyou"> <p id="line"> Did Chang'E drink the elixir? </p>
        <button id = "text1" onClick={ecoMode}> <strong><p> Old 嫦娥! </p></strong></button>
        <button id = "text2" onClick={ecoMode}> <strong><p> New 嫦娥! </p></strong></button>
        </div>
        <p className ="displayco2">{(activate==="text1") ? "This version of Chang'E was written in the Ming Dynasty but a Chinese painter." : ""} {(activate==="text2") ? "This version of Chang'E was written by a number of Chinese feminist writers in the" : ""}</p>
        
      </div>
      </div>



<div className='nain'>

<div className= 'dlickdlack'>
<p id= "piccolo">
<img id="jconbutton"  src={(activate === "text3") ? nainContent[0] : nainContent[1]}  height="215" width="320" alt="valueeee"></img>
<img id="girstpic" src={(activate==="text4") ? nainContent[1] : nainContent[0]} height="300" width="200" alt="value"></img>
</p>
</div>


<div className = 'dlickers'>
  <div id= "xhichversion"> 
  
  <p id="mine"> Which version of the story of Chang'E do you want? </p>
  <button id = "text2" onClick={fcoMode}> <strong><p> Old 嫦娥! </p></strong></button>
  <button id = "text3" onClick={fcoMode}> <strong><p> New 嫦娥! </p></strong></button>
  </div>
  <p className ="fisplayco2">{(activate==="text2") ? "This version of Chang'E was written in the Ming Dynasty but a Chinese painter." : ""} {(activate==="text4") ? "This version of Chang'E was written by a number of Chinese feminist writers in the" : ""}</p>
  
  
 
</div></div>

<div className= 'elickelack'>
      <p id= "piccono">
      <img id="kconbutton"  src={(activate === "text5") ? painContent[0] : painContent[1]}  height="215" width="320" alt="valueeee"></img>
      <img id="hirstpic" src={(activate==="text6") ? painContent[1] : painContent[0]} height="300" width="200" alt="value"></img>
      </p>
      </div>
    
      <div className = "elickers">
        <div id= "eanyou"> <p id="nine"> Did Chang'Eeee drink the elixir? </p>
        <button id = "text5" onClick={ecoMode}> <strong><p> Old 嫦娥! </p></strong></button>
        <button id = "text6" onClick={ecoMode}> <strong><p> New 嫦娥! </p></strong></button>
        </div>
        <p className ="gisplayco2">{(activate==="text5") ? "This version of Chang'E was written in the Ming Dynasty but a Chinese painter." : ""} {(activate==="text2") ? "This version of Chang'E was written by a number of Chinese feminist writers in the" : ""}</p>
        
      </div>

  <div className= 'flickelack'>
  <p id= "piccopo">
  <img id="lconbutton"  src={(activate === "text7") ? qainContent[0] : qainContent[1]}  height="215" width="320" alt="valueeee"></img>
  <img id="hirstpic" src={(activate==="text8") ? qainContent[1] : qainContent[0]} height="300" width="200" alt="value"></img>
  </p>
  </div>

  <div className = "elickers">
    <div id= "eanyou"> <p id="oine"> Did Chang'Eeee frink the elixir? </p>
    <button id = "text7" onClick={ecoMode}> <strong><p> Old 嫦娥! </p></strong></button>
    <button id = "text8" onClick={ecoMode}> <strong><p> New 嫦娥! </p></strong></button>
    </div>
    <p className ="gisplayco2">{(activate==="text8") ? "This version of Chang'E was written in the Ming Dynasty but a Chinese painter." : ""} {(activate==="text2") ? "This version of Chang'E was written by a number of Chinese feminist writers in the" : ""}</p>
    
  </div></div>
  )
}



export default App;
