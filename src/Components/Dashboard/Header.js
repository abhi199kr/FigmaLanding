import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='bg-blue-400'>
    <div className='flex px-5 py-2'>
    <div className='mr-36'><button className='log'>Log in</button></div>
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
    <div className='flex gap-3 place-items-end ml-auto'>
    <div><button className='login'>Log in</button></div>
    <div><button className='login'>Sign up</button></div>
   
    

    </div>

    </div>
    
      
    </div>
  )
}

export default Header
