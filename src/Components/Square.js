import React from 'react'

const Square = ({values,onClick,isWinningSquare}) => {
  return (
    <button type='button' className='square' onClick={onClick} style={{fontWeight: isWinningSquare? 'bold' : 'normal'}}>{values}</button>
  )
}

export default Square


