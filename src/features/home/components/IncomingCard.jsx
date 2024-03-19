import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { PinIcon, ToiletIcon } from '../../../icons';
import formatDate from '../../../utils/formatDate';

function IncomingCard({ event }) {
  return (
    <Link to={`/event/${event?.id}`}>
      <div className='w-[16rem] h-[20rem] relative rounded-lg overflow-hidden bg-base-00 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-300 hover:scale-110'>
        <img
          src={event?.coverImage}
          alt=''
          className='object-cover w-full h-full'
        />
        <div className='absolute w-full bottom-0 left-0 text-white px-4 py-0.5 bg-black bg-opacity-50'>
          <h2 className='font-bold'>{event?.title}</h2>
          <p className='text-[0.75rem]'>
            <PinIcon className='w-[1rem] h-[1rem] fill-red-600' />{' '}
            {event?.EventAddress?.address}
          </p>
          <p className='text-[0.75rem]'>{formatDate(event?.startDate)}</p>
        </div>
      </div>
    </Link>
  );
}

export default IncomingCard;
