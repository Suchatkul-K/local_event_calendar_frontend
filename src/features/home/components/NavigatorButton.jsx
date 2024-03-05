import { MapIcon, CalendarIcon, ExploreIcon } from '../../../icons';

function NavigatorButton({ children }) {
  return (
    <div className='p-4 rounded-2xl flex justify-center items-center bg-primary drop-shadow-[0.1rem_0.2rem_0.1rem_rgba(0,0,0,0.25)]'>
      {children}
    </div>
  );
}

function NavigatorButtonContainer() {
  return (
    <div className='flex justify-evenly md:px-[9.5rem] md:gap-2'>
      <NavigatorButton className=''>
        <MapIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
        <p className='hidden md:block text-white md:text-xl md:font-semibold'>
          Map
        </p>
      </NavigatorButton>
      <NavigatorButton>
        <CalendarIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
        <p className='hidden md:block text-white md:text-xl md:font-semibold'>
          Calendar
        </p>
      </NavigatorButton>
      <NavigatorButton>
        <ExploreIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
        <p className='hidden md:block text-white md:text-xl md:font-semibold'>
          Explore
        </p>
      </NavigatorButton>
    </div>
  );
}

export default NavigatorButtonContainer;
