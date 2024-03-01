import ProfileCalendar from './ProfileCalendar';
import ProfileEvent from './ProfileEvent';
import ProfileInfo from './ProfileInfo';
import NavBar from '../../../global_components/NavBar';

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
