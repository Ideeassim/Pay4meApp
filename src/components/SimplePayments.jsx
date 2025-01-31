import img1 from "../assets/simple1.png"
import img2 from "../assets/simple2.png"
import DownloadBar from "./DownloadBar"

const SimplePayments = () => {
  return (
    <div className="simp">
        <h2>Simplified Payments for Your Relocation Dreams</h2>
        <div className="simplified">
            <img src={img1} alt="" height={350}/>
            <img src={img2} alt="" height={350} />
        </div>
        <DownloadBar/>
    </div>
  )
}

export default SimplePayments