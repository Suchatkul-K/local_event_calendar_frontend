import { useState, useEffect } from 'react';
import { DatePicker, SelectPicker } from 'rsuite';
import { getAllEvent } from '../../../api/event';
import EventCardGanX from '../../../global_components/EventCardGanX';
import getProvince from '../../../api/province';
import formatDate from '../../../utils/formatDate';

function CalendarContainer() {
  const [events, setEvents] = useState([]);
  const [province, setProvince] = useState([]);
  const [search, setSearch] = useState({ date: '', province: '' });

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
    let filteredEvents = [...events];

    // Filter by province if selected
    if (search.province !== '') {
      filteredEvents = filteredEvents.filter(
        (event) => event.EventAddress.provinceId === search.province
      );
    }

    // Filter by date if selected
    if (search.date !== '') {
      const formattedDate = formatDate(search.date);
      filteredEvents = filteredEvents.filter(
        (event) => formatDate(event.startDate) === formattedDate
      );
    }

    setEvents(filteredEvents);
  };

  const handleClear = () => {
    fetchEventsData();
    setSearch({ date: '', province: '' });
  };

  useEffect(() => {
    fetchEventsData();
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
            onClean={(e) => console.log(e)}
            data={provinceData}
            onSelect={(value) => setSearch({ ...search, province: value })}
            block
          />
          <input
            className='border p-2'
            type='date'
            name='date'
            value={search?.data}
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className='flex flex-row gap-2 justify-end'>
          <button type='button' className='btn' onClick={handleSearch}>
            search
          </button>
          <button type='button' className='btn' onClick={handleClear}>
            clear
          </button>
        </div>
      </div>
      {/* data */}
      <div className='flex flex-col gap-3 py-4'>
        {events.map((event) => (
          <EventCardGanX key={event.id} event={event} />
        ))}
        {/* {temp} */}
      </div>
    </div>
  );
}

export default CalendarContainer;
