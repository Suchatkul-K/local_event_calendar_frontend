import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import AuthContextProvider from '../features/auth/context/AuthContext';
import MenuBar from './MenuBar';
import HeaderMobile from './HeaderMobile';

function Container() {
  return (
    <div className='min-h-dvh flex flex-col bg-primary md:bg-white'>
      <div className='hidden md:block'>
        <NavBar />
      </div>
      <div className='md:hidden'>
        <HeaderMobile />
      </div>
      <div className='bg-white m-[0.1rem] rounded-2xl h-[calc(100vh-127px)] overflow-scroll no-scrollbar md:hidden pb-[6rem]'>
        <Outlet />
      </div>
      <div className='hidden md:block'>
        <Outlet />
      </div>
      <div className='hidden md:block'>
        <Footer />
      </div>

      <MenuBar />
    </div>
  );
}

export default Container;
