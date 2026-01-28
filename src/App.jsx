import Header from './components/header'
import HeroSection from './components/Hero'
import About from './components/about' 
import Projects from './components/project'
import Marquee from './components/runningContainer'
import MouseTracking from './components/mouseTracking'
import Education from './components/Education'
import Contact from './components/contact'
import Footer from './components/footer'


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
      <Footer/>
    </>
  )
}

export default App