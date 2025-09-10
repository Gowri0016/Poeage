import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Webpages/Navbar';
import { Home } from './Webpages/Home';
import Getquotes from './Webpages/Getquotes';
import Notfound from './Webpages/Notfound';
import Aboutus from './Webpages/Aboutus';
import Ai from './Webpages/Ai';
import Web from './Webpages/Web';
import Appde from './Webpages/Appde';
import Soft from './Webpages/Soft';
import Cloud from './Webpages/Cloud'; 
import Contact  from './Webpages/Contact';
import { Group } from 'lucide-react';



export const Storage = () => {
  return (
    <>
    <Routes>
      <Route path='*' element={<Notfound/>}></Route>
        <Route path='/' element={<Navbar/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/quotes' element={<Getquotes/>}></Route>
        <Route path='/aboutus' element={<Aboutus />}></Route>
        <Route path='/ai' element={<Ai />}></Route>
        <Route path='/web' element={<Web />} ></Route>
        <Route path='/appde' element={<Appde />} ></Route>
        <Route path='/soft' element={<Soft />} ></Route>
        <Route path='/groups' element={<Group />} ></Route>
        <Route path='/cloud' element={<Cloud />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
    </Routes>
    </>
  )
}





