import NavBar from '../../../layouts/NavBar';
import ProfileCalendar from './ProfileCalendar';
import ProfileEvent from './ProfileEvent';
import ProfileInfo from './ProfileInfo';

function ProfileContainer() {
  return (
    <>
      <NavBar />
      <div className='p-4'>
        <ProfileInfo />
        <ProfileCalendar />
        <ProfileEvent />
      </div>
    </>
  );
}

export default ProfileContainer;
