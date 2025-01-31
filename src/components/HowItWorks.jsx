import SimpleSteps from "./SimpleSteps"
import steps from "../stepsData"
import img1 from "../assets/steps1.png"
import img2 from "../assets/steps2.png"
import img3 from "../assets/steps3.png"
import img4 from "../assets/steps4.png"
import DownloadBar from "./DownloadBar"

const HowItWorks = () => {
  return (
    <div className="howItWorks">
        <h2>4 Simple Steps to Get Started</h2>
        <div className="gridbox">
          <SimpleSteps key={steps[0].id} id={steps[0].id} heading={steps[0].heading} narration={steps[0].narration} img={<img src={img1} height={100}/>}/>
          <SimpleSteps key={steps[1].id} id={steps[1].id} heading={steps[1].heading} narration={steps[1].narration} img={<img src={img2} height={100}/>}/>
          <SimpleSteps key={steps[2].id} id={steps[2].id} heading={steps[2].heading} narration={steps[2].narration} img={<img src={img3} height={100}/>}/>
          <SimpleSteps key={steps[3].id} id={steps[3].id} heading={steps[3].heading} narration={steps[3].narration} img={<img src={img4} height={100}/>}/>
                 
        </div>
        <DownloadBar/> 
    </div>
  )
}

export default HowItWorks