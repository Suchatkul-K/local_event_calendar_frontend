import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import AuthContextProvider from '../features/auth/context/AuthContext';

function Container() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Container;
