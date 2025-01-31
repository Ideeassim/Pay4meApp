import NavBar from "./components/NavBar"
import PaymentSolutions from "./components/PaymentSolutions"
import './App.css'
import girl from './assets/girl.png'
import brands from './assets/brands.png'
import data from './data'
import demo from './assets/pay4me.png'
import Features from "./components/Features"
import MiniDownload from "./components/miniDownload"
import HowItWorks from "./components/HowItWorks"
import SimplePayments from "./components/SimplePayments"
import testimonials from './assets/Testimonials.png'
import Accordion from "./components/Accordion"
import portrait from './assets/portrait.png'
import download from './assets/Download-app.png'
import footer from './assets/Footer.png'



function App() {


function CreateCard(data) {
  return (
    <div className="mini-feat">
  <Features
  key={data.id}
  X={data.img}
  heading={data.heading}
  para={data.narration}  
  />
  <hr />
  <MiniDownload/>
  </div>)
}

  return (
    <div className="App">
        <NavBar />
        <PaymentSolutions />
        <img src={girl} alt="" height={400} />
        <img src={brands} alt="" height={70}  />
        <div className="truly-box">
          <h2>What Truly sets us apart</h2>
          <div className="feat-card">{data.map(CreateCard)}</div>
        </div>
        <HowItWorks/>
        <SimplePayments/>
        <img src={demo} height={400}/>
        <img src={testimonials} alt="" height={500}/>
        <div>
          <h2>Got Questions?</h2>
          <p>We’ve got answers</p>
          <div className="acc-port">
            <img src={portrait} height={290}/>
            <Accordion/>
          </div>          
        </div>
        <img src={download} height={450}/>
        <img src={footer} alt="" height={400}/>
    </div>
  )
}

export default App
