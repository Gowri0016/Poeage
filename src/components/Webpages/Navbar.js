import React from 'react';

import { Header } from './Header';
import { Home } from './Home';
import { Services } from './Services';
import Getquotes from './Getquotes';
import Footer from './Footer';

export const Navbar = () => {
  return (
    <>
      <div className="fixed w-screen h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-10" />
      </div>

      <div className="relative z-20 w-full overflow-x-hidden">
     
        <div className="w-full">
          <Header />
        </div>

        <div className="w-full">
          <Home />
        </div>

        <div className="w-full">
          <Services />
        </div>

        <div className="w-full">
          <Getquotes />
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};
