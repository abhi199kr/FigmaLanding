import React from 'react'
import job from "../../Assets/Images/job.png"
import './D4.css'
const Dashbord4 = () => {
  return (
    <div className='pt-20 px-10  md:px-20'>
      <h1 className='text-center font-bold text-2xl'>Why Choose us?</h1>
      <p className='pt-2 mt-10 md:px-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda officiis blanditiis. Vitae, optio, voluptate repellat debitis ab laborum, adipisci impedit quod architecto enim doloremque a ipsa excepturi voluptatem sed.
      </p>
      <div className=' justify-center grid -mt-24 py-20'>
        <img src={job} alt="" className='text-center h-72' />
      </div>

      {/* second last div */}
      <div className='flex flex-col md:flex-row gap-20 pt-5'>
      <div className='md:w-1/3'>
      <h1 className='font-bold text-2xl'>1.Lorem Ipsum</h1>
      <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quidem, ut, dignissimos nemo quis vel nulla voluptate dolor, ratione quam eveniet? Dolore exercitationem libero harum odit incidunt, quas illum fugit.
      </p>

      </div>
      <div className='md:w-1/3'>
      <h1 className='font-bold text-2xl'>2.Lorem Ipsum</h1>
      <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quidem, ut, dignissimos nemo quis vel nulla voluptate dolor, ratione quam eveniet? Dolore exercitationem libero harum odit incidunt, quas illum fugit.
      </p>

      </div>
      <div className='md:w-1/3'>
      <h1 className='font-bold text-2xl'>3.Lorem Ipsum</h1>
      <p className='font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quidem, ut, dignissimos nemo quis vel nulla voluptate dolor, ratione quam eveniet? Dolore exercitationem libero harum odit incidunt, quas illum fugit.
      </p>

      </div>
      

      </div>
      <div className='text-center mt-10'>
      <button className='know font-normal'>Know more</button>

      </div>
    </div>
  )
}

export default Dashbord4
