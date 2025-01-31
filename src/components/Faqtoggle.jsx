import { React, useState } from "react"


const Faqtoggle = (props) => {
    const[toggleState, setState]=useState(false)

function changeState() {
    return setState(prevValue =>{
        return !prevValue;
    })
}
  return (
    <div >
        <div className="Acc"><h5>{props.Q}</h5><p onClick={changeState}>{toggleState ? '-':'+' }</p></div>
        <p style={{display: toggleState? 'block': 'none'}}>{props.Ans}</p>
    </div>
  )
}

export default Faqtoggle