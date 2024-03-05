import { useEffect, useState } from 'react';
import Carousel from '../../../global_components/Carousel';
import EventCard from '../../../global_components/EventCard';
import SeasonContainer from './SeasonContainer';
import IncomingCard from '../../Events/context/components/IncomingCard';
import getAllEvent from '../../../api/event';
import NavigatorButton from './NavigatorButton';

function HomeContainer() {
  const [event, setEvent] = useState();

  const getAll = async () => {
    try {
      const response = await getAllEvent();
      setEvent(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className='pt-[3rem] flex flex-col gap-4 w-full'>
      <div className='xl:hidden'>
        <NavigatorButton />
      </div>
      <Carousel title='Highlight'>
        {event?.map((value) => (
          <div key={value.id} className='carousel-item'>
            <EventCard event={value} />
          </div>
        ))}
      </Carousel>
      <div className='w-full'>
        <Carousel title='Incoming'>
          <IncomingCard />
          <IncomingCard />
          <IncomingCard />
          <IncomingCard />
          <IncomingCard />
          <IncomingCard />
          <IncomingCard />
          <IncomingCard />
        </Carousel>
        <SeasonContainer />
      </div>
    </div>
  );
}

export default HomeContainer;
