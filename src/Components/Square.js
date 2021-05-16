import React from 'react'

const Square = ({values,onClick}) => {
  return (
    <button type='button' className='square' onClick={onClick}>{values}</button>
  )
}

export default Square


