import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='border-2 border-gray-100 overflow-hidden'>
    <div className='flex px-5 py-2'>
    <div className=''><button className='log'>Logo</button></div>
    {/* <div className='py-5'>logo</div> */}
    {/* next flex for between */}

    <div className='flex gap-10 between_ py-5 ml-auto'>
    
    <div>Resources</div>
    <div>Features</div>
    <div>Header</div>
    <div>Solutions</div>
    <div>Blog</div>
    <div>Pricing</div>
    <div>About Us</div>
    
    

    </div>
    <div className='flex gap-3  ml-auto my-auto '>
    <button className='login '>Logins</button>
    <button className='login'>Sign up</button>
    
   
    

    </div>

    </div>
    
      
    </div>
  )
}

export default Header
