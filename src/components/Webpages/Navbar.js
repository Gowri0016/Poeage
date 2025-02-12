import React from 'react';
import backgroundVideo from '../../assest/7020018_Particle_Dot_3840x2160.mp4';
import { Header } from './Header';
import { Home } from './Home';
import { Services } from './Services'
import { Portfolio } from './Portfolio'
import { Testimonial } from './Testimonials'
import Getquotes from './Getquotes'
import Footer from './Footer';



export const Navbar = () => {
  return (
    <>

      <div className="fixed w-screen h-screen">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
          src={backgroundVideo}
          autoPlay
          loop
          muted
        ></video>

        {/* Dark Gradient Overlay */}
       
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-95 z-10"></div>
        
      </div>
      <Header />
      <Home />
      <Services />
      <Portfolio />
      
      <Testimonial />
     
      
      <Getquotes />
      <Footer/>
      
      
    </>
  );
};


