import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import React from 'react';

const Page = () => {
  return (
    <BackgroundBeamsWithCollision className='md:mt-20 h-[92vh]'>
      <div className="absolute md:space-x-3 md:flex-row flex-col flex justify-center text-center bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
        <span className="md:text-7xl text-4xl font-bold">Welcome</span>
        <span className='md:text-7xl text-3xl font-bold'>To Blog Community</span>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Page;
