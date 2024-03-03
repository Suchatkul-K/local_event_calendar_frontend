import ProfileCalendar from './ProfileCalendar';
import ProfileEvent from './ProfileEvent';
import ProfileInfo from './ProfileInfo';
import NavBar from '../../../layouts/NavBar';

function ProfileContainer() {
  return (
    <div className='p-4'>
      <ProfileInfo />
      <ProfileCalendar />
      <ProfileEvent />
    </div>
  );
}

export default ProfileContainer;
