import { ClockIcon, CalendarIconGray, PinIcon } from '../../../icons';

export default function EventContainer() {
  return (
    <div className='p-[1rem]'>
      <div className='border-2 border-black rounded-2xl mx-auto flex flex-col gap-[2rem] w-[427px] p-[1rem]'>
        <div className='text-2xl font-semibold text-center'>
          Arun Temple Lighting Festival
        </div>
        <div className='flex flex-row justify-between gap-[1rem]'>
          <div className='flex flex-row gap-[0.3125rem]'>
            <div>
              <span>
                <ClockIcon className='w-[1.5rem] h-[1.5rem]' />
              </span>
            </div>
            <div>Time</div>
          </div>
          <div className='flex flex-row gap-[1rem]'>
            <div>Coupon</div>
            <div className='flex flex-row gap-[1rem]'>
              <div>Entrance</div>
              <div>Fee</div>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-[1rem]'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-[1rem]'>
              <div>
                <span>
                  <CalendarIconGray className='w-[1.5rem] h-[1.5rem]' />
                </span>
              </div>
              <div>Date</div>
            </div>
            <div>start&end</div>
          </div>
          <div className='flex flex-row justify-between gap-[1rem]'>
            <div>
              <span>
                <PinIcon className='w-[1.5rem] h-[1.5rem]' />
              </span>
            </div>
            <div>location</div>
          </div>
        </div>
      </div>
    </div>
  );
}
