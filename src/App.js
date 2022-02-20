import './App.css';
import Moon from './assets/moon.png'
import Background from './assets/bg-dark.png'
import Background2 from './assets/bg-light.png'
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
import { useState } from 'react';
import Colors from './Component/Component';



function App() {

  const[darkmode,setDarkmode]=useState(false)

  return (
    <div style={{backgroundColor:darkmode?Colors.lightmode.background:Colors.darkmode.background}} className="App">
      <div className='Top'>
        <span className='Portfolio'>Portfolio</span>
        <img onClick={()=>setDarkmode(!darkmode)} src={Moon} />
      </div>
      <div className='Header'>
        <span style={{color:darkmode?Colors.lightmode.text:Colors.darkmode.text}} className='Greeting'>Hey there...</span>
        <div className='Name'>
          <span style={{color:darkmode?Colors.lightmode.text:Colors.darkmode.text}} className='Name-1'>it's</span>
          <span className='Name-2'>Athul Vishnu</span>
        </div>
        <span style={{color:darkmode?Colors.lightmode.text:Colors.darkmode.text}} className='Position'> Front End Developer & Designer</span>
      </div>
      <div className='Main'>
        <div style={{backgroundImage:darkmode?`url(${Background})`:`url(${Background2})`
        ,backgroundRepeat:"no-repeat",backgroundSize:"contain",
       marginRight:20,marginTop:20 ,}}
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
            <span style={{color:darkmode?Colors.lightmode.text:Colors.darkmode.text}} className='Knowledge-title'>Knowledge in:</span>
            <div className='Icons'>
            <a className='Icons-social'><img src={Html}/></a>
            <a className='Icons-social'><img src={Css}/></a>
            <a className='Icons-social'><img src={Js}/></a>
            <a className='Icons-social'><img src={React}/></a>
            <a className='Icons-social'><img src={Linux}/></a>
            <a className='Icons-social'><img src={Git}/></a>
            <a className='Icons-social'><img src={Sketch}/></a>
            <a className='Icons-social'><img src={Figma}/></a>
            <a className='Icons-social'><img src={Xd}/></a>
            <a className='Icons-social'><img src={Illustrator}/></a>
            </div>
          </div>
          <div className='Last-div'>
            <span style={{color:darkmode?Colors.lightmode.text:Colors.darkmode.text}} className='Lastspan'>Do Check My Works :</span>
            <div className='Work-div'>
              <div className='Works'>
             <a href=''> <img className='Work-icons'  src={GitHub}/></a>
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
