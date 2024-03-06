import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../../global_components/Carousel';
import EventCard from '../../../global_components/EventCard';
import SeasonContainer from './SeasonContainer';
import IncomingCard from './IncomingCard';
// import { getAllEvent } from '../../../api/event';
import NavigatorButton from './NavigatorButton';
import CarouselHero from '../../../global_components/CarouselHero';
import useHomeContext from '../hooks/useHomeContext';

function HomeContainer() {
  const allEventsObj = useHomeContext();

  const highlightEvent = allEventsObj.event?.filter(
    (event) => event.HighlightEvent != null
  );

  return (
    <>
      <CarouselHero />
      <div className='w-full p-[0.75rem] pt-[3rem] flex flex-col gap-4'>
        <NavigatorButton />
        <Carousel title='Highlight'>
          {highlightEvent?.map((value) => (
            <div key={value.id} className='carousel-item'>
              <EventCard event={value} />
            </div>
          ))}
        </Carousel>
        <Carousel title='Incoming'>
          {allEventsObj.event?.map((value) => (
            <Link to={`/event/${value.id}`}>
              <div key={value.id} className='carousel-item'>
                <IncomingCard event={value} />
              </div>
            </Link>
          ))}
        </Carousel>
        <SeasonContainer />
      </div>
    </>
  );
}

export default HomeContainer;
