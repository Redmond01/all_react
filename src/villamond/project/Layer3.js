import React from "react";
import temp1 from '../pics/bg_template1.jpg'
import temp2 from '../pics/bg_template2.jpg'
import temp3 from '../pics/bg_template3.jpg'
import style from '../style/style.module.css'

const Layer3= () => {

  return(
    <>
    <div className='h-[100rem] relative space-y-[30px] flex justify-center items-center'>
        <div className="absolute  bg-white h-[90%] w-[90%] "  class={style.slide1}> 
        <div className="h-[30rem] bg-green-600 flex items-center justify-center">
            <div className=" h-[80%] w-3/5" style={{backgroundImage: `url(${temp1})`, backgroundSize: '100% 100%'}}></div>
            <div className=" h-[80%] w-2/5 flex justify-center items-center"> 
            <h3 className="font-semibold p-1 tracking-wider font-serif text-xl text-white text-center">at <span className="font-black text-3xl text-black font-sans capitalize">alafia garden,</span>we make your home sit at the right spot, and set up the best environment for your children to live. </h3>
             </div>
        </div>


        <div className="h-[30rem] bg-green-600 flex justify-center items-center">
            <div className=" h-[80%] w-2/5 flex justify-center items-center" >
            <h3 className="font-semibold tracking-wider p-1 font-serif text-xl text-white text-center">at <span className="font-black text-3xl text-black font-sans capitalize">alafia garden,</span>we make your home sit at the right spot, and set up the best environment for your children to live. </h3>
            </div>
            <div className=" h-[80%] w-3/5" style={{backgroundImage: `url(${temp2})`, backgroundSize: '100% 100%'}}></div>
        </div>


        <div  className="h-[30rem] bg-green-600 flex items-center justify-center">
            <div className=" h-[80%] w-3/5" style={{backgroundImage: `url(${temp3})`, backgroundSize: '100% 100%'}}></div>
            <div className=" h-[80%] w-2/5 flex justify-center items-center">
            <h3 className="font-semibold tracking-wider font-serif p-1 text-xl text-white text-center">at <span className="font-black text-3xl text-black font-sans capitalize">alafia garden,</span>we make your home sit at the right spot, and set up the best environment for your children to live. </h3>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Layer3