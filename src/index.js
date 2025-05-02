import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './css/index.css'
import { BrowserRouter } from 'react-router-dom';
import  DContext  from './components/Datacontext/Datacontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DContext>
    <BrowserRouter>
    <App/>
   </BrowserRouter>
  </DContext>
);



