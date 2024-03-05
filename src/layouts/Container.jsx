import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Container() {
  return (
    <div className='px-4'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container;
