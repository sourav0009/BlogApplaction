import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import React from 'react'

const page = () => {
  return (
    <div className=' flex w-screen h-screen flex-col items-center justify-between  overflow-hidden'>
      <BackgroundBeamsWithCollision className='mt-16'>
        <div className="absolute bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          <span className="text-7xl font-bold">welcome to Blog community</span>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default page
