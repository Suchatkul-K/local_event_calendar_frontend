import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Container() {
  return (
    <div className=''>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container;
