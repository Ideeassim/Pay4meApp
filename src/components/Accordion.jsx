import React from 'react'
import Faqtoggle from './Faqtoggle'
import faqtext from './faqtext'

const Accordion = () => {
  return (
    <div className="accordion">
        <Faqtoggle Q={faqtext.Q1} Ans={faqtext.Ans1} id='Q1'/>
        <Faqtoggle Q={faqtext.Q2} Ans={faqtext.Ans2} id='Q2'/>
        <Faqtoggle Q={faqtext.Q3} Ans={faqtext.Ans3} id='Q3'/>
        <Faqtoggle Q={faqtext.Q4} Ans={faqtext.Ans4} id='Q4'/>
    </div>
  )
}

export default Accordion