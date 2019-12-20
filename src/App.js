import React, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';

let mainContent = ["http://bit.ly/34iwwm0","http://bit.ly/34bWvvu"]
let nainContent = ["http://www.ancientpages.com/wp-content/uploads/2019/08/changemoongoddess11.jpg","https://1.api.artsmia.org/full/62539.jpg"]
let painContent = ["https://i.ibb.co/pQWQbSk/Screen-Shot-2019-12-20-at-1-47-38-AM.png", "http://www.silkqin.com/01mywk/themes/nvlopr/xxjw.gif"]
let qainContent = ["https://i.ibb.co/wSwjVcB/Screen-Shot-2019-12-20-at-2-02-55-AM.png", "https://i.ibb.co/7Ct9cFY/Screen-Shot-2019-12-20-at-2-03-07-AM.png"]

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
      <div id= "title"> <strong><p id="titleline"> 嫦娥 and Chinese 海落因 History </p> </strong></div>

<h1><strong>The Story</strong> </h1>

一
<div id = "story1"><p>
It is said that Chang E waas married to Yi. Their story transformed into folk legends and poetry regarding the moon. In the myths and legends, Chang E stole a special elixir from Yi and drank it under threat of a threatening male figure, then becoming immortal. It is said that she is trapped, living in the moon above the Moon Palace. It was known later on Taoist mythology, Hou Yi became the Sun King. </p>
</div>
二

<div id = "story2"><p>
  Chinese feminists have by now carefully re-read and rewritten the story of goddess Chang E. In their words, she was not confined to living solitarily on the moon because she stole the pill of immortality from her husband Hou Yi. Rather, she chose to live on the moon because it was nearest the earth, and she was forced by circumstances to swallow the elixir to free herself from the threat of having to belong to a man craving power and possession who asserted he had killed her husband. For as long as the light of the moon is merely spoken of as having its birth in the sun, decreasing in proportion to its distance from the solar ray, and being accordingly light or dark as the sun comes and goes, women will reject woman.</p>

  </div>

<h1><strong>Explore the Many Visions of Chang' E </strong> </h1>


      <div className= 'clickclack'>
      <p id= "piccos">
      <img id="iconbutton"  src={(activate === "text1") ? mainContent[1] : mainContent[1]}  height="215" width="320" alt="valueeee"></img>
      <img id="firstpic" src={(activate==="text2") ? mainContent[0] : mainContent[0]} height="300" width="200" alt="value"></img>
      </p>
      </div>
    
      <div className = "clickers">
        <div id= "canyou"> <p id="line"> Did Chang'E drink the elixir? </p>
        <button id = "text1" onClick={ecoMode}> <strong><p> No! </p></strong></button>
        <button id = "text2" onClick={ecoMode}> <strong><p> Yes! </p></strong></button>
        </div>
        <p className ="displayco2">{(activate==="text1") ? "As seen in this newer painting of Chang'E, she is floating, but it is her decision, to take the elixir and float up and live around the moon. She chose to live their because of lack of freedom on earth and she is not trapped inside." : ""} {(activate==="text2") ? "Yes. The older version as seen through this older painting demonstrates that she did take the elixier to become immortal, but it wasn't her choice, she wasn't forced via threat, and is trapped there 'til this day." : ""}</p>
        
      </div>
      </div>



<div className='nain'>

<div className= 'dlickdlack'>
<p id= "piccolo">
<img id="jconbutton"  src={(activate === "text3") ? nainContent[0] : nainContent[1]}  height="300" width="200" alt="valueeee"></img>
<img id="girstpic" src={(activate==="text4") ? nainContent[1] : nainContent[0]} height="300" width="200" alt="value"></img>
</p>
</div>


<div className = 'dlickers'>
  <div id= "xhichversion"> 
  
  <p id="mine"> Which version of the story of Chang'E do you want? </p>
  <button id = "text2" onClick={fcoMode}> <strong><p> Old 嫦娥! </p></strong></button>
  <button id = "text3" onClick={fcoMode}> <strong><p> New 嫦娥! </p></strong></button>
  </div>
  <p className ="fisplayco2">{(activate==="text2") ? "A lot of the original paintings capture the original story of 嫦娥. It is revealing of the view of women at the time of the myth, and the other writing, art, and sentiments at the time." : ""} {(activate==="text4") ? "New feminist takes on 嫦娥 allow us to reflect on the more confining view of women in the past, but use the historical myths to reshape how we define the future of women empowerment." : ""}</p>
  
  
 
</div></div>

<div className= 'elickelack'>
      <p id= "piccono">
      <img id="kconbutton"  src={(activate === "text5") ? painContent[0] : painContent[1]}  height="300" width="200" alt="valueeee"></img>
      <img id="birstpic" src={(activate==="text6") ? painContent[1] : painContent[0]} height="300" width="200" alt="value"></img>
      </p>
      </div>
    
      <div className = "elickers">
        <div id= "eanyou"> <p id="nine"> Is this Yiying or Chang'e? </p>
        <button id = "text5" onClick={ecoMode}> <strong><p> Yiying! </p></strong></button>
        <button id = "text6" onClick={ecoMode}> <strong><p> Chang'E! </p></strong></button>
        </div>
        <p className ="gisplayco2">{(activate==="text5") ? "Yes, Yiyinng. Yingying  is  the  heroine  in  one  of   China’s  most  famous  short  stories,  Yingying  zhuan  by  Yuan  Zhen,  but  Tang  Yin’s  painting  seems  to  derive  explicitly  from  the  representation  of   Yingying  in  Wang  Shifu’s  classic  drama Xixiang  ji. " : ""} {(activate==="text6") ? "No, this is Yiying, a new Chinese female heroine. Refresh and try again." : ""}</p>
        
        
      </div>

  <div className= 'flickelack'>
  <p id= "piccopo">
  <img id="lconbutton"  src={(activate === "text7") ? qainContent[0] : qainContent[1]}  height="300" width="200" alt="valueeee"></img>
  <img id="hirstpic" src={(activate==="text8") ? qainContent[1] : qainContent[0]} height="300" width="200" alt="value"></img>
  </p>
  </div>

  <div className = "elickers">
    <div id= "eanyou"> <p id="oine"> Learn more about Yiying. </p>
    <button id = "text7" onClick={ecoMode}> <strong><p> Xu  Wei's Version(1521-1593) </p></strong></button>
    <button id = "text8" onClick={ecoMode}> <strong><p> Zhao Bingwen's Version(1159–1232) </p></strong></button>
    </div>
    <p className ="gisplayco2">{(activate==="text7") ? "Xu  Wei  describes  Tang  Yin’s  original  portrait  of   Yingying  in  the  poem  “Tang  Bohu  Paints  Lady  Cui”  (Tang  Bohu  hua  Cui  shi):It  seems  as  though  I  am  meeting  that  person  waiting  for  the  moon. I  do  not  know  the  date  this  evening. The  drifting  clouds  were  always  dispersed  in  those  years  of   the  past.The  foreign  powder  transmits  emptily  the  beauty  of   her  half   face. It  is  difficult not to have an aged complexion after marriage. She  who  was  copied  in  the  painting  must  also  have  become  aged. Hutou  [Tang  Bohu]  was  also  a  womanizer. He  specically presents a beauty to move the common people.": ""} {(activate==="text8") ? "In  his  poem  “Stele  for  the Late Lord” (Xian gong bei), Zhao Bingwen (1159–1232) writes: “[ The Lord] also searched for [the person who wrote] the poem about waiting for the moon in the west chamber.”  In  this  case,  the  allusion  to  Yingying  is  unmistakable,  and  she  symbolizes  the  ideal  companion  desired  by  a  man." : ""}</p>
    
  </div>

<div id = "story3"><p>
I hope that by identifying these different "heroines" and trapped women in history, you can both appreciate past recollections of Chinese myths as well as look forward to building stronger women through storytelling of the past, present, and future. If you want to learn more I suggest future readings https://books.google.com/books/about/When_the_moon_waxes_red.html?id=Tw0bAQAAIAAJ https://epdf.pub/the-eternal-present-of-the-past-china-studies.html </p></div>
</div>
  )
}
//https://epdf.pub/the-eternal-present-of-the-past-china-studies.html
//5–7. Tang Yin (attributed). Portrait of  Yingying. Hou Zhenshang Zhai collection. Reproduced from Comprehensive Illustrated Catalog of  Chinese Paintings, Vol. 2: South-east  Asian  and  European  Collections,  edited  by  Suzuki  Kei,  II-2,  S  1-008.Tokyo: University of  Tokyo Press, 1982.HSIAO_f7-202-250.indd   2423/20/2007   1:47:01 PM



export default App;
