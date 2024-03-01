import { RainIcon, SunIcon, WinterIcon } from '../icons';
import PictureSeason from './PictureSeason';

function SeasonCard() {
  return (
    <div>
      <div className='px-4'>Seasoning</div>
      <div className='flex'>
        <div className='flex items-center gap-2 p-4  border-e-2'>
          <span>
            <SunIcon className='w-[1.5rem] h-[1.5rem]' />
          </span>
          Summer
        </div>
        <div className='flex items-center gap-2 p-4  border-e-2'>
          <span>
            <RainIcon className='w-[1.5rem] h-[1.5rem]' />
          </span>
          Raining
        </div>
        <div className='flex items-center gap-2 p-4  '>
          <span>
            <WinterIcon className='w-[1.5rem] h-[1.5rem]' />
          </span>
          Winter
        </div>
      </div>
      <div className='grid grid-cols-2 gap-1 p-4'>
        <PictureSeason
          src='https://i.pinimg.com/originals/0e/db/8e/0edb8ece9a0d50a2d255f9d1bb65dd52.jpg'
          month='February'
        />
        <PictureSeason
          src='https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          month='March'
        />
        <PictureSeason
          src='https://images.unsplash.com/photo-1512553353614-82a7370096dc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          month='April'
        />
        <PictureSeason
          src='https://images.unsplash.com/photo-1580327942498-53a877c6d0ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          month='May'
        />
      </div>
    </div>
  );
}

export default SeasonCard;
