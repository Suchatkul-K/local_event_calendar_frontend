import Avatar from '../../../../global_components/Avatar';
import CarouselHero from '../../../../global_components/CarouselHero';
import {
  ClockIcon,
  CalendarIconGray,
  PinIcon,
  CouponIcon,
  ToiletIcon,
  CarParkIcon,
  PrayIcon,
  DogIcon,
  FoodIcon,
  WifiIcon,
  MedicalIcon,
} from '../../../../icons';

export default function EventContainer() {
  return (
    <div className='flex flex-col gap-4 '>
      {/* cover picture */}
      <div className='w-full'>
        <img
          className='object-contain'
          src='https://previews.123rf.com/images/mashikomo/mashikomo1601/mashikomo160100013/50268765-chamomile-floral-background-hand-drawn-vector-illustration.jpg'
          alt=''
        />
      </div>
      {/* header description */}
      <div className='border-2 rounded-xl px-4 py-2 flex flex-col gap-2 '>
        <h1 className='text-[1.5rem]'>Arun Temple Lighting Festival</h1>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <ClockIcon />
            time
          </div>
          <div className='flex items-center gap-2'>
            <CouponIcon />
            Entrance
            <span className='text-green-500'>Free</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <CalendarIconGray />
          Date
        </div>
        <div className='flex justify-between'>
          <div className='border-2 p-2 rounded-xl'>
            <p>Start : 12.00 pm</p>
            <p>End : 12.00 pm</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div>
              <PinIcon className='w-[1rem] h-[1rem]' />
            </div>
            <p>location</p>
          </div>
        </div>
        <div />
      </div>
      {/* Host */}
      <div className='flex gap-3 items-center px-4'>
        <Avatar size='w-[3rem]' />
        <p> Hosted By : Mr.Bank</p>
      </div>
      {/* Description */}
      <div className='flex flex-col px-4'>
        <p className='text-[1.5rem] font-bold'>Description</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sed.
          Iusto odio enim similique distinctio. Vel, unde consequuntur, quia
          nesciunt impedit repellendus itaque ratione optio odit deleniti
          reprehenderit libero voluptatibus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet, sed. Iusto odio enim similique
          distinctio. Vel, unde consequuntur, quia nesciunt impedit repellendus
          itaque ratione optio odit deleniti reprehenderit libero voluptatibus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sed.
          Iusto odio enim similique distinctio. Vel, unde consequuntur, quia
          nesciunt impedit repellendus itaque ratione optio odit deleniti
          reprehenderit libero voluptatibus.
        </p>
        <div className='flex flex-col items-end'>
          <p>add event</p>
          <div>icon</div>
        </div>
      </div>
      {/* Facility */}
      <div className='flex flex-col px-4 '>
        <p className='text-[1.5rem] font-bold'>Facility</p>
        <div className='flex gap-2 flex-wrap py-2'>
          <div className='flex gap-3 items-center'>
            <ToiletIcon /> Toilet
          </div>
          <div className='flex gap-2 items-center'>
            <CarParkIcon /> Park
          </div>
          <div className='flex gap-2 items-center'>
            <PrayIcon /> Pray room
          </div>
          <div className='flex gap-2 items-center'>
            <DogIcon /> Dog
          </div>
          <div className='flex gap-2 items-center'>
            <FoodIcon /> Food Store
          </div>
          <div className='flex gap-2 items-center'>
            <WifiIcon /> Free Wi-fi
          </div>
          <div className='flex gap-2 items-center'>
            <MedicalIcon /> Medical Store
          </div>
        </div>
      </div>
      {/* Carousel Preview */}
      <CarouselHero />
    </div>
  );
}
