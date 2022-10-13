import React from 'react'
import "./Foot.css"

const Footer = () => {
  return (
    <div className='foot pt-10 w-full mt-10 py-20'>
    <div className='text-center'>
      <button className='bg-white px-10 font-normal py-3'>Logo</button>
    </div>

    <div className='px-10 md:px-20 flex flex-col md:flex-row gap-10 text-white pt-20'>
    <div className='md:w-1/4'>
      <h1 className='font-bold'>About Us</h1>
      <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatum illum quis accusantium quam suscipit? Necessitatibus cum, aperiam at expedita dolorem odio neque repudiandae voluptatem numquam quos reiciendis suscipit incidunt!
      </p>
    </div>
    <div className='md:w-1/4'>
      <h1 className='font-bold'>About Us</h1>
      
    </div>
    <div className='md:w-1/4'>
      <h1 className='font-bold'>About Us</h1>
      
    </div>
    <div className='md:w-1/4'>
      <h1 className='font-bold'>Contact Us</h1>

      {/* <p className='cd'>Email</p> */}
      <input type="text" placeholder='Email id ' className='cd' />
      <input type="text" placeholder='contact Number' className='cd' />
      <br />
      <button className='cd w-full px-16'>Submit</button>
      
    </div>


    </div>
    </div>
  )
}

export default Footer
