import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import AuthContextProvider from '../features/auth/context/AuthContext';
import MenuBar from './MenuBar';
import HeaderMobile from './HeaderMobile';

function Container() {
  return (
    <div className='min-h-dvh flex flex-col bg-primary'>
      {/* <NavBar /> */}
      <HeaderMobile />
      <div className='bg-white m-2 rounded-2xl  h-[45rem] overflow-scroll no-scrollbar'>
        <Outlet />
      </div>
      {/* <Footer /> */}
      <MenuBar />
    </div>
  );
}

export default Container;
