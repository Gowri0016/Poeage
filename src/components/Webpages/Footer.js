import React, { useContext } from "react";
import Twitter from '../../assest/twitter.png'
import Facebook from '../../assest/facebook.png'
import Linkedin from '../../assest/linkedin.png'
import Instagram from '../../assest/instagram.png'
import { DContext } from "../Datacontext/Datacontext";

const Footer = () => {
  const {navbar}=useContext(DContext)
  return (
    <footer className="text-white bg-black text-center lg:text-left relative p-2">
      
      <section className="container mx-auto py-10 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <div>
              <h6 className="uppercase font-semibold mb-4 text-xl">Products</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    Wep application 
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-blue-500">
                   Mobile Application (ios and Andorid)
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    E-com Application
                   
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    Travel Application
                  </a>
                </li>
              </ul>
            </div>

           
            <div>
              <h6 className="uppercase font-semibold mb-4 text-xl">Useful Links</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#!" className="hover:text-blue-500">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <div className="bg-gray-700 py-6">
        <div className="container mx-auto">
          <h6 className="uppercase font-semibold mb-4 text-center">Live Location</h6>
          <div className="flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9300.905047505299!2d77.54026110259773!3d11.440255099117984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93fe013ef4605%3A0xba11f0c512bc0213!2sAyyampalayam%2C%20Tamil%20Nadu%20638455!5e0!3m2!1sen!2sin!4v1736442655282!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
           
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <section className="py-4 bg-gray-900">
        <div className="container mx-auto flex justify-center space-x-4">
          <a href=" https://x.com/gpupdates26?t=IpSSd035jZL8w37wsSUN8w&s=08 ">
          <img src={Twitter} alt="loadind.." className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500"></img>
         
          </a>
         
          <a>
            
          <img src={Facebook} alt="loading..." className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500"></img>
          </a>
          <a href="https://www.instagram.com/gp_updates/?utm_source=qr&igsh=a3lncmZoZ21lZXVl#">
          <img src={Instagram} alt="" className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500"></img>
            
           
          </a>
          <a>
          <img src={Linkedin} alt="loading..." className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-blue-500"></img>
            
          
          </a>
        
        </div>
      </section>

      
      <div className="bg-gray-800 text-center py-4">
        <p>
        © 2023 Poeage.All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


