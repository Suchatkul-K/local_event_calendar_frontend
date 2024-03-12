import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileIcon } from '../icons';

export default function DropdownProfile({ logout }) {
  const nevigate = useNavigate();
  return (
    <div className='dropdown dropdown-bottom dropdown-end'>
      <button
        type='button'
        className='   rounded-[100%] border-2 border-gray-500 p-1 '
      >
        <ProfileIcon />{' '}
      </button>
      <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[10rem]'>
        <button
          type='button'
          className='p-2'
          onClick={() => nevigate('/profile/edit')}
        >
          Edit profile
        </button>
        <hr />
        <button type='button' className='p-2' onClick={logout}>
          Log out
        </button>
      </ul>
    </div>
  );
}
