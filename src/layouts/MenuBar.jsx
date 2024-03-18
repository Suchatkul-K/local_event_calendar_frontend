import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  AddIcon,
  CalendarIcon,
  HearthIconOutline,
  HomeIcon,
  MapIcon,
  SearchIcon,
  SearchIconForMenuBar,
  SettingIcon,
} from '../icons';

import { clearToken } from '../utils/local-storage';
import useAuth from '../features/auth/hooks/auth';

export default function MenuBar() {
  const navigate = useNavigate();

  const allAuthObj = useAuth();
  const { authUser, setAuthUser } = allAuthObj;

  const logout = () => {
    setAuthUser(null);
    clearToken();
    toast.success('Logout');
  };
  return (
    <div className='flex items-center justify-around w-full text-base font-semibold bg-primary px-3 py-4 fixed bottom-0 z-10 md:hidden'>
      <div className='flex'>
        <Link to='/home'>
          <HomeIcon className='w-[2rem] h-[2rem]' />
        </Link>
      </div>

      <div className=''>
        <Link to='/explore'>
          <SearchIconForMenuBar className='w-[2rem] h-[2rem] fill-white' />
        </Link>
      </div>
      {authUser ? (
        <div>
          <Link to='/create-event'>
            <AddIcon className='h-[2rem] w-[2rem] fill-white ' />
          </Link>
        </div>
      ) : null}

      <div className=''>
        <Link to='/map'>
          <MapIcon className='h-[2rem] w-[2rem]' />
        </Link>
      </div>
      <div className=''>
        <Link to='/calendar'>
          <CalendarIcon className='w-[2.2rem] h-[2.2rem]' />
        </Link>
      </div>
    </div>
  );
}
