import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import AboutSociety from '../components/AboutSociety';
import Projects from '../components/Projects';
import Header from '../components/Header';

const Home = () => {
  return (
  <>
  <Header/>

  {/* <Hero/> */}
    <About/>
    <AboutSociety/>
    {/* <Projects/> */}
  </>
  )
}

export default Home
