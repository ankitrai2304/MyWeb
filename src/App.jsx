import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certificate from './sections/Certificate'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills/>
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
