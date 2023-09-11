import React from "react";
import facebook from '../pics/facebook.png'
import google from '../pics/googleplus.png'
import twitter from '../pics/twitter.png'
import instagram from '../pics/instagram.png'


const Footer=() => {
  return(
    <>
    <div className="bg-white h-[20rem] px-12">
        <div className="h-[4rem] flex items-center justify-center capitalize text-green-600">
        <h3 className="font-black font-sans text-3xl ">Villamond homes</h3>
        </div>
        <div className=" grid grid-cols-3 justify-evenly items-center">
        <div className="py-4 px-8 space-y-3 capitalize font-bold">
            <h3 className="font-extrabold uppercase font-sans text-xl">properties</h3>
            <h3 className="cursor-pointer">lands</h3>
            <h3 className="cursor-pointer">homes</h3>
            <h3 className="cursor-pointer">rent space</h3>
            <h3 className="cursor-pointer">halls</h3>
        </div>
        <div className="py-4 px-8 space-y-3 capitalize font-bold">
            <h3 className="font-extrabold uppercase font-sans text-xl">our sevice</h3>
            <h3 className="cursor-pointer">sell lands</h3>
            <h3 className="cursor-pointer">rent out apartments</h3>
            <h3 className="cursor-pointer">lease houses</h3>
            <h3 className="cursor-pointer">buy lands</h3>
        </div>
        <div className="py-4 px-8 space-y-3 capitalize font-bold">
            <h3 className="font-extrabold uppercase font-sans text-xl">office</h3>
            <h3 className="cursor-pointer">ogun (head office)</h3>
            <h3 className="cursor-pointer">lagos</h3>
            <h3 className="cursor-pointer">abuja</h3>
            <h3 className="cursor-pointer">ibadan</h3>
        </div>
        </div>
        <div className="h-[4rem] flex justify-center items-center space-x-8">
            <div className="w-[20rem] flex justify-between items-center">
            <div style={{backgroundImage: `url(${facebook})`, backgroundSize:'100% 100%'}} className="h-[2rem] w-[2rem] cursor-pointer"></div>
            <div style={{backgroundImage: `url(${twitter})`, backgroundSize:'100% 100%'}} className="h-[2rem] w-[2rem] cursor-pointer"></div>
            <div style={{backgroundImage: `url(${instagram})`, backgroundSize:'100% 100%'}} className="h-[2rem] w-[2rem] cursor-pointer"></div>
            <div style={{backgroundImage: `url(${google})`, backgroundSize:'100% 100%'}} className="h-[2rem] w-[2rem] cursor-pointer"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer