import React from 'react'
import DownloadBar from './DownloadBar';
import play from '../assets/play-circle.png';
import circleFrames from '../assets/circle-frames.png'

const PaymentSolutions = () => {
  return (
    <div className='paymentBox'>
        <h1>Reliable Payment Solutions for<br/> International Education</h1>
        <p>The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
        <div className='icon-bar'> 
         <DownloadBar/> <div className='watch-demo'>Watch Demo <img src={play} alt="" /></div>
         </div>
         <div className='circF'>
            <img src={circleFrames} alt="" /> <p>Trusted by 3k+ Students Globally</p></div>
    </div>
  )
}

export default PaymentSolutions