import { Outlet } from 'react-router-dom';
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
      <div className='bg-white m-2 rounded-2xl  h-[45rem] overflow-scroll no-scrollbar md:hidden'>
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
