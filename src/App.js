import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu"]
let nainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu"]

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


  return (

    <div id= "learnmore"> 
       
    <div className='main'>
      <div id= "title"> <strong><p id="titleline"> The Evolution of 嫦娥 </p> </strong></div>

<h1><strong>The story of Chang'E 嫦娥</strong> </h1>

<u>1: </u>

<p>It is said that Chang E and Yi created a monogamous precedent, in honor of their descendants, the interpretation of the Moon story, there are more than folk legends and poetry of its spread. [6] in the myths and legends, Chang E due to stealing Yi from West Queen premises obtained the elixir and drinks it becoming immortal, living in the moon above the Moon Palace . Later Taoism in its mythology, and the Chang-e Luna too Yinxing Jun merged into one, monthly Taoist yin essence, known as the moon Huang Hua Suyao after St. yuan to Yinyuan Jun, also known as moon lunar Wong Jun filial piety Ming Wang, a goddess..</p>

<u>2:</u>

<p>Chinese feminists have by now carefully re-read and rewritten the story of goddess Chang E. In their words, the latter was not confined to living solitarily on the moon because she stole the pill of immortality from her husband Hou Yi (who later became the Sun-King). Rather, she chose to live on the moon because it was nearest the earth, and she was forced by circumstances to swallow the elixir to free herself from the threat of having to belong to a man craving for power and possession who asserted he had killed her husband.4 As long as the light of the moon is merely spoken of as having its birth in the sun, decreasing in proportion to its dis- tance from the solar ray, and being accordingly light or dark as the sun comes and goes, women will reject Woman.</p>





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
<img id="jconbutton"  src={(activate === "text2") ? nainContent[0] : nainContent[1]}  height="215" width="320" alt="valueeee"></img>
<img id="girstpic" src={(activate==="text3") ? nainContent[1] : nainContent[0]} height="300" width="200" alt="value"></img>
</p>
</div>


<div className = "dlickers">
  <div id= "whichversion"> <p id="mine"> Which version of the story of Chang'E do you want? </p>
  <button id = "text2" onClick={fcoMode}> <strong><p> Old 嫦娥! </p></strong></button>
  <button id = "text3" onClick={fcoMode}> <strong><p> New 嫦娥! </p></strong></button>
  </div>
  <p className ="fisplayco2">{(activate==="text2") ? "This version of Chang'E was written in the Ming Dynasty but a Chinese painter." : ""} {(activate==="text4") ? "This version of Chang'E was written by a number of Chinese feminist writers in the" : ""}</p>
  
</div></div></div>
  )
}



export default App;
