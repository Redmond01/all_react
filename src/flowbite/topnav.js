
import React from 'react'
import logo from '../flowbite/project_files/logo.png'

const  Topnav= () => {
  return(
    <>
    <div className=' flex justify-between items-center h-[4rem] sticky top-0 bg-white'>
      <div className='flex space-x-4 text-sm font-bold font-sans capitalize px-12 text-black items-center'>
          <div className='hover:text-black hover:cursor-pointer h-[2rem] w-[1.9rem]' style={{backgroundImage: `url(${logo})`}}></div>
          <h3  className='hover:text-black hover:cursor-pointer text-lg'>rmdtech</h3>
          <h4  className='hover:text-black hover:cursor-pointer'>company</h4>
          <h4  className='hover:text-black hover:cursor-pointer'>marketplace</h4>
          <h4  className='hover:text-black hover:cursor-pointer'>features</h4>
          <h4  className='hover:text-black hover:cursor-pointer'>team</h4>
          <h4  className='hover:text-black hover:cursor-pointer'>contact</h4>
      </div>
      <div className='flex px-4 font-sans font-bold capitalize space-x-2 items-center'>
          <h3>Log in</h3>
          <div className='bg-purple-700 hover:bg-black text-xs rounded-[10px] h-[2rem] w-[7rem] cursor-pointer flex items-center justify-center text-white text-center '>get started</div>
      </div>
    </div>
    </>
    
  )
}

export default  Topnav 