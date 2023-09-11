import React from 'react'
import bgb from '../jossy_watch_asset/bgb.png'
import pics from '../jossy_watch_asset/main.png'
import styles from '../style/style.module.css'
import arrow from '../jossy_watch_asset/Arrow.png'


function layer3() {
  return (
    <>
    <div className='relative'>
    <div className='bg-yellow-600 flex  h-[40rem] w-full' style={{backgroundImage: `url(${bgb})`, objectFit:'contain',}}>
        <div className='w-[50%] h-full'>
             <div class={styles.bgs}></div>
             <div className={styles.bgl}></div>
            <img src={pics} alt='imges' className={styles.pics}/>
            <div class={styles.bgs1}></div>
             <div className={styles.bgl1}></div>
            <div class={styles.bgs2}></div>
        </div>
        <div className='w-[50%] h-full flex justify-center items-center'>
            <div className='h-[90%] w-[70%]'>
                <div className='w-full h-[10%]'></div>
                <div className='h-[15%] w-full flex justify-start items-end tracking-[4px]'><h3 className='font-extrabold font-sans text-3xl capitalize text-white'>collection by golden</h3></div>
                <div className='h-[60%] flex justify-end items-end'><h3 className='font-semibold text-lg font-sans text-white'>obis tenetur? Non quo eaque amet cupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerumcupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerum cupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerumm dolor, consectetur rerumcupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerum cupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerumm dolor, consectetur rerumcupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerum cupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerum</h3>
                    </div>
                    <div className="h-[15%] w-full rounded-lg flex justify-start items-center">
                                <div className="flex items-center justify-around h-[40%] rounded-sm w-[30%] bg-blue-700">
                                <h3 className="h-fulll w-full text-white font-sans font-bold px-1 ">Go to shop </h3>
                                <div className="h-[60%] w-[50%]">
                                <img src={arrow} alt="images"/>
                                </div>
                                </div>
                                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default layer3

{/* <div className='border border-black w-[70%] h-full '>
<div className='border-black border w-[20rem] h-[10rem]' class={styles.bgs1}></div>
<div className={styles.bgl}></div>
<div className='border-white border w-[20rem] h-[10rem]' class={styles.bgs2}></div>
</div> */}