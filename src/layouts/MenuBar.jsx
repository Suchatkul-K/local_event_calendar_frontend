import { useNavigate, Link } from 'react-router-dom';
import {
  AddIcon,
  CalendarIcon,
  HomeIcon,
  MapIcon,
  SearchIconForMenuBar,
} from '../icons';

import useAuth from '../features/auth/hooks/auth';

export default function MenuBar() {
  const allAuthObj = useAuth();
  const { authUser, setAuthUser } = allAuthObj;

  return (
    <div
      className='flex items-center justify-around w-full text-base font-semibold bg-primary px-3 py-[1rem] fixed bottom-0 z-10 md:hidden'
      id='header'
    >
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
