import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import Button from '../global_components/Button';
import {
  MapIcon,
  CalendarIcon,
  ExploreIcon,
  ProfileIcon,
  MenuIcon,
} from '../icons';
import useAuth from '../features/auth/hooks/auth';
import DropdownProfile from '../global_components/DropdownProfile';
import { clearToken } from '../utils/local-storage';
import DrawerForNav from '../global_components/Drawer';

function NavBar() {
  const navigate = useNavigate();
  const allAuthObj = useAuth();
  const { authUser, setAuthUser } = allAuthObj;

  const logout = () => {
    setAuthUser(null);
    clearToken();
    toast.success('Logout');
  };

  return (
    <div className='flex items-center justify-between w-full text-base font-semibold bg-[#ffffff] px-4 py-2'>
      <div className=' '>
        <DrawerForNav>
          <MenuIcon />
        </DrawerForNav>
      </div>

      <div className='flex justify-center  translate-x-1/2'>
        <button
          onClick={() => navigate('/home')}
          type='button'
          className='font-bold text-xl'
        >
          LOGO
        </button>
      </div>

      {/* <div className='flex gap-2'>
        <div className='hidden xl:flex gap-2'>
          <div className=''>
            <MapIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
          <div className='flex flex-row'>
            <CalendarIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
          <div className='flex flex-row'>
            <ExploreIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
        </div>
      </div> */}
      <div className='flex  justify-end'>
        {authUser ? (
          <DropdownProfile logout={logout} />
        ) : (
          <Button onClick={() => navigate('/login')}>Login</Button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
