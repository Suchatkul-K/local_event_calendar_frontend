import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';

function EventCardGanX({ event }) {
  console.log(event);
  return (
    <Link to={`/event/${event?.id}`}>
      <div className='flex rounded-lg overflow-hidden h-[10rem] gap-2 shadow-lg border w-full'>
        {/* image */}
        <div className=' w-3/6 '>
          <img
            src={event?.coverImage}
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        {/* detail */}
        <div className='flex flex-col p-2 w-full justify-between '>
          <div>
            <div>
              <h1 className='font-bold text-[1rem]'>{event?.title}</h1>
              <p className='text-[0.8rem] h-[3.5rem] w-full] text-wrap truncate'>
                {event?.description}
              </p>
            </div>
          </div>
          <div>
            <p className='font-semibold text-[0.75rem]'>
              category :{' '}
              <span className=' font-normal'>{event?.category?.name}</span>
            </p>
            <p className='font-semibold text-[0.75rem]'>
              Entrance :{' '}
              {event?.EventFacility?.entranceFee ? (
                <span className='text-green-500'>Free</span>
              ) : (
                <span className='text-amber-500'>Paid</span>
              )}
            </p>
            <p className='font-semibold text-[0.75rem]'>
              date : {formatDate(event?.startDate, true)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCardGanX;
