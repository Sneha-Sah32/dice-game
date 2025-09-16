import React from 'react'
import { useState } from 'react';

export default function Section2(click) {
    const [selectedNumber,setSelectedNumber]=useState(null);
    const[score,setScore]=useState(0);
    const[roll,setRoll]=useState(1);
    const[rules,setRules]=useState(false);

      const handleSelect=(num)=>{
    setSelectedNumber(num);
  };

  const handleRoll=()=>{
    const value=Math.floor(Math.random()*6)+1;
    setRoll(value);

    if(selectedNumber === value){
      setScore(score+10);
    }else{
      setScore(score-2);
    }
  }

  const handleReset=()=>{
    setScore(0);
    setSelectedNumber(null);
    setRoll(1);
    setRules(false);

  }


  return (
    <div>
      <nav className="navbar">
        <div className="side1">
            <h1>{score}</h1>
            <h2>Total Score</h2>
            
        </div>
        <div className="side2">
            {/* <button onClick={()=>handleSelect(1)} id='selection'>1</button>
            <button onClick={handleSelect} id='selection'>2</button>
            <button onClick={handleSelect} id='selection'>3</button>
            <button onClick={handleSelect} id='selection'>4</button>
            <button onClick={handleSelect} id='selection'>5</button>
            <button onClick={handleSelect} id='selection'>6</button> */}


            {[1,2,3,4,5,6].map((num)=>(
              <button key={num} onClick={()=>handleSelect(num)} id='selection' className={selectedNumber===num?"active":""}>{num}</button>
            ))}


            <h4>Select Number</h4>
            <h3>You have selected: {selectedNumber}</h3>
        </div>
      </nav>


      <div className="body">
        {/* <img src="/images/dice/dice_1.png" alt="cubeimg1" />
        <img src="/images/dice/dice_2.png" alt="cubeimg2" />
        <img src="/images/dice/dice_3.png" alt="cubeimg3" />
        <img src="/images/dice/dice_4.png" alt="cubeimg4" />
        <img src="/images/dice/dice_5.png" alt="cubeimg5" />
        <img src="/images/dice/dice_6.png" alt="cubeimg6" /> */}

        <img src={`/images/dice/dice_${roll}.png`} alt={`dice-${roll}`} onClick={handleRoll} />
        <h4>Click on Dice to roll</h4>


        <button onClick={handleReset} className='reset'>Reset Score</button><br/><br/>


        <button onClick={()=>setRules(!rules)} className='rules'>{rules ? "Hide Rules" : "Show Rules"}</button>

        {rules && (
          <div className="rules-text">
            <p>🎲 Select a number between 1-6.</p>
            <p>🎯 Roll the dice.</p>
            <p>✅ If your guess matches the dice, +10 points.</p>
            <p>❌ If wrong, -2 points.</p>
          </div>
        )}
      </div>
    </div>
  )
}
