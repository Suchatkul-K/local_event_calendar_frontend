import Avatar from '../../../global_components/Avatar';

function ProfileInfo() {
  return (
    <div>
      {/* PROFILE */}
      <div className='relative rounded-lg overflow-hidden'>
        {/* background */}
        <img
          src='https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg?w=1380&t=st=1709804450~exp=1709805050~hmac=4c85aca3c616ca98340e0830af1ee007637ad316e33a824cde3d9d9b15a159c4'
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
