import './App.css';
import Moon from './assets/moon.png'
import Background from './assets/bg-dark.png'
import Photo from './assets/photo.png'
import Gmail from './assets/gmail.png'
import Telegram from './assets/telegram.png'
import Twitter from './assets/twitter.png'
import Instagram from './assets/instagram.png'
import Behance from './assets/behance.png'
import Linkedin from './assets/linkedin.png'
import Html from './assets/html-5.png'
import Css from './assets/css.png'
import Js from './assets/js.png'
import React from './assets/structure.png'
import Linux from './assets/linux.png'
import Git from './assets/git.png'
import Sketch from './assets/sketch.png'
import Figma from './assets/figma.png'
import Xd from './assets/xd.png'
import Illustrator from './assets/illustrator.png'
import GitHub from './assets/github.png'
import Drive from './assets/google-drive.png'



function App() {
  return (
    <div className="App">
      <div className='Top'>
        <span className='Portfolio'>Portfolio</span>
        <img src={Moon} />
      </div>
      <div className='Header'>
        <span className='Greeting'>Hey there...</span>
        <div className='Name'>
          <span className='Name-1'>it's</span>
          <span className='Name-2'>Athul Vishnu</span>
        </div>
        <span className='Position'> Front End Developer & Designer</span>
      </div>
      <div className='Main'>
        <div style={{backgroundImage:`url(${Background})`
        ,backgroundRepeat:"no-repeat",backgroundSize:"contain",
        marginLeft:20,marginTop:20 ,}}
         className='Profile-pic'>
          <img src={Photo}/>
        </div>
        <div className='Details'>
          <div className='Social'>
            <img src={Gmail}/>
            <img src={Telegram}/>
            <img src={Twitter}/>
            <img src={Instagram}/>
            <img src={Behance}/>
            <img src={Linkedin}/>
          </div>
          <div className='Knowledge'>
            <span className='Knowledge-title'>Knowledge in:</span>
            <div className='Icons'>
            <img src={Html}/>
            <img src={Css}/>
            <img src={Js}/>
            <img src={React}/>
            <img src={Linux}/>
            <img src={Git}/>
            <img src={Sketch}/>
            <img src={Figma}/>
            <img src={Xd}/>
            <img src={Illustrator}/>
            </div>
          </div>
          <div className='Last-div'>
            <span className='Lastspan'>Do Check My Works :</span>
            <div className='Work-div'>
              <div className='Works'>
             <a> <img className='Work-icons'  src={GitHub}/></a>
              </div>
              <div className='Works'>
                <a><img className='Work-icons' src={Drive}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
