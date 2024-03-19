import { useNavigate, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import Button from '../global_components/Button';
import { BackIcon, RightArrowIcon } from '../icons';
import useAuth from '../features/auth/hooks/auth';
import DropdownProfile from '../global_components/DropdownProfile';
import { clearToken } from '../utils/local-storage';
import DrawerForNav from '../global_components/Drawer';
import logo from '../asset/pic/OurLogo.png';

function HeaderMobile() {
  const navigate = useNavigate();
  const allAuthObj = useAuth();
  const { authUser, setAuthUser } = allAuthObj;

  const location = useLocation();

  const { pathname } = location;

  const logout = () => {
    setAuthUser(null);
    clearToken();
    toast.success('Logout');
  };

  return (
    <div className='flex z-10 items-center justify-between w-full text-base font-semibold px-4 py-2 sticky top-0 '>
      {pathname !== '/home' ? (
        <button
          type='button'
          aria-label='Save'
          className='flex-1 '
          onClick={() => navigate(-1)}
        >
          {/* <DrawerForNav> */}
          <BackIcon className='w-[2rem] h-[2rem] fill-white' />
          {/* </DrawerForNav> */}
        </button>
      ) : null}

      <div className='flex justify-center w-[6.5rem]  text-white'>
        <button
          onClick={() => navigate('/home')}
          type='button'
          className='font-bold text-xl'
        >
          {' '}
          <img src={logo} alt='' />
        </button>
      </div>
      <div className='flex flex-1  justify-end pr-3'>
        {authUser ? (
          <DropdownProfile logout={logout} />
        ) : (
          <Button onClick={() => navigate('/login')}>LOGIN</Button>
        )}
      </div>
    </div>
  );
}

export default HeaderMobile;
