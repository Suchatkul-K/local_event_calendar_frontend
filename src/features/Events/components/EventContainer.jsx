import { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Avatar from '../../../global_components/Avatar';
import CarouselHero from '../../../global_components/CarouselHero';
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
  HearthIconOutline,
} from '../../../icons';
import formatDate from '../../../utils/formatDate';
import useEventContext from '../hook/useEventContext';
import EventMapLocation from './EventMapLocation';
import { authMe } from '../../../api/auth';
import { createReminder, deleteReminder } from '../../../api/user';

export default function EventContainer() {
  const eventObj = useEventContext();

  const [isReminder, setIsReminder] = useState(false);
  const [authEvents, setAuthEvents] = useState(null);
  const { eventId } = useParams();
  // const eventLatLng = [
  //   eventObj?.EventAddress?.lat,
  //   eventObj?.EventAddress?.long,
  // ];

  const checkReminded = authEvents?.Reminder.filter(
    (el) => el.eventId === eventObj?.event?.id
  );

  const fetchAuthEvent = async () => {
    try {
      const authEvent = await authMe();
      setAuthEvents(authEvent.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleReminderClick = async () => {
    await createReminder(+eventId);
    toast.success('keep to reminded');
    fetchAuthEvent();
  };

  const handleDelReminderClick = async () => {
    await deleteReminder(+eventId);
    toast.success('remove to your reminder');
    fetchAuthEvent();
  };

  useEffect(() => {
    fetchAuthEvent();
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      {/* cover picture */}
      <div className='w-full'>
        <img
          className='object-contain'
          src={eventObj.event?.coverImage}
          alt=''
        />
      </div>
      {/* header description */}
      <div className='border-2 rounded-xl px-4 py-2 flex flex-col gap-2 '>
        <h1 className='text-[1.5rem]'>{eventObj?.event?.title}</h1>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <ClockIcon />
            {eventObj.event?.timePeriod}
          </div>
          <div className='flex items-center gap-2'>
            <CouponIcon />
            Entrance:
            {eventObj?.event?.EventFacility?.entranceFee ? (
              <span className='text-green-500'>Free </span>
            ) : (
              <span className='text-amber-500'>Paid </span>
            )}
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <CalendarIconGray />
          Date
        </div>
        <div className='flex justify-between'>
          <div className='border-2 p-2 rounded-xl'>
            <p>Start : {formatDate(eventObj.event?.startDate)}</p>
            <p>End : {formatDate(eventObj.event?.endDate)}</p>
          </div>
          <div className='flex gap-2 items-baseline max-w-[10rem] '>
            <div>
              <PinIcon className='w-[1rem] h-[1rem]' />
            </div>
            <p>{eventObj?.event?.EventAddress?.address}</p>
          </div>
        </div>
        <div />
      </div>
      {/* Host */}
      <div className='flex gap-3 items-center px-4'>
        <Avatar
          src={eventObj?.event?.organizerInformation?.user?.profileImage}
        />
        <p>Hosted By : {eventObj?.event?.organizerInformation?.officialName}</p>
      </div>
      {/* Description */}
      <div className='flex flex-col px-4'>
        <p className='text-[1.5rem] font-bold'>Description</p>
        <p>{eventObj?.event?.description}</p>
        <div className='flex justify-end py-4'>
          <div className='border-2 border-red-400 flex items-center justify-center gap-2 p-2 rounded-full'>
            {checkReminded?.length === 0 ? (
              <button
                type='button'
                onClick={handleReminderClick}
                aria-label='Save'
              >
                <HearthIconOutline />
              </button>
            ) : (
              <button
                type='button'
                aria-label='Save'
                onClick={handleDelReminderClick}
              >
                <HearthIconOutline className='fill-red-500' />
              </button>
            )}
            <div className='text-red-400 text-[0.75rem]'>Remind Me</div>
          </div>
        </div>
      </div>
      {/* Facility */}
      <div className='flex flex-col px-4 '>
        <p className='text-[1.5rem] font-bold'>Facility</p>
        <div className='flex gap-2 flex-wrap py-2'>
          {eventObj?.event?.EventFacility?.toilet ? (
            <div className='flex gap-3 items-center'>
              <ToiletIcon /> Toilet
            </div>
          ) : null}
          {eventObj?.event?.EventFacility?.parking ? (
            <div className='flex gap-2 items-center'>
              <CarParkIcon /> Park
            </div>
          ) : null}
          {eventObj?.event?.EventFacility?.meditationRoom ? (
            <div className='flex gap-2 items-center'>
              <PrayIcon /> Pray room
            </div>
          ) : null}
          {eventObj?.event?.EventFacility?.petFriend ? (
            <div className='flex gap-2 items-center'>
              <DogIcon /> Pet
            </div>
          ) : null}
          {eventObj?.event?.EventFacility?.food ? (
            <div className='flex gap-2 items-center'>
              <FoodIcon /> Food Store
            </div>
          ) : null}
          {eventObj?.event?.EventFacility?.wifi ? (
            <div className='flex gap-2 items-center'>
              <WifiIcon /> Free Wi-fi
            </div>
          ) : null}
          {eventObj?.event?.EventFacility?.medicalService ? (
            <div className='flex gap-2 items-center'>
              <MedicalIcon /> Medical Store
            </div>
          ) : null}
        </div>
      </div>
      {/* Carousel Preview */}
      {
        // eventObj?.event?.image &&
        <CarouselHero />
      }

      {eventObj?.event && <EventMapLocation />}
    </div>
  );
}
