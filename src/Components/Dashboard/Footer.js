import React from 'react'
import "./Foot.css"
import fb from "../../Assets/Images/fb.png"
import tw from "../../Assets/Images/tw.png"
import linkdin from "../../Assets/Images/lindin.png"

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

      <div className='flex gap-5 mt-10'>
      <div className='w-12 h-12 bg-white rounded-full'>
      <img src={fb} alt="" className='px-3 py-4  h-12'/>
      </div>
      <div className='w-12 h-12 bg-white rounded-full'>
      <img src={tw} alt="" className='px-3 py-4 object-fit'/>
      </div>
      <div className='w-12 h-12 bg-white rounded-full'>
      <img src={linkdin} alt="" className='px-3 py-4  h-12'/>
      </div>

      </div>
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
