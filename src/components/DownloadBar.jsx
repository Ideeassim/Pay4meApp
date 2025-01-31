import React from 'react'
import downloadIcon from '../assets/download-icon.png'
import line from '../assets/Line 142.png'
import appleIcon from '../assets/apple-icon.png'

const DownloadBar = () => {
  return (
    
        <div className='downloadBar'>          
            <p>Download app</p>
            <div className='icon-box'>
                <img src={downloadIcon} alt=""  /> 
                <img src={line} alt="" /> 
                <img src={appleIcon} alt="" /> 
           </div>
        </div>
    
  )
}

export default DownloadBar;  <div> </div>