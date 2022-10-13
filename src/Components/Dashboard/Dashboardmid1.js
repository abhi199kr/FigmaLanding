import React from 'react'
import Zendy from "../../Assets/Images/zendy.jpg"
import "./Dashboardmid1.css"

const Dashboardmid1 = () => {
  return (
    <div className='flex flex-col md:flex-row pt-20 pl-10 md:px-20 overflow-hidden'>
      <div className='md:w-3/5'>
     <h1 className='font-bold text-5xl md:text-7xl'>Build betters  relationships with your customers</h1> 
      
      <p className='pt-5 para'>lorem ipsum cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,  
      </p>
      <div className='flex flex-col md:flex-row gap-5 pt-8'>
      <div className='get text-center text-white'>Get Statrted</div>
      <div className='get text-center text-white'>Start Your free trial</div>

      </div>
      </div>
      <div className='-pt-20'>
        <img src={Zendy} alt="" className='-py-10' />
      </div>
      

    </div>
  )
}

export default Dashboardmid1
