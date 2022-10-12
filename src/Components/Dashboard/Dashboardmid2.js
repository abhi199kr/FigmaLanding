import React from 'react'
import head from "../../Assets/Images/head.png"
import clock from "../../Assets/Images/clock.png"
import ud from "../../Assets/Images/ud.png"


const Dashboardmid2 = () => {
  return (
    <div className='px-20'>
      <h1 className='text-4xl font-bold'>Features</h1>
      <div className='flex gap-10 px-10'>
      <div className='w-1/3'>
      <div className='w-32 h-32 rounded-full bg-gray-200 text-center mt-5 '>
      <img src={head} alt="" className='px-10 pt-8' />

      </div>
      <h2 className='font-bold pt-2'>Support accross channels</h2>

      </div>

      <div className='w-1/3'>
      <div className='w-32 h-32 rounded-full bg-gray-200 text-center mt-5 '>
      <img src={clock} alt="" className='px-10 pt-8' />

      </div>
      <h2 className='font-bold pt-2'>Time Saving</h2>

      </div>


      <div className='w-1/3'>
      <div className='w-32 h-32 rounded-full bg-gray-200 text-center mt-5 '>
      <img src={ud} alt="" className='px-10 pt-8' />

      </div>
      <h2 className='font-bold pt-2'>Boosts Customer engagement</h2>

      </div>


      </div>
    </div>
  )
}

export default Dashboardmid2
