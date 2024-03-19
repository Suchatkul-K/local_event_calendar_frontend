import EventCardGanX from '../../../global_components/EventCardGanX';
import useMapContext from '../hooks/useMapContext';

function MapEventSection() {
  const { events, loading } = useMapContext();

  if (loading) {
    return (
      <div className='w-dvw flex justify-center items-center animate-pulse grow min-h-80'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }
  if (events?.length > 0) {
    return (
      <div>
        <div className='font-bold text-[1.5rem] p-4'>Event Around Here</div>
        {events.map((event) => (
          <div className='p-4' key={event.id}>
            <EventCardGanX event={event} key={event.id} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className='w-full h-[20rem] flex justify-center items-center font-bold text-gray-500'>
      No Event around here
    </div>
  );
}

export default MapEventSection;
