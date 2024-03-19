import React from 'react';
import EventCardGanX from '../../../global_components/EventCardGanX';
import useProfileContext from '../hook/useProfileContext';

function OrganizerEventCreated() {
  const ProfileContextObject = useProfileContext();
  const { authEvents } = ProfileContextObject;

  return (
    <div className='p-3 gap-3 flex flex-col'>
      <div>Your Event created</div>
      {authEvents?.OrganizerInformation?.Event?.map((event) => (
        <EventCardGanX event={event} key={event.id} />
      ))}
    </div>
  );
}

export default OrganizerEventCreated;
