import React from 'react'
import apple1 from '../jossy_watch_asset/apple.png'
import apple from '../jossy_watch_asset/applelogo.png'
import amex from '../jossy_watch_asset/amex.png'
import discord from '../jossy_watch_asset/discord.png'
import git from '../jossy_watch_asset/git.png'
import dev from '../jossy_watch_asset/dev.png'
import figma from '../jossy_watch_asset/figma.png'

function layer4() {
  return (
    <>
    <div className='h-[45rem] w-full flex justify-center items-center'>
        <div className='h-[90%] w-[90%]'> 
        <div className='h-[25%] w-full text-center space-y-4 '>
            <h3 className='text-4xl font-bold font-sans tracking-[3px]'>Brand we provide</h3>
            <h3 className='font-semibold text-xl font-sans  '>ADG id dolor sit amet consecteut. ipsum<br/> lacus arcu facilisis</h3>
        </div>

        <div className='w-full h-[75%] flex justify-center items-center'>
            <div className='w-[90%] h-[90%]  gap-3  grid grid-cols-4'>
                <div className='w-[17rem] space-y-2'>
                    <div className='bg-black rounded-lg h-[55%] flex items-center justify-center'>
                        <img src={apple1} alt='images'/>
                    </div>
                    <div className='bg-black rounded-lg h-[43%] flex items-center justify-center'>
                    <img src={amex} alt='images'/>
                    </div>
                </div>
                <div className='w-[17rem] space-y-2'>
                    <div className='bg-black rounded-lg h-[35%] flex items-center justify-center'>
                        <img src={apple} alt='images'/>
                    </div>
                    <div className='bg-black rounded-lg h-[63%] flex items-center justify-center'>
                    <img src={discord} alt='images'/>
                    </div>
                </div>
                <div className='w-[17rem] space-y-2'>
                    <div className='bg-black rounded-lg h-full flex items-center justify-center'>
                        <img src={git} alt='images'/>
                    </div>
                </div>
                <div className='w-[17rem] space-y-2'>
                    <div className='bg-black rounded-lg h-[43%] flex items-center justify-center'>
                        <img src={dev} alt='images'/>
                    </div>
                    <div className='bg-black rounded-lg h-[55%] flex items-center justify-center'>
                    <img src={figma} alt='images'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default layer4