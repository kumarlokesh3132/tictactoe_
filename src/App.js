import React,{useState} from 'react';
import Board from './Components/Board';
import {calculateWinner} from './helper';
import './Styles/root.scss'

const App = () => {
  
    const [board,setboard]=useState(Array(9).fill(null))
    const [isNext,setisNext]=useState(0)
    const winner=calculateWinner(board)
    const message=winner ? `winner is ${winner}`:`Next playe is ${isNext ? 'X':'O'}`
    const handlesquare=(position)=>
    {
     if(board[position])
     {
       return 0;
     }
     
     setboard((prev) => {
       return prev.map((square,posv)=>{
         if(posv === position){
           return isNext ? 'X': 'O';
         }
         return square;
       })
       }) 
     setisNext((prev)=>{
      if(prev===0)
      {
        return 1;
      }
      return 0;
     })
    }
  return (
    <div className='app'>
      <h1>TIC-TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handlesquare={handlesquare} />
      
    </div>
  )
}

export default App

