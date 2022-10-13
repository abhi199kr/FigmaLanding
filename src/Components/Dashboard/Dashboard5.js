import React from 'react'
import star from "../../Assets/Images/star.png"
import "./D5.css"

const Dashboard5 = () => {
  return (
    <div className='pt-20 px-10 md:px-20 md:grid justify-center overflow-hidden'>
    <p className='font-bold md:text-2xl '>How was your experience using our website?
</p>
<div className='flex gap-1 md:gap-10 py-10'>
<img src={star} className="h-12 md:h-20" alt="" />
<img src={star} className="h-12 md:h-20" alt="" />
<img src={star} className="h-12 md:h-20" alt="" />
<img src={star} className="h-12 md:h-20" alt="" />
<img src={star} className="h-12 md:h-20" alt="" />


</div>
<p className='mx-auto font-normal text-gray-500 text-center text-2xl'>Or</p>
<div>
  <button className='review font-normal'>Write a review</button>
</div>

      
    </div>
  )
}

export default Dashboard5
