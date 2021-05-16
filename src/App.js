import React,{useState} from 'react'
import Board from './Components/Board'
import { calculateWinner } from './helper'
import './Styles/root.scss'

const App = () => {
  const [initial,update]=useState(Array(9).fill(null))
  const [isnext,updatenext]=useState(1)
  const winner=calculateWinner(initial)
  const message=winner ? `winner is ${winner}`:`next palyer is ${isnext ? 'X':'O'}`
  const clickfunc=(position) =>{
    if(initial[position] || winner){
      return 0;
    }
    update((prev)=>{
      return prev.map((start,index)=>{
        if(index===position)
        {
          return isnext ?'X': 'O';
        }
        return start;
      })
    })
    updatenext((prevs)=>{
      if(prevs===1)
      {
        return 0;
      }
       return 1;
    })
  }
  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board initial={initial} clickfunc={clickfunc} />
    </div>
  )
}

export default App
