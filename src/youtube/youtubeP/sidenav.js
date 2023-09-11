import React from "react";
import styles from '../style/style.module.css'

const Layer1=() => {
  return(
    <>
            <div className="h-[4rem] w-full flex justify-evenly px-8 items-center gap-8 ">
        <div className="space-y-1"> 
          <hr className="w-5 border border-white border-3"></hr>
          <hr className="w-5 border border-white border-3"></hr>
          <hr className="w-5 border border-white border-3"></hr>
        </div>
        <div className="h-[3rem] w-[15rem] flex items-center  ">
          <div className="bg-red-700 h-[2.5rem] w-[3rem] rounded-xl flex items-center justify-center cursor-pointer">
            <div className="bg-white h-[0.7rem] w-[1rem]"></div>
          </div>
          <div className="flex h-[3rem] justify-center items-center">
            <h3 className="text-xl font-mono font-extrabold text-white cursor-pointer">YouTube</h3>
            <h4 className="font-semibold text-white justify-self-start self-start">NG</h4>
          </div>
        </div>
        </div>
    </>
  )
}
const Layer2=() => {
  return(
    <>
        <div className="h-[7rem] w-full ">
          <div className="flex justify-stretch gap-8 items-center h-2/6 w-[80%] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">home</h3></div>
          </div>
          <div className="flex justify-stretch gap-8 items-center h-2/6 w-[80%] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">shorts</h3></div>
          </div>
          <div className="flex justify-stretch gap-8 items-center h-2/6 w-[80%] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">subscriptions</h3></div>
          </div>
        </div>
    </>
  )
}

const Layer3=() => {
  return(
    <>
    <div class={styles.scroll}>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">library</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg  cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">history</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">your videos</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">watch later</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">liked videos</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">downloaded</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">watch later</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">saved videos</h3></div>
          </div>
    <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white ">playlist</h3></div>
          </div>
      </div>
    </>
  )
}

const Layer4=() => {
  return(
    <>
    <div className={styles.scroll1}>
      <div className=" font-semibold font-serif px-8 text-lg text-white">subscriptions</div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white text-ellipsis overflow-hidden w-[7rem] whitespace-nowrap">mr beast reaction</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white text-ellipsis overflow-hidden w-[7rem] whitespace-nowrap ">mkbhd</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white text-ellipsis overflow-hidden w-[7rem] whitespace-nowrap ">mrwhosetheboss</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white text-ellipsis overflow-hidden w-[7rem] whitespace-nowrap ">scam baiter</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white text-ellipsis overflow-hidden w-[7rem] whitespace-nowrap ">raymond codes</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white text-ellipsis overflow-hidden w-[7rem] whitespace-nowrap ">nn news</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white  overflow-hidden text-ellipsis w-[7rem] whitespace-nowrap">jokes with bunny</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white w-[7rem] overflow-hidden text-ellipsis whitespace-nowrap">brainjotter</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white  w-[7rem] overflow-hidden text-ellipsis whitespace-nowrap ">dannyOkec dev hub</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white w-[7rem] overflow-hidden text-ellipsis whitespace-nowrap ">football fans tribe</h3></div>
          </div>
      <div className="flex justify-stretch gap-8 items-center w-[80%] h-[2.5rem] hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <div></div>
            <div className="bg-white h-[1rem] w-[1rem]"></div>
            <div><h3 className="font-semibold text-lg capitalize text-white  w-[7rem] overflow-hidden text-ellipsis whitespace-nowrap ">john rig everything</h3></div>
          </div>
    </div>
    </>
  )
}


const Topnav=() => {
    return(
      <>
      <div className="bg-black h-[70rem] py-4 w-1/5  space-y-6 top-0 sticky">
        <Layer1/>
        <Layer2/>
        <hr className="w-[15rem]"></hr>
        <Layer3/>
        <hr className="w-[15rem]"></hr>
        <Layer4/>
      </div>
      </>
    )
  }
  export default Topnav