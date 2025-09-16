import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import { useState } from 'react';
// import Totalscore from './components/Totalscore';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);



  const toggleGameplay=()=>{
    setIsGameStarted((prev)=>(!prev));
   };




    return (
    <div className="App">
      {isGameStarted ? <Section2/>:<Section1 toggle={toggleGameplay}/>} 
      {/* <Totalscore/> */}
    </div>
  );
}

export default App;
