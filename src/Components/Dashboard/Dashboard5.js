import React from 'react'
import star from "../../Assets/Images/star.png"
import "./D5.css"

const Dashboard5 = () => {
  return (
    <div className='pt-20 px-20 grid justify-center'>
    <h1 className='font-bold text-2xl'>How was your experience using our website?
</h1>
<div className='flex gap-10 py-10'>
<img src={star} alt="" />
<img src={star} alt="" />
<img src={star} alt="" />
<img src={star} alt="" />
<img src={star} alt="" />


</div>
<p className='mx-auto font-normal text-gray-500'>Or</p>
<div>
  <button className='review font-normal'>Write a review</button>
</div>

      
    </div>
  )
}

export default Dashboard5
