import React from 'react';
import Square from'./Square'

      function Board({board,handlesquare}) {
     const rendersquare=(position)=>
     {return(
      <Square value={board[position]} onClick={()=>handlesquare(position)}/>
     )
     }
     
  return (
    <div className='board'>
      <div className='board-row'>
      {rendersquare(0)}
      {rendersquare(1)}
      {rendersquare(2)}      
      </div>
      <div className='board-row'>
      {rendersquare(3)}
      {rendersquare(4)}
      {rendersquare(5)}
      </div>
      <div className='board-row'>
      {rendersquare(6)}
      {rendersquare(7)}
      {rendersquare(8)}
      </div>
      
    </div>
  )
}

export default Board
