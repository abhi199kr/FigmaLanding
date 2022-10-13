import React from 'react'
import head from "../../Assets/Images/head.png"
import clock from "../../Assets/Images/clock.png"
import ud from "../../Assets/Images/ud.png"
import { MdSupportAgent } from 'react-icons/md';

const Dashboardmid2 = () => {
  return (
    <div className='px-10 pt-10 md:px-20'>
      <h1 className='text-4xl font-bold'>Features</h1>
      <div className='flex flex-col md:flex-row gap-10 px-10'>
      <div className='md:w-1/3'>
      <div className='w-32 h-32 rounded-full bg-gray-200 text-center mt-5 mx-auto lg:mx-10 '>
      {/* <img src={head} alt="" className='px-10 pt-8' /> */}
      <MdSupportAgent  className='h-20 pt-6 pr-16   w-48' />

      </div>
      <h2 className='font-bold pt-2 text-center md:text-start'>Support accross channels</h2>

      </div>

      <div className='md:w-1/3'>
      <div className='w-32 h-32 rounded-full bg-gray-200 text-center mt-5 mx-auto '>
      <img src={clock} alt="" className='px-10 pt-8' />

      </div>
      <h2 className='font-bold pt-2 px-5 text-center'>Time Saving</h2>

      </div>


      <div className='md:w-1/3 ' >
      <div className='w-32 h-32 rounded-full bg-gray-200 text-center mt-5 lg:mx-10 mx-auto'>
      <img src={ud} alt="" className='px-10 pt-8' />

      </div>
      <h2 className='font-bold pt-2'>Boosts Customer engagement</h2>

      </div>


      </div>
    </div>
  )
}

export default Dashboardmid2
