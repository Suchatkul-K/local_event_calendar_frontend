import { MapIcon, CalendarIcon, ExploreIcon } from '../../../icons';

function NavigatorButton({ children }) {
  return (
    <div className='border p-4 rounded-2xl flex justify-center items-center bg-gray-400'>
      {children}
    </div>
  );
}

function NavigatorButtonContainer() {
  return (
    <div className='flex justify-between p-3'>
      <NavigatorButton>
        <MapIcon className='w-[2rem] h-[2rem]' />
      </NavigatorButton>
      <NavigatorButton>
        <CalendarIcon className='w-[2rem] h-[2rem]' />
      </NavigatorButton>
      <NavigatorButton>
        <ExploreIcon className='w-[2rem] h-[2rem]' />
      </NavigatorButton>
    </div>
  );
}

export default NavigatorButtonContainer;
