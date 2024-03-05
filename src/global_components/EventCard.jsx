import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';

function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`}>
      <div className='carousel-item'>
        <div className='card max-w-[16rem] max-h-[28rem] bg-base-100 shadow'>
          <figure>
            <img src={event.coverImage} alt='' />
          </figure>
          <div className='card-body p-[2rem] '>
            <h2 className='card-title'>{event.title}</h2>
            <p className='text-[0.75rem] pb-[1rem] border-b  max-h-[2.5rem] overflow-hidden'>
              {event.description}
            </p>
            <div className='text-sm font-bold'>
              Category : {event.category.name}
            </div>
            <div className='card-actions flex flex-col'>
              <div className='text-sm font-bold'>
                Entrance{' '}
                {event.EventFacility?.entranceFee === true ? (
                  <span className='text-green-400 text-[0.75rem]'>
                    Free Access
                  </span>
                ) : (
                  <span className='text-amber-500 text-[0.75rem]'>
                    Paid Access{' '}
                  </span>
                )}
              </div>

              <div className='text-sm font-bold text-gray-500'>
                Date : {formatDate(event?.startDate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
