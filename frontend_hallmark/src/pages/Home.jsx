import React from 'react'
import Hero from "../sections/Hero";
import AboutPreview from '../sections/AboutPreview';
import WhyChooseUs from '../sections/WhyChooseUs';
import Counters from '../sections/Counters';
import LoanCategories from '../sections/LoanCategories';

// import WhyChooseUs from "../sections/WhyChooseUs";


const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <AboutPreview />
      <LoanCategories />
      <WhyChooseUs />
      <Counters />
    </>
  )
}

export default Home