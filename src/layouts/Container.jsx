import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function Container() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Container;
