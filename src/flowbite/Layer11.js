import React from "react";
import logo from '../project_files/logo.png'
import git from '../project_files/github.png'
import x from '../project_files/twitter.png'
import dribble from '../project_files/dribbble.png'
import facebook from '../project_files/facebook-f.png'


const Layer11 = () => {
  return(
    <>
    <div mother className="grid grid-rows-3 h-[10rem] justify-center items-baseline py-8">
        <div className="flex justify-center items-center py-2">
            <div style={{backgroundImage: `url(${logo})`}} className="h-[2rem] w-[2rem] object-contain bg-no-repeat hover:cursor-pointer"></div>
            <h3 className="font-extrabold font-sans hover:cursor-pointer">Landwind</h3>
        </div>
        <div className="py-3">
            <h3 className="text-slate-400 font-semibold">2023 Flowbite, inc. All rights reserved</h3>
        </div>
        <div className="flex space-x-4 py-4 items-center justify-center">
            <div style={{backgroundImage: `url(${git})`}} className="h-[2rem] w-[2rem] object-contain bg-no-repeat hover:cursor-pointer"></div>
            <div style={{backgroundImage: `url(${x})`}} className="h-[2rem] w-[2rem] object-contain bg-no-repeat hover:cursor-pointer"></div>
            <div style={{backgroundImage: `url(${dribble})`}} className="h-[2rem] w-[2rem] object-contain bg-no-repeat hover:cursor-pointer "></div>
            <div style={{backgroundImage: `url(${facebook})`}} className="h-[2rem] w-[2rem] object-contain bg-no-repeat hover:cursor-pointer "></div>
        </div>
    </div>
    </>
  )
}

export default Layer11