import ProfileContextProvider from '../context/ProfileContext';
import ProfileCalendar from './ProfileCalendar';
import ProfileEvent from './ProfileEvent';
import ProfileInfo from './ProfileInfo';
// import 'rsuite/dist/rsuite.min.css';

function ProfileContainer() {
  return (
    <div className='p-4'>
      <ProfileContextProvider>
        <ProfileInfo />
        <ProfileCalendar />
        <ProfileEvent />
      </ProfileContextProvider>
    </div>
  );
}

export default ProfileContainer;
