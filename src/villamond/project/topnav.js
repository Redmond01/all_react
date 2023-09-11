

import React from "react";


const Topnav= () => {
  return(
    <>
    <div className="bg-green-600 h-[3rem]  w-full p-4 flex justify-between items-center px-12">
        <div className=" w-1/4">
            <h3 className="font-black text-green-900   text-lg font-sans capitalize cursor-pointer px-12">villamond</h3></div>
        <div className="flex space-x-10  justify-evenly text-white w-2/4 font-serif capitalize font-bold text-md">
            <div><h3 className="cursor-pointer">alafia garden</h3></div>
            <div><h3 className="cursor-pointer">properties</h3></div>
            <div><h3 className="cursor-pointer">service</h3></div>
            <div><h3 className="cursor-pointer">about us</h3></div>
        </div>
        <div className="px-12 font-serif capitalize font-extrabold"> <h3 className=" border-white rounded-md bg-white text-sm text-green-700 w-[5rem] h-[2rem] flex justify-center items-center cursor-pointer hover:bg-black hover:text-white">contact us</h3></div>
    </div>
    </>
  )
}

export default Topnav