import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    <div className='custom-menu-bar flex items-center justify-around w-full text-base font-semibold bg-primary px-3 py-[1rem] fixed bottom-0 z-10 md:hidden '>
      <div className='flex'>
        <Link to='/home'>
          <HomeIcon className='w-[1.5rem] h-[1.5rem]' />
        </Link>
      </div>

      <div className=''>
        <Link to='/explore'>
          <SearchIconForMenuBar className='w-[1.5rem] h-[1.5rem] fill-white' />
        </Link>
      </div>
      {authUser ? (
        <div>
          <Link to='/create-event'>
            <AddIcon className='h-[1.5rem] w-[1.5rem] fill-white ' />
          </Link>
        </div>
      ) : null}

      <div className=''>
        <Link to='/map'>
          <MapIcon className='h-[1.5rem] w-[1.5rem]' />
        </Link>
      </div>
      <div className=''>
        <Link to='/calendar'>
          <CalendarIcon className='w-[1.7rem] h-[1.7rem]' />
        </Link>
      </div>
    </div>
  );
}
