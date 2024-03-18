import 'rsuite/Calendar/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Popover/styles/index.css';
import { Calendar, Badge } from 'rsuite';
import useProfileContext from '../hook/useProfileContext';
import ProfileDrawer from './ProfileDrawer';
import EventCard from '../../../global_components/EventCard';

function ProfileCalendar() {
  const ProfileContextObject = useProfileContext();

  const getEventList = (date) => {
    const newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();

    if (ProfileContextObject?.authEvents?.Reminder) {
      return ProfileContextObject?.authEvents?.Reminder.filter(
        (value) => value.event.startDate === isoDate
      );
    }
    return [];
  };

  const renderCell = (date) => {
    const list = getEventList(date);

    if (list.length) {
      const event = list.map((item) => {
        return <EventCard key={item.event.id} event={item.event} />;
      });

      return (
        <ProfileDrawer props={event}>
          <ul className='calendar-todo-list h-full'>
            <div className='w-full h-full flex justify-center items-center'>
              <Badge />
            </div>
          </ul>
        </ProfileDrawer>
      );
    }

    return null;
  };

  return <Calendar bordered renderCell={renderCell} />;
}

export default ProfileCalendar;
