import React from 'react';
import Header from '../SharePage/Header'
import Footer from '../SharePage/Footer'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
          <Header/>  
          <Outlet/>
          <Footer/>
        </div>
    );
};

export default Main;