import React from 'react'

const SimpleSteps = (props) => {
  return (
    <div className='steps'>
        <p>{props.id}</p>
        <h2>{props.heading}</h2>
        <p>{props.narration}</p>
        <p>{props.img}</p>
    </div>
  )
}

export default SimpleSteps;