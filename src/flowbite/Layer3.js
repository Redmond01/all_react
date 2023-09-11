import React from "react";
import tick from '../flowbite/project_files/Vector.png'
import page from '../flowbite/project_files/features-11.png'



const Layer3= () => {
  return(
    <>
    <div className="bg-slate-200 h-[32rem] flex py-16 px-12">
        <div className="w-2/4 py-8">
            <h3 className="text-3xl font-bold">work with tools you already use</h3>
            <h4 className="font-semibold text-slate-400 py-3">Deliver great service experince fast - without the complexity 
                of traditional ITSM solutions. Accelerate critical development work, eliminate toll
                , and deploy changes with ease
            </h4>

            <div className="py-8 space-y-4">
                <div className="flex items-center space-x-3 font-bold">
                <div style={{backgroundImage: `url(${tick})`}} className="h-[1.05rem] w-[1rem]"></div>
                 <h3>Contribute interagtion and deployment</h3>
                </div>
                <div className="flex items-center space-x-3 font-bold">
                <div style={{backgroundImage: `url(${tick})`}} className="h-[1.05rem] w-[1rem]"></div> 
                 <h3>Knowledge management</h3>
                </div>
                <div className="flex items-center space-x-3 font-bold">
                <div style={{backgroundImage: `url(${tick})`}} className="h-[1.05rem] w-[1rem]"></div>
                 <h3>Deployment workflow</h3>
                </div>          
                <div>
                <h3 className="font-semibold text-slate-400 py-3">Deliver great sevice experince fast - without the complexity of traditional ITSM solution</h3>
                </div>      
            </div>
            </div>
        <div className="w-2/4">
            <img src={page} alt="img"></img>
        </div>

    </div>
    </>
  )
}

export default Layer3