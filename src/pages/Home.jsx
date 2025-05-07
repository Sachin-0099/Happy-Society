import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import AboutSociety from '../components/AboutSociety';
import Projects from '../components/Projects';

const Home = () => {
  return (
  <>
  <Hero/>
    <About/>
    <AboutSociety/>
    <Projects/>
  </>
  )
}

export default Home
