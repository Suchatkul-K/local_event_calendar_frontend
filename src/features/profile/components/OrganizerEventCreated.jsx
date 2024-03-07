import React from 'react';
import EventCard from '../../../global_components/EventCard';
import EventCardGanX from '../../../global_components/EventCardGanX';

function OrganizerEventCreated() {
  return (
    <>
      {/* header  */}

      <div className='p-3 gap-3 flex flex-col'>
        <div>Your Event created</div>
        <EventCardGanX />
        <EventCardGanX />
        <EventCardGanX />
        <EventCardGanX />
        <EventCardGanX />
      </div>
    </>
  );
}

export default OrganizerEventCreated;
