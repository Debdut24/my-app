import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
// import DarkMode from './components/DarkMode'
import About from './components/About'
import {
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  let [mode, setMode] = useState({
    color:'dark',
    backgroundColor:'light'
  });

  const toggleMode = ()=>{
    if(mode.color === 'dark'){
      setMode({
        color: 'light',
        backgroundColor:'dark'
      });
      document.body.style.backgroundColor = 'black';
      document.body.style.color= "white";
    }else{
      setMode({
        color:'dark',
        backgroundColor:'light'
      });
      document.body.style.backgroundColor = 'white'
      document.body.style.color= "black";
    };
    };

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Navbar title="NewHeading" mode = {mode} toggleMode={toggleMode}/>
      <TextArea heading="Enter your text here:" toggleMode={toggleMode}/>
      <About/> */}
      {/* <DarkMode/> */}
      <Navbar title="NewHeading" mode = {mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path='/' element={<TextArea heading="Enter your text here:" toggleMode={toggleMode}/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
