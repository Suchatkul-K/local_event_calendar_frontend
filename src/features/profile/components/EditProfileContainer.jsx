import React, { useState } from 'react';

import EditProfileForm from './EditProfileForm';
import EditPasswordForm from './EditPasswordForm';

function EditProfile() {
  const [togglePage, setTogglePage] = useState('editProfile');
  return (
    <div className='flex flex-col justify-start items-start h-auto px-2 md:px-[8vh] lg:px-[18vh] xl:px-[30vh]'>
      <div className='flex justify-between py-4 w-full'>
        <button
          className={
            togglePage === 'editProfile'
              ? 'text-center  text-[0.75rem] w-full border-b-2 p-2'
              : 'text-center text-[0.75rem] w-full p-2'
          }
          onClick={() => setTogglePage('editProfile')}
          type='button'
        >
          Information
        </button>
        <button
          className={
            togglePage === 'password'
              ? 'text-center text-[0.75rem] w-full border-b-2 p-2'
              : 'text-center text-[0.75rem] w-full p-2'
          }
          onClick={() => setTogglePage('password')}
          type='button'
        >
          Password
        </button>
      </div>
      {togglePage === 'editProfile' ? (
        <EditProfileForm />
      ) : (
        <EditPasswordForm />
      )}
    </div>
  );
}

export default EditProfile;
