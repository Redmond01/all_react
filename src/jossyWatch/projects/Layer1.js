
import React from "react";
import styles from '../style/style.module.css'
import bg1 from '../jossy_watch_asset/bg1.png'
import bg2 from '../jossy_watch_asset/bg2.png'
import loading from '../jossy_watch_asset/loading.png'
import main1 from '../jossy_watch_asset/main1.png'
import arrow from '../jossy_watch_asset/Arrow.png'



const Layer1=() => {
  return(
    <>
    <div className="relative">
    <div className="w-full h-[40rem] flex">
      <div className="w-[50%] h-full" style={{backgroundImage:`url(${bg1})`,filter:'opacity(100%)', objectFit:'cover',backgroundPosition:'center' }}></div>
      <div className=" w-[50%] h-full" style={{backgroundImage:`url(${bg2})`,filter:'opacity(12%)',backgroundRepeat:'no-repeat',objectFit:'cover',backgroundPosition:'right' }}></div>
    </div>

      <div className="w-full h-[40rem] top-0 absolute flex">
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center" >
            <div className="w-full h-full">
            <img src={loading} alt="imgs"/>
            <img src={main1} alt="imgs"  className={styles.trans}/>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-full  ">
          <div className="h-[5%] w-full"></div>
          <h3 className="uppercase font-semibold font-sans tracking-[4px] py-4">quality smart watch</h3>
          <div className=" w-[90%] h-[45%]">
            <h3 className={styles.font1}>For people who<br/><span className={styles.font}> do not go with</span> <br/> <span className={styles.font}>the times. </span> </h3>
          </div>
          <div className="w-[75%] h-[25%] ">
            <h3 className="font-semibold tracking-[1px] text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos, consequuntur repellat cumque magnam dignissimos inventore aliquid hic quia recusandae culpa exercitationem maxime
               tempora placeat nobis tenetur? Non quo eaque amet cupiditate error quibusdam 
               vel accusantium dolor, consectetur rerum </h3>
          </div>
          <div className="h-[10%] w-[90%]  flex justify-start items-center">
            <div className="h-[50%] w-[10rem] bg-blue-700 flex justify-start items-center rounded-sm">
              <div className="h-[90%] w-[70%] px-1"><h3 className="font-bold text-white text-lg ">shop now</h3></div>
              <div className="h-[60%] w-[30%] ">
                <img src={arrow} alt="images"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default Layer1