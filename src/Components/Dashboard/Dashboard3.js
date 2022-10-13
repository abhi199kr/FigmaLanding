import React from 'react'
import sit from "../../Assets/Images/sit.png"

const Dashboard3 = () => {
  return (
    <div className='px-10 md:px-20  pt-10'>
    <h1 className='font-bold text-2xl'>All Customer relationships managed in one place</h1>
      <div className='flex flex-col md:flex-row pt-10'>
      <div className='md:w-1/2'>
        <img src={sit} alt="" />
      </div>
      <div className='md:w-1/2'>
      <div className='pt-20'>
        <h1 className='font-bold text-2xl'>1.Lorem Ipsum</h1>
        <p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
</p>
      </div>
      <div className='pt-20'>
        <h1 className='font-bold text-2xl'>2.Lorem Ipsum</h1>
        <p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
</p>
      </div>
      <div className='pt-20'>
        <h1 className='font-bold text-2xl'>3.Lorem Ipsum</h1>
        <p>
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
</p>
      </div>


      </div>

      </div>
    </div>
  )
}

export default Dashboard3
