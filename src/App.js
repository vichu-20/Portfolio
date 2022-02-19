import './App.css';
import Moon from './assets/moon.png'
import Background from './assets/bg-dark.png'
import Photo from './assets/photo.png'

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
          <div className='Social'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
