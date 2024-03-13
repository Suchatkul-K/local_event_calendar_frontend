import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, IconButton } from 'rsuite';
import {
  CreateEventIcon,
  LogOutIcon,
  ProfileIcon,
  SettingIcon,
} from '../icons';
import 'rsuite/Dropdown/styles/index.css';

import useAuth from '../features/auth/hooks/auth';

export default function DropdownProfile({ logout }) {
  const allAuthObj = useAuth();

  const {
    authUser: { role },
  } = allAuthObj;

  console.log(allAuthObj, ';;;;;;;;;;;;;');
  const navigate = useNavigate();
  return (
    // <div className='dropdown dropdown-bottom dropdown-end'>
    //   <button
    //     type='button'
    //     className='   rounded-[100%] border-2 border-gray-500 p-1 '
    //   >
    //     <ProfileIcon />{' '}
    //   </button>
    //   <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[10rem]'>
    //     <button
    //       type='button'
    //       className='p-2'
    //       onClick={() => navigate('/profile/edit')}
    //     >
    //       Edit profile
    //     </button>
    //     <hr />
    //     <button type='button' className='p-2' onClick={logout}>
    //       Log out
    //     </button>
    //   </ul>
    <Dropdown
      icon={<ProfileIcon />}
      // title={allAuthObj?.userName}
      placement='bottomEnd'
    >
      <div className='p-1 border-b'>
        <Dropdown.Item
          style={{ display: 'flex', gap: '8px' }}
          icon={<ProfileIcon />}
          onClick={() => navigate('/profile')}
        >
          Profile
        </Dropdown.Item>
      </div>
      {role === 'ORGANIZER' ? (
        <div className='p-1 border-b'>
          <Dropdown.Item
            style={{ display: 'flex', gap: '8px' }}
            icon={<CreateEventIcon />}
            onClick={() => navigate('/create-event')}
          >
            Create Event
          </Dropdown.Item>
        </div>
      ) : null}
      <div className='p-1 border-b'>
        <Dropdown.Item
          style={{ display: 'flex', gap: '8px' }}
          icon={<SettingIcon />}
          onClick={() => navigate('/profile/edit')}
        >
          Setting{' '}
        </Dropdown.Item>
      </div>
      <div className='p-1 border-b'>
        <Dropdown.Item
          style={{ display: 'flex', gap: '8px' }}
          icon={<LogOutIcon />}
          onClick={logout}
        >
          Logout{' '}
        </Dropdown.Item>
      </div>
    </Dropdown>
    // </div>
  );
}
