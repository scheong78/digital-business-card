import './App.css'
import Profile from "./assets/profile2.jpeg"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {

  return (
    <div className='card--wrapper'>
      <img src={Profile} className='card--img' />
      <div className="card--body">
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}

export default App
