import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './Webpages/Navbar';
import Home  from './Webpages/Home';
import Getquotes from './Webpages/Getquotes';
import Notfound from './Webpages/Notfound';
import Aboutus from './Webpages/Aboutus';
import Ai from './Webpages/Ai';
import Web from './Webpages/Web';
import Appde from './Webpages/Appde';
import Soft from './Webpages/Soft';
import Cloud from './Webpages/Cloud'; 
import { Group } from 'lucide-react';
import Case from './Webpages/Case';
import Blog from './Webpages/Bolg';
import Work from './Webpages/Work';
import Hire from './Webpages/Hire';
import Faq from './Webpages/Faq';
import Helpcenter from './Webpages/Helpcenter';
import Term from './Webpages/Term-Condition';
import Privacypolicy from './Webpages/Privacypolicy';
import OurCompany from './Webpages/OurCompany';
import Serve from './Webpages/Serve';



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
        <Route path='/case-studies' element={<Case />} ></Route>
        <Route path='/blog' element={<Blog />} ></Route>
        <Route path='/how-it-works' element={<Work />} ></Route>
        <Route path='/hire' element={<Hire />} ></Route>
        <Route path='/faq' element={<Faq />} ></Route>
        <Route path='/help-center' element={<Helpcenter />} ></Route>
        <Route path='/terms' element={<Term />} ></Route>
        <Route path='/privacy' element={<Privacypolicy />} ></Route>
        <Route path='/work' element={<Work />} ></Route>
        <Route path='/our-company' element={<OurCompany />} ></Route>
        <Route path='/serve' element={<Serve />} ></Route>
    </Routes>
    </>
  )
}





