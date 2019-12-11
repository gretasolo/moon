import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["https://www.youtube.com/embed/P28mbaFf52g?autoplay=1&lpp=1&autopause=0", "http://bit.ly/2WYqaX0","https://ampr.gs/33zv8fh","http://bit.ly/2O5M32H"]

function App() {
  return (
  <div>
  <Profile/>
  </div>
  );
} 

function Profile(props) {

 const [activate, setActivate] = useState("");

 const videoRef = useRef();

 function ecoMode (e) {
   setActivate (e.target.id);
   console.log(e.target.id, activate);
 }
//  function handleScroll () {
//   setActivate (e.target.id);
//   console.log(e.target.id, activate);
// }


 //condition ? thingIfTrue : thingIfFalse
  return (
    
    <div className="main">
      <p>
      <iframe width="520" height="315" src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe>
      <img id="iconbutton" onClick={ecoMode} src={mainContent[1]} height="200" width="100" alt="value"/>
      <img id="firstpic" src={(activate==="firstpic") ? mainContent[2] : mainContent[3]} height="315" width="520" alt="value"></img>
      </p>
      </div>
    
    
    <div className="profilepage" >
      
      <div className="firstline">

      <button id="learn" onClick>Original Chang'E</button>
      <button id="chrome" onClick>New Chang'E</button>
      </div>

      <div id="vegan"> <img src= "https://www.artic.edu/iiif/2/1087c2b6-d3cc-1d44-1e71-aa89c3745476/full/1686,/0/default.jpg" height = "260" width = "260" />
      <div className= "text"> <strong><p> "The Lady of the Moon" </p></strong></div></div>
      </div>

      <div className="main">
      <div className = 'container'>
      <div class="video"><iframe class="iframe" src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe> </div>
      {/* <img id="ecopic" src="" width="350" alt="Download Icon Png Leaf" /> */}
      <div class="video"><iframe class="iframe"  src={mainContent[0]} frameborder="0" allow="autoplay" mute></iframe> </div>
      </div>
      
    
      <div className = "clickers">
        <div id= "canyou"> <p id="line"> Which version of Chang'E do you want? </p>
        <button id = "text1" onClick={ecoMode}> <strong><p> Version 1! </p></strong></button>
        <button id = "text2" onClick={ecoMode}> <strong><p> Version 2! </p></strong></button></div>
        <p className ="displayco2">{(activate==="text1") ? "This version of Chang'E was written by a number of Chinese feminist writers in the " : ""} {(activate==="text2") ? "The difference is that you are saving 50kg of CO2 with Ecomode on the right video" : ""}</p>
        <img id="iconbutton"  src={mainContent[1]} height="200" width="100" alt="value"/>
      </div>
     

     
      <div id= "learnmore"> 
       
        <h1><strong>Original Chang'E Story</strong> </h1>

        <u>Problem: </u>
 
        <p>The high amounts of data usage by data centers and the resulting carbon emissions in the environment. The unregulated amount of carbon emissions emitted per view of high-res videos and online media.</p>

        <u>Solution/ Business model:</u>

        <p>The creation of an application interface or program add-on that enables the user to conveniently shift between a low-energy consumption mode and the regular viewing setting of high-resolution videos and streaming content.</p>

        <p>Giving the users the freedom to choose to limit the amount of loadable content on their webpage through the “Eco-mode add-on”</p>
        
      </div>


      </div>
    </div>

     
    
  );
}



export default App;
