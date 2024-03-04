// import { useState } from 'react';
// import Button from '../global_components/Button';

// import SelectOption from '../global_components/SelectOption';
import NavBar from '../layouts/NavBar';
import ExploreContainer from '../features/Events/context/components/ExploreContainer';

export default function ExplorePage() {
  return (
    <div className='w-dvw'>
      <div>
        <img
          className='w-[100vw] h-[20vh] object-cover overflow-clip'
          src='https://cdn.kimkim.com/files/a/images/a42fbf058788fbd7e37a09df95e594fbc30ed09d/original-f4be04b08a3412d584657db34c4c58d8.jpg'
          alt='cover'
        />
        <div />
        <ExploreContainer />
      </div>
    </div>
  );
}
