import React from 'react'

const Features = (props) => {
  return (
    <div>
        <img src={props.X} alt="" />
        <h3>{props.heading}</h3>
        <p>{props.para}</p>
    </div>
  )
}

export default Features