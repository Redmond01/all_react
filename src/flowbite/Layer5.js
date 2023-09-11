import React from "react";
import link from '../flowbite/project_files/Vector_5.png'

const Layer5 = () => {
  return(
    <>
    <div className="h-[20rem] bg-slate-100 py-12">
      <div style={{backgroundImage: `url(${link})`}} className="w-[4rem] h-[4rem] object-contain bg-no-repeat top[40%] left-[47%] absolute"></div>
      <div>
        <h3 className="text-center font-bold py-12">
          "Flowbite is just awesome. it contains tons of predesigned <br></br> components and pages starting 
          from login screen to complex <br></br> dashboard. Perfect choice for your next SaaS application"
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <h4 className="font-extrabold">Micheal Gough</h4> <span> / </span><h4 className="font-semibold">CEO at Google</h4>
      </div>
    </div>
    </>
  )
}
export default Layer5