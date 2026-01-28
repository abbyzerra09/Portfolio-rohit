import Header from './components/header'
import HeroSection from './components/Hero'
import About from './components/about' 
import Projects from './components/project'
import Marquee from './components/runningContainer'
import MouseTracking from './components/mouseTracking'


function App() {

  return (
    <>
    <MouseTracking/>
      <Header/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Marquee/>
    </>
  )
}

export default App