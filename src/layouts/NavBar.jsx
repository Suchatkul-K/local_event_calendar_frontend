import Button from '../global_components/Button';
import { MapIcon, CalendarIcon, ExploreIcon } from '../icons';

function NavBar() {
  return (
    <div
      className='flex justify-between w-full
    text-base font-semibold bg-[#ffffff] items-center py-2'
    >
      <div>MENU</div>
      <div className='font-bold text-xl'>LOGO</div>
      <div className='flex gap-2'>
        <div className='hidden xl:flex gap-2'>
          <div className=''>
            <MapIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
          <div className='flex flex-row '>
            <CalendarIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
          <div className='flex flex-row'>
            <ExploreIcon className='rounded-full bg-primary p-[0.35rem] w-[2.2rem] h-[2.2rem]' />
          </div>
        </div>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default NavBar;
