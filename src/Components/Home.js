import React from 'react';
import HeroBackground from './HeroBackground';
import Banner from './Banner'
import { Link } from 'react-router-dom';
import Services from './Services'
import FeaturedCars from './FeaturedCars'
import Intro from "./IntroSection";
import Brans from "./Brans";
import Footer from "./footer";
import MapPart from "./MapPart";


const Home = () => {
  return (

    <>
      <HeroBackground>
        <Banner title="Premium Motors   " subtitle="find your dream car here">
          <Link to="/cars" className="btn-primary">
            Our Cars
        </Link>
        </Banner>
      </HeroBackground>
        <Intro/>
        <Brans/>

      <Services />
      <FeaturedCars />
        <MapPart/>
        <Footer/>
    </>
  )
}



export default Home;