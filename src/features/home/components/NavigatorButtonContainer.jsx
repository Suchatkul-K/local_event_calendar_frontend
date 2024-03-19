import Skeleton from 'react-loading-skeleton';

import { MapIcon, CalendarIcon, ExploreIcon } from '../../../icons';
import NavigatorButton from './NavigatorButton';
import 'react-loading-skeleton/dist/skeleton.css';

function NavigatorButtonContainer() {
  return (
    <div className='flex justify-evenly md:px-[9.5rem] md:gap-2 lg:gap-0 lg:px-0 pb-8'>
      <div className='hidden lg:block lg:rounded-3xl lg:border-4 transition-all duration-200 hover:scale-110'>
        <NavigatorButton link='/map'>
          <div className='relative lg:w-[35vh] xl:w-[45vh] lg:h-[14vh] lg:bg-[#00103c] lg:gap-2 lg:flex lg:justify-center lg:items-center'>
            <MapIcon className='w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] md:mr-3 lg:mr-4' />
            <p className='hidden md:block text-white md:text-xl lg:text-3xl md:font-semibold'>
              Map
            </p>
          </div>
        </NavigatorButton>
      </div>
      <div className='hidden lg:block lg:rounded-3xl lg:border-4 transition-all duration-200 hover:scale-110'>
        <NavigatorButton link='/calendar'>
          <div className='lg:w-[35vh] xl:w-[45vh] lg:h-[14vh] lg:bg-[#00103c] lg:gap-2 lg:flex lg:justify-center lg:items-center'>
            <CalendarIcon className='w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] md:mr-3 lg:mr-4' />
            <p className='hidden md:block text-white md:text-xl lg:text-3xl md:font-semibold'>
              Calendar
            </p>
          </div>
        </NavigatorButton>
      </div>
      <div className='hidden lg:block lg:rounded-3xl lg:border-4 transition-all duration-200 hover:scale-110'>
        <NavigatorButton link='/explore'>
          <div className='lg:w-[35vh] xl:w-[45vh] lg:h-[14vh] lg:bg-[#00103c]  lg:gap-2 lg:flex lg:justify-center lg:items-center'>
            <ExploreIcon className='w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] md:mr-3 lg:mr-4' />
            <p className='hidden md:block text-white md:text-xl lg:text-3xl md:font-semibold'>
              Explore
            </p>
          </div>
        </NavigatorButton>
      </div>

      <div className='lg:hidden lg:w-[100vh] lg:h-[14vh] lg:bg-[#00103c] lg:rounded-3xl lg:border-4 lg:gap-2 lg:flex lg:justify-center lg:items-center'>
        <NavigatorButton link='/map'>
          <MapIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4 ' />
          <p className='hidden md:block text-white md:text-xl md:font-semibold'>
            Map
          </p>
        </NavigatorButton>
      </div>
      <div className='lg:hidden lg:w-[100vh] lg:h-[14vh] lg:bg-[#00103c] lg:rounded-3xl lg:border-4 lg:gap-2 lg:flex lg:justify-center lg:items-center'>
        <NavigatorButton link='/calendar'>
          <CalendarIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
          <p className='hidden md:block text-white md:text-xl md:font-semibold'>
            Calendar
          </p>
        </NavigatorButton>
      </div>
      <div className='lg:hidden lg:w-[100vh] lg:h-[14vh] lg:bg-[#00103c] lg:rounded-3xl lg:border-4 lg:gap-2 lg:flex lg:justify-center lg:items-center'>
        <NavigatorButton link='/explore'>
          <ExploreIcon className='w-[2rem] h-[2rem] md:mr-3 lg:mr-4' />
          <p className='hidden md:block text-white md:text-xl md:font-semibold'>
            Explore
          </p>
        </NavigatorButton>
      </div>
    </div>
  );
}

export default NavigatorButtonContainer;
