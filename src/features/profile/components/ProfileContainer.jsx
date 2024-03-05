import ProfileContextProvider from '../context/ProfileContext';
import ProfileCalendar from './ProfileCalendar';
import ProfileEvent from './ProfileEvent';
import ProfileInfo from './ProfileInfo';
<<<<<<< HEAD
// import 'rsuite/dist/rsuite.min.css';
=======
>>>>>>> d22e548261c363c8a0292b76df914316028a4729

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
