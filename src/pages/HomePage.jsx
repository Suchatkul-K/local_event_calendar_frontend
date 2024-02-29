import Carousel from '../global_components/Carousel';
import EventCard from '../global_components/EventCard';
import IncomingCard from '../features/Events/context/components/IncomingCard';
import SeasonCard from '../global_components/SeasonCard';

function HomePage() {
  return (
    <div className='w-full'>
      HomePage
      <Carousel title='highlight'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Carousel>
      <Carousel title='Incoming'>
        <IncomingCard />
        <IncomingCard />
        <IncomingCard />
        <IncomingCard />
      </Carousel>
      <SeasonCard />
    </div>
  );
}

export default HomePage;
