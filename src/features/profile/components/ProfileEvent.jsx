import EventCard from '../../../global_components/EventCard';

function ProfileEvent() {
  return (
    <div className='flex flex-col gap-2'>
      <h1>My Event</h1>
      <div className='grid grid-cols-2 gap-2'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default ProfileEvent;