import 'rsuite/Calendar/styles/index.css';
import 'rsuite/Badge/styles/index.css';
import 'rsuite/Popover/styles/index.css';
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import useProfileContext from '../hook/useProfileContext';

function ProfileCalendar() {
  const ProfileContextObject = useProfileContext();

  const getEventList = (date) => {
    // const day = date.getDate();
    const newDate = new Date(date);
    newDate.setUTCHours(0, 0, 0, 0);
    const isoDate = newDate.toISOString();

    // switch (day) {
    //   case 10:
    //     return [
    //       { title: 'test1', timePeriod: '12' },
    //       { title: 'test1', timePeriod: '12' },
    //       { title: 'test1', timePeriod: '12' },
    //       { title: 'test1', timePeriod: '12' },
    //       { title: 'test1', timePeriod: '12' },
    //       { title: 'test1', timePeriod: '12' },
    //     ];
    //   default:
    //     return [];
    // }

    if (ProfileContextObject.event) {
      return ProfileContextObject.event?.filter(
        (value) => value.startDate === isoDate
      );
    }
    return [];
  };

  const renderCell = (date) => {
    const list = getEventList(date);
    const displayList = list.filter((item, index) => index < 1);

    if (list.length) {
      // const moreCount = list.length - displayList.length;

      return (
        <Whisper
          placement='right'
          trigger='click'
          speaker={
            <Popover>
              {list.map((item) => (
                <li className='list-none' key={item.id}>
                  <div>
                    <Badge /> {item.title} {item.timePeriod}
                  </div>
                </li>
              ))}
            </Popover>
          }
        >
          <ul className='calendar-todo-list h-full'>
            {/* {displayList.map((item, index) => (
              <li key={item.id}>
                <Badge /> {item.title} {item.timePeriod}
              </li>
            ))} */}
            <div className='w-full h-full flex justify-center items-center'>
              <Badge />
            </div>
            {/* {moreCount ? (
              <li className='text-blue-500'>{moreCount} more</li>
            ) : null} */}
          </ul>
        </Whisper>
      );
    }

    return null;
  };

  return <Calendar bordered renderCell={renderCell} />;
}

export default ProfileCalendar;
