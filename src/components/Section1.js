import React from 'react'

export default function Section1({toggle}) {
  return (
    <div className='board'>
      <div className="board1">
        <img src="/images/dices 1.png" alt="diceimg" />
      </div>
      <div className="board2">
        <h1>DICE GAME</h1>
        <button onClick={toggle} className="btn1">Play Now</button>
      </div>
    </div>
  )
}
