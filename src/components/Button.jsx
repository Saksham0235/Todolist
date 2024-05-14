import React from 'react'

function Button({title,size,handleClick}) {
    let {height,width}=size
  return (
   <button onClick={handleClick} className='common' style={{height:height,width:width}}>{title}</button>
  )
}

export default Button
