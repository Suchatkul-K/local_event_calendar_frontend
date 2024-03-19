import React from 'react';
import EventCardGanX from '../../../global_components/EventCardGanX';

function EventList({ currentEvents }) {
  return (
    <div className='flex flex-col gap-2'>
      {currentEvents?.map((event) => (
        <EventCardGanX key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventList;
