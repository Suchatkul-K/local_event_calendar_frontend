import 'rsuite/Calendar/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Popover/styles/index.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import { useState } from 'react';
import { getDate } from 'rsuite/esm/utils/dateUtils';
import EventCard from '../../../global_components/EventCard';

function EventCalendar({ data, setSearch, season, handle }) {
  //   const [dateForSearch, setDateForSearch] = useState(null);

  const handleCellClick = (day) => {
    const newDate = new Date(day);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();
    setSearch({ date: isoDate });
  };

  const getEventList = (date) => {
    const newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();

    if (data) {
      return data.filter((value) => value?.startDate === isoDate);
    }
    return [];
  };

  const renderCell = (date) => {
    const list = getEventList(date);
    // if (list.length) {
    //   const event = list.map((item) => (
    //     <EventCard key={item.id} event={item.event} />
    //   ));

    return (
      <button
        className='w-full h-full'
        type='button'
        aria-label='Save'
        onClick={() => handleCellClick(date)}
      >
        {list.length > 0 && (
          <Whisper
            placement='right'
            trigger='click'
            speaker={
              <Popover>
                {list.map((item) => (
                  <li className='list-none' key={item.id}>
                    <div>
                      <Badge /> {item.title} {item.timePeriod}
                    </div>
                  </li>
                ))}
              </Popover>
            }
          >
            <ul className='calendar-todo-list h-full'>
              <div className='w-full h-full flex justify-center items-center'>
                <Badge />
              </div>
            </ul>
          </Whisper>
        )}
      </button>
    );
  };
  // return (
  //   <button
  //     className='w-full h-full'
  //     type='button'
  //     aria-label='Save'
  //     onClick={() => handleCellClick(date)}
  //   >
  //     {' '}
  //   </button>
  // );
  //   };
  console.log('calen season', season);
  return (
    <Calendar
      defaultValue={new Date(season)}
      bordered
      renderCell={renderCell}
    />
  );
}

export default EventCalendar;
