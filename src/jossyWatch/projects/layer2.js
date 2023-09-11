import React from "react";
import item1 from '../jossy_watch_asset/item1.png'
import item2 from '../jossy_watch_asset/item2.png'
import item3 from '../jossy_watch_asset/item3.png'
import item4 from '../jossy_watch_asset/item4.png'
import arrow from '../jossy_watch_asset/Arrow.png'


const Layer2=()=>{
    return(
        <>
        <div className="h-[40rem] w-full flex justify-center p-4 items-center  ">
            <div className="bg-white h-[90%] w-[90%]">
                <div className="flex justify-center items-center h-[10%] w-full"><h3 className="font-bold text-xl uppercase">products</h3></div>
                <div className="h-[90%] w-full grid grid-cols-3 justify-center gap-4 items-center gap-y-8">
                    <div className="h-[100%] w-[100%] rounded-xl flex justify-center items-center">
                        <div className="w-[80%] h-full">
                            <img src={item1} alt="images" className="w-full h-full"/>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%] rounded-xl flex justify-center items-center">
                        <div className="w-[80%] h-full">
                            <img src={item2} alt="images" className="w-full h-full"/>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%]  rounded-xl flex justify-center items-center">
                        <div className="w-[80%] h-full flex items-center justify-center bg-[#d3d3d3] rounded-[20px]">
                            <img src={item3} alt="images" className="w-[50%] h-[100%] "/>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%] rounded-xl flex justify-center items-center">
                        <div className="w-[80%] h-full justify-center items-center flex bg-[#d3d3d3] rounded-[20px] ">
                            <img src={item4} alt="images" className="w-[50%] h-[90%]"/>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%] rounded-xl flex justify-center items-center">
                        <div className="w-[80%] h-full">
                            <h3 className="text-center font-sans font-semibold w-full h-[80%] ">nobis tenetur? Non quo eaque amet cupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerumcupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerum cupiditate error quibusdam 
                                    vel accusantium dolor, consectetur rerum  </h3>
                            <div className="bg-blue-600 h-[20%] w-full rounded-lg flex justify-center items-center">
                                <div className=" flex items-center justify-around h-full w-[45%]">
                                <h3 className="h-fulll w-full text-white font-sans font-bold ">Go to shop </h3>
                                <div className="h-[50%] w-[50%]">
                                <img src={arrow} alt="images"/>
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    <div className="h-[100%] w-[100%] rounded-xl flex justify-center items-center">
                        <div className="w-[80%] h-full">
                            <img src={item1} alt="images" className="w-full h-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Layer2