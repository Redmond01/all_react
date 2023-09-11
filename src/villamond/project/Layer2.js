import React from "react";
import pics from '../pics/landscape.png'
import style from '../style/style.module.css'

const Layers=(props) => {
  return(
    <>
    <div className="bg-white h-[20rem] w-[25rem] rounded-t-[30px] shadow-xl cursor-pointer ">
        <div style={{backgroundImage: `url(${pics})`, backgroundPosition:'center', objectFit:'cover',width:'25rem', height:'12rem', backgroundSize:'100% 100%'}} className="w-full h-[80%] cursor-pointer rounded-t-[30px] "></div>
        <div className="py-4 px-2 capitalize font-serif font-semibold space-y-2">
        <div  className="flex justify-between items-center ">
        <h3>property location: </h3>
        <h3 className="text-green-600">{props.location}</h3>
        </div>
        <div  className="flex justify-between items-center ">
        <h3>price:(N) </h3>
        <h3 className="text-green-600">{props.price}</h3>
        </div>
        <div  className="flex justify-between items-center ">
        <h3>squaremeter(sqm) </h3>
        <h3 className="text-black italic">{props.lenght}</h3>
        </div>
        </div>
    </div>
    </>
  )
}



const Layer2= () => {

  return(
    <>
    <div className="bg-slate-200 h-[70rem] px-12 py-8 relative">
        <div  className=" flex items-center justify-center capitalize font-extrabold text-2xl tex-green-700 ">
            <h3>villamond properties</h3>
        </div>
        <div className=" grid grid-cols-3 py-8 gap-8 absolute" class={style.body}>
        <Layers name='land' location='ode remo' price='630,000' lenght='150'/>
        <Layers name='land' location='ishara' price='1,260,000' lenght='300'/>
        <Layers name='land' location='ibadan' price='2,100,000' lenght='500'/>
        <Layers name='land' location='lagos' price='1,200,000' lenght='300'/>
        <Layers name='land' location='ode remo' price='630,000' lenght='150'/>
        <Layers name='land' location='abeokuta' price='4,100,000' lenght='1000'/>
        <Layers name='land' location='abeokuta' price='4,100,000' lenght='1000'/>
        <Layers name='land' location='lagos' price='1,200,000' lenght='300'/>
        <Layers name='land' location='ibadan' price='2,100,000' lenght='500'/>
        </div>
    </div>
    </>
  )
}

export default Layer2

