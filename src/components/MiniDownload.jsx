import barcode from '../assets/barcode.png'

const MiniDownload = () => {
  return (
    <div className='mini-download'> 
        <p>Download app</p>            
        <img src={barcode} alt=""  />                    
    </div>
  )
}

export default MiniDownload;