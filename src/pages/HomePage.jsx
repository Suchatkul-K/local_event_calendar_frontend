import { Outlet } from 'react-router-dom';
import HomeContainer from '../features/home/components/HomeContainer';
import NavBar from '../layouts/NavBar';

function HomePage() {
  return (
    <div className='w-dvw'>
      <HomeContainer />
    </div>
  );
}

export default HomePage;
