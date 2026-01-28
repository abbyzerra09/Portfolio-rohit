import Header from './components/header'
import HeroSection from './components/Hero'
import About from './components/about' 
import Projects from './components/project'
import Marquee from './components/runningContainer'
import MouseTracking from './components/mouseTracking'
import Education from './components/Education'
import Contact from './components/contact'


function App() {

  return (
    <>
    <MouseTracking/>
      <Header/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Marquee/>
      <Education/>
      <Contact/>
    </>
  )
}

export default App