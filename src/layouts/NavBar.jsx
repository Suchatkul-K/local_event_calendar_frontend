import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../global_components/Button';
import { MapIcon, CalendarIcon, ExploreIcon, ProfileIcon } from '../icons';

function NavBar() {
  const navigate = useNavigate();

  return (
    <div
      className='flex justify-between w-full
    text-base font-semibold bg-[#ffffff] items-center px-4 py-2'
    >
      <button type='button'>MENU</button>
      <button
        onClick={() => navigate('/home')}
        type='button'
        className='font-bold text-xl'
      >
        LOGO
      </button>
      <div className='flex gap-2'>
        <div className='hidden xl:flex gap-2'>
          <div className=''>
            <MapIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
          <div className='flex flex-row '>
            <CalendarIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
          <div className='flex flex-row'>
            <ExploreIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
        </div>
        <div className='dropdown dropdown-bottom dropdown-end'>
          <button
            type='button'
            className='   rounded-[100%] border-2 border-gray-500 p-1 '
          >
            <ProfileIcon />{' '}
          </button>
          <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[10rem]'>
            <li className='p-2'>Edit profile</li>
            <hr />
            <li className='p-2'>Log out</li>
          </ul>
        </div>
        <Button onClick={() => navigate('/login')}>Login</Button>
      </div>
    </div>
  );
}

export default NavBar;
