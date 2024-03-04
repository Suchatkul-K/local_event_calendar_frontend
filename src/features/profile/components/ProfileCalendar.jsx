import 'rsuite/Calendar/styles/index.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import useProfileContext from '../hook/useProfileContext';

function ProfileCalendar() {
  const ProfileContextObject = useProfileContext();

  const getEventlist = (date) => {
    const newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();

    if (ProfileContextObject.event) {
      return ProfileContextObject.event?.filter(
        (value) => value.startDate === isoDate
      );
    }
    return [];
  };

  const renderCell = (date) => {
    const list = getEventlist(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreCount = list.length - displayList.length;

      return (
        <Whisper
          placement='right'
          trigger='click'
          speaker={
            <Popover>
              {list.map((item) => (
                <p key={item.id}>
                  <div>
                    <Badge /> {item.title} {item.timePeriod}
                  </div>
                </p>
              ))}
            </Popover>
          }
        >
          <ul className='calendar-todo-list'>
            {displayList.map((item, index) => (
              <li key={item.id}>
                <Badge /> {item.title} {item.timePeriod}
              </li>
            ))}
            {moreCount ? (
              <li className='text-blue-500'>{moreCount} more</li>
            ) : null}
          </ul>
        </Whisper>
      );
    }

    return null;
  };

  return <Calendar bordered renderCell={renderCell} />;
}

export default ProfileCalendar;
