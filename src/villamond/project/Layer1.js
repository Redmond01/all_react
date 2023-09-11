import React from "react";
// import pics from '../pics/landscape.png'
import backG from '../pics/background.png'
import backG2 from '../pics/bg_template4.jpg'


const Layer1=() => {
  return(
    <>
    <div className="h-[45rem] relative" >
      <div style={{backgroundImage: `url(${backG})`, backgroundSize: '100% 100%', height:'40rem', width:'100%', backgroundPosition:'center', objectFit:'contain'}} className="top-0 absolute z-0 opacity-80"></div>
      <div className=" h-[35rem] w-full absolute flex justify-center items-center ">
        <div className=" h-[90%] w-1/2 space-y-[120px]">
          <div><h3 className="font-sans text-6xl text-center  font-extrabold px-12 ">Easiest place to find your home</h3></div>
          <div><h3 className="px-20 font-serif text-lg font-semibold text-white">your home is where you go to when you leave work, and you go there to 
          sleep and eat at ailmond homes,  we priorities our customers and give them the best, and we implore you to come and have a shot.</h3></div>
          <div className=" h-[4rem] w-full flex justify-evenly items-center "> 
            <h3 className="h-[3rem] w-[6rem] rounded-xl flex justify-center items-center text-3xl uppercase font-sans font-extrabold hover:bg-green-600 hover:text-white cursor-pointer bg-white text-black ">buy</h3>
            <h3 className="h-[3rem] w-[6rem] rounded-xl flex justify-center items-center text-3xl uppercase hover:bg-black cursor-pointer font-sans font-extrabold hover:text-white bg-white text-black ">rent</h3>
          </div>
        </div>
        <div className="w-1/2 h-[90%]">
          <img src={`${backG2}`} alt="img" className="object-cover rounded-es-[200px] w-full h-full"></img>
        </div>
      </div>
      <div className=" h-[10rem] absolute bottom-0 w-full flex items-center justify-center">
        <div className=" h-8rem w-[30rem] bg-green-600 rounded-xl text-center ">
          <h3 className="text-3xl font-sans font-extrabold capitalize">villamond investment ltd</h3>
          <h3 className="font-semibold text-lg italic text-white">"land in its rough state, is far more valuable than car in it's best state"</h3>
          <h3 className="text-bold font-semibold text-lg capitalize text-black">victor oyefeso <span className="italic extralight text-xs">CEO</span></h3>
        </div>
      </div>

    </div>
    </>
  )
}

export default Layer1