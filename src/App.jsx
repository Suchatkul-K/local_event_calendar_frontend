import { Slide, ToastContainer } from 'react-toastify';
import Router from './routes';
import EventCard from './global_components/EventCard';

function App() {
  // console.log('api', import.meta.env);
  return (
    <>
      <Router />
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        // theme="light"
        transition={Slide}
      />
      <EventCard />
    </>
  );
}

export default App;
