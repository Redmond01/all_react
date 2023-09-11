import React from "react";
import pics from '../jossy_watch_asset/Vector.png'
import love from '../jossy_watch_asset/love.png'
import cart from '../jossy_watch_asset/shop.png'


const Topnav=() => {
  return(
    <>
    <div className="bg-slate-200 w-full h-[5rem] flex items-center justify-evenly">
        <div className="w-[45%] h-full">
        <div className="flex justify-around items-center w-[80%] h-full px-12">
            <h3 className="font-semibold font-sans text-lg cursor-pointer hover:text-xl capitalize">catalog</h3>
            <h3 className="font-semibold font-sans text-lg cursor-pointer hover:text-xl capitalize">about</h3>
            <h3 className="font-semibold font-sans text-lg cursor-pointer hover:text-xl capitalize">blog</h3>
            <h3 className="font-semibold font-sans text-lg cursor-pointer hover:text-xl capitalize">contact</h3>
        </div>
        </div>
        <div className="w-[10%] h-full border white-black flex justify-center items-center">
        <div className="w-[30%] items-center flex justify-center">
            <img src={pics} alt="imgs"className="w-[2rem] h-[2rem] cursor-pointer"/>
                <h3 className="text-2xl font-sans uppercase font-bold cursor-pointer">adg</h3>
            </div>
        </div>
        <div className="w-[45%] h-full flex justify-center items-center">
            <div className="flex justify-end items-center gap-10 w-[70%] h-full">
                <h3 className="font-semibold font-sans capitalize text-lg cursor-pointer">sign in</h3>
                <div className=" flex justify-center items-center gap-2">
                    <img src={love} alt="like" className="cursor-pointer"/>
                    <div className="bg-purple-700 cursor-pointer flex justify-evenly items-center rounded-sm w-[2.5rem] h-[1.2rem] bg-no-repeat">
                    <img src={cart} alt="cart"/>
                    <h3 className="font-semibold text-white font-sans">3</h3>
                    </div>
                </div>
            </div>
            <di className="w-[30% h-full"></di>
        </div>
    </div>
    </>
  )
}
export default Topnav


