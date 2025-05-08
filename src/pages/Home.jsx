<<<<<<< HEAD
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
=======
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import AboutSociety from "../components/AboutSociety";
import Projects from "../components/Projects";
import Header from "../components/Header";
import Project from "../components/Project";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* <Hero/> */}
      <About />
      <AboutSociety />
      {/* <Projects/> */}
      <Project />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
>>>>>>> shailendar
