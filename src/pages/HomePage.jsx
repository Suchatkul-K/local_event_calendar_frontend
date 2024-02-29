import Carousel from '../global_components/Carousel';
import EventCard from '../global_components/EventCard';
import IncomingCard from '../features/Events/context/components/IncomingCard';

function HomePage() {
  return (
    <div className='w-full'>
      HomePage
      <Carousel>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Carousel>
      <Carousel>
        <IncomingCard />
        <IncomingCard />
        <IncomingCard />
        <IncomingCard />
      </Carousel>
    </div>
  );
}

export default HomePage;
