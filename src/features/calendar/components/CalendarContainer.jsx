import { useState, useEffect } from 'react';
import { DatePicker, SelectPicker } from 'rsuite';
import { useParams } from 'react-router-dom';
import { getAllEvent } from '../../../api/event';
import EventCardGanX from '../../../global_components/EventCardGanX';
import getProvince from '../../../api/province';
import formatDate from '../../../utils/formatDate';
import EventCalendar from './EventCalendar';

function CalendarContainer() {
  const [events, setEvents] = useState(null);
  const [province, setProvince] = useState([]);
  const [search, setSearch] = useState({ date: '', province: '' });
  const [tempEvents, setTempEvents] = useState(null);
  const [clear, setClear] = useState(null);
  const { seasonId } = useParams();

  const renderSeason = events?.filter(
    (event) =>
      // console.log(event?.startDate.split('-')[1]);
      // console.log(seasonId, 'kkkkkkkkkk');
      event?.startDate.split('-')[1] === seasonId
  );

  console.log(renderSeason);

  const rightNow = new Date();
  const thisYear = rightNow.getFullYear();

  let season;

  if (!season) {
    switch (seasonId) {
      case '01':
        season = `${thisYear}-01-01`;
        break;
      case '02':
        season = `${thisYear}-02-01`;
        break;
      case '03':
        season = `${thisYear}-03-01`;
        break;
      case '04':
        season = `${thisYear}-04-01`;
        break;
      case '05':
        season = `${thisYear}-05-01`;
        break;
      case '06':
        season = `${thisYear}-06-01`;
        break;
      case '07':
        season = `${thisYear}-07-01`;
        break;
      case '08':
        season = `${thisYear}-08-01`;
        break;
      case '09':
        season = `${thisYear}-09-01`;
        break;
      case '10':
        season = `${thisYear}-10-01`;
        break;
      case '11':
        season = `${thisYear}-11-01`;
        break;
      case '12':
        season = `${thisYear}-12-01`;
        break;

      default:
        break;
    }
  }

  if (!tempEvents && events) {
    setTempEvents([...events]);
  }

  const fetchEventsData = async () => {
    try {
      const getEvent = await getAllEvent();
      setEvents(getEvent.data);

      const getProvinces = await getProvince();
      setProvince(getProvinces.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    let filterEvent = [...events];

    // Filter by province if selected
    if (search.province !== '') {
      filterEvent = filterEvent.filter(
        (event) => event.EventAddress.provinceId === search.province
      );

      setEvents(filterEvent);
    }

    // Filter by date if selected
    // if (search.date !== '') {
    //   const formattedDate = formatDate(search.date);
    //   filteredEvents = filteredEvents.filter(
    //     (event) => formatDate(event.startDate) === formattedDate
    //   );
    // }

    // setEvents(filteredEvents);
  };

  const handleClear = () => {
    setEvents([...tempEvents]);
    setClear(null);
  };

  const fetchSeasonEvent = (input) => {
    // console.log(input);
    // const month = new Date(event.startDate);
    // new Date(input).setUTCHours(0, 0, 0, 0);
    // const isoDate = input.toISOString();
    // console.log(isoDate);
    // if (tempEvents) {
    //   let filterEvent = [...tempEvents];
    //   filterEvent = filterEvent.filter((event) => event.startDate === isoDate);
    //   setEvents(filterEvent);
    // }
  };

  useEffect(() => {
    fetchEventsData();
    // fetchSeasonEvent(season);
    window.scrollTo(0, 0);
  }, []);

  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  return (
    <div className='p-4'>
      {/* search form */}
      <div className='flex flex-col'>
        {/* search from date */}
        {/* <DatePicker
          format='dd.MM.yyyy'
          size='sm'
          placeholder='select date'
          onSelect={(value) => setSearch({ ...search, date: value })}
        /> */}
        {/* search from province */}
        <div className='flex flex-col gap-3 py-4'>
          <SelectPicker
            // onClean={(e) => console.log(e)}
            value={clear}
            onChange={setClear}
            data={provinceData}
            onSelect={(value) => setSearch({ ...search, province: value })}
            block
          />
          {/* <input
            className='border p-2'
            type='date'
            name='date'
            value={search?.data}
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          /> */}
          <EventCalendar season={season} data={events} setSearch={setSearch} />
        </div>

        <div className='flex flex-row gap-2 justify-end'>
          <button type='button' className='btn' onClick={handleClear}>
            clear
          </button>
          <button type='button' className='btn' onClick={handleSearch}>
            search
          </button>
        </div>
      </div>
      {/* data */}
      <div className='flex flex-col gap-3 py-4'>
        {seasonId
          ? renderSeason?.map((event) => (
              <EventCardGanX key={event.id} event={event} />
            ))
          : events?.map((event) => (
              <EventCardGanX key={event.id} event={event} />
            ))}
      </div>
    </div>
  );
}

export default CalendarContainer;
