import React from "react";
import pic from '../flowbite/project_files/mainpage.png'

const Layer1= () => {
  return(
    <>
    <div className="flex py-20 px-12 h-[35rem]  ">
    <div className=" w-6/12 py-16 ">
        <h1 className="text-6xl font-extrabold">Building digital <br></br> products & brands.</h1>
        <h4 className="font-semibold text-slate-400 py-8 ">Here at rmdtech we foucus on markets where technology,
            innovation, and capital can unlock long-term vlaue and drive ecomonic growth.</h4>
            <div className="flex w-[20rem] space-x-4">
                    <h3 className=" hover:text-white hover:bg-black rounded-[10px] bg-purple-700 text-sm border-none w-2/4 h-[2rem] text-center flex items-center justify-center text-white font-sans hover:cursor-pointer">start 30 day free trial </h3>
                    <h3 className="hover:text-white hover:bg-black  rounded-[10px] bg-slate-300 text-sm border-none w-2/4 h-[2rem] text-center flex items-center justify-center text-black font-sans hover:cursor-pointer">pricing & FAQ </h3>
            </div>
    </div>
    <div className='w-6/12 flex  justify-end items-end'>
        <div className="w-[100%] h-[100%] ">
          <img src={pic} alt="img" className="object-contain h-full w-full "></img>
        </div>
    </div>
    </div>
    </>
  )
}

export default Layer1