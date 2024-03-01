import Avatar from '../../../global_components/Avatar';

function ProfileInfo() {
  return (
    <div>
      {/* PROFILE */}
      <div className='relative rounded-lg overflow-hidden'>
        {/* background */}
        <img
          src='https://images.unsplash.com/photo-1709065397155-1cd979c61fac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className='w-full h-full inset-0 opacity-85'
        />
        {/* profile information */}
        <div className='absolute flex flex-col gap-1 justify-center items-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
          <Avatar size='w-[5rem]' />
          <div className='text-sm'>Mr.Red Green</div>
          <div>0</div>
          <div className='text-sm'>event reminded</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
