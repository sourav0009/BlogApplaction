import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import React from 'react';

const Page = () => {
  return (
    <>
      <BackgroundBeamsWithCollision className=' h-[92vh]'>
        <div className="absolute md:space-x-3 md:flex-row  bottom-96 flex-col flex justify-center text-center bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span className="md:text-7xl text-4xl font-bold">Welcome</span>
          <span className='md:text-7xl text-3xl font-bold'>To Blog Community</span>
        </div>
      </BackgroundBeamsWithCollision>

      <div className="fixed bottom-10 left-0 right-0 flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:max-w-5xl w-full lg:mb-0 lg:text-left text-white ">

          {/* Learn Section (Hidden on Mobile) */}
          <a
            href="/docs"
            className="group rounded-lg border border-transparent px-5 py-4  hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hidden sm:block hs-accordion transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn how to create and upload your blogs here.
            </p>
          </a>

          {/* Popular Section (Hidden on Mobile) */}
          <a
            href="/popular"
            className="group rounded-lg border border-transparent px-5 py-4 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hidden sm:block hs-accordion transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Popular{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Lets see all popular blogs here!
            </p>
          </a>

          {/* Queries Section (Hidden on Mobile) */}
          <a
            href="/query"
            className="group rounded-lg border border-transparent px-5 py-4 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hidden sm:block hs-accordion transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Queries{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the problems faced by users and prove you are unique.
            </p>
          </a>

          {/* Register / Login Section (Visible on all screen sizes) */}
          <a
            href="/login"
            className="group rounded-lg  border-transparent px-14 py-4 md:px-4 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hs-accordion transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
          > 
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Register / Login{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              If you are not a user, please login first for further processes.
            </p>
          </a>
        </div>
      </div>

    </>
  );
};

export default Page;
