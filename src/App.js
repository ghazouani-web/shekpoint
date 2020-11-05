import logo from './logo.svg';
import './style.css';
import React from "react";
import ReactPlayer from 'react-player'




function App() {
  return (
    
<React.Fragment>
  <div  className='container' style={{border:'solid 1px Black' , maxWidth:'100vw'}}>

 <h1 className='title red'>Your name here</h1>

 <br/>

 <img src="/R.png"  alt="profile"/>

 <br/>

 <img src="/boo.jpg" />

</div>

<ReactPlayer url='https://www.youtube.com/watch?v=iUHtCKEZm8w'/>



</React.Fragment>



  );
}

export default App;
