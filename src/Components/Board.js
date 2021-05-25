import React from 'react'
import Square from './Square'

const Board = ({initial,handleSquareClick, winningSquares}) => {
  


  const render=(position) => {
    const isWinningSquare = winningSquares.includes(position)
    return(
    <Square values={initial[position]} onClick={()=> handleSquareClick(position)} 
    isWinningSquare = {isWinningSquare}/>
    )
  }
  
  return (
    <div className='board'>
      <div className='board-row'>
       {render(0)}
       {render(1)}
       {render(2)}
      </div>
       <div className='board-row'>
       {render(3)}
       {render(4)}
       {render(5)}
      </div>
      <div className='board-row'>
       {render(6)}
       {render(7)}
       {render(8)}
      </div>
    </div>
    )
  
}

export default Board
