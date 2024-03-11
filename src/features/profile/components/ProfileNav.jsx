import { useState } from 'react';
import ProfileCalendar from './ProfileCalendar';
import OrganizerEventCreated from './OrganizerEventCreated';

function ProfileNav() {
  const [toggleCtoE, setToggleCtoE] = useState('calendar');

  return (
    <>
      <div className='flex justify-between py-4'>
        <button
          className={
            toggleCtoE === 'calendar'
              ? 'text-center  text-[0.75rem] w-full border-b-2 p-2'
              : 'text-center text-[0.75rem] w-full p-2'
          }
          onClick={() => setToggleCtoE('calendar')}
          type='button'
        >
          Calendar
        </button>
        <button
          className={
            toggleCtoE === 'event'
              ? 'text-center text-[0.75rem] w-full border-b-2 p-2'
              : 'text-center text-[0.75rem] w-full p-2'
          }
          onClick={() => setToggleCtoE('event')}
          type='button'
        >
          Your Event Created
        </button>
      </div>
      {toggleCtoE === 'calendar' ? (
        <ProfileCalendar />
      ) : (
        <OrganizerEventCreated />
      )}
    </>
  );
}

export default ProfileNav;
