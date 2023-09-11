import React from "react";
import link from '../project_files/Vector_4.png'
import link1 from '../project_files/Vector_1.png'
import link2 from '../project_files/Vector_2.png'
import link3 from '../project_files/Vector_3.png'
import link4 from '../project_files/users.png'


const Layer4 = () => {
  return(
    <>
    <div className="flex px-12 h-[27rem]">
        <div className="w-2/4 py-12 ">
          <h4 className=" font-semibold font-sans text-purple-700 capitalize py-4">trusted worldwide</h4>
          <h1 className=" font-extrabold text-4xl py-4">Trusted by over 600 million users and 10, 000 teams</h1>
          <h5 className="text-slate-400 font-semibold ">our rigorous and compliance standard are at the heart of all we do. We work tirelessly to
            to protect you and your customers.
          </h5>
            <div className="h-[5rem] flex items-center " >
              <div className=" font-semibold text-purple-900 font-sans space-y-3">
                    <h4 className="cursor-pointer">explore legally guide</h4>
                    <h4 className="cursor-pointer">visit the trust center</h4>
              </div>
              <div className="space-y-6 px-2">
                <div style={{backgroundImage: `url(${link})`}} className="w-[1rem] h-[0.8rem] cursor-pointer" ></div>
                <div style={{backgroundImage: `url(${link})`}} className="w-[1rem] h-[0.8rem] cursor-pointer"></div>
              </div>
            </div>

        </div>

        <div className="w-2/4 py-12">
          <div className="flex justify-around">
          <div className="py-4">
            <div style={{backgroundImage: `url(${ link1})`}} className="w-[3rem] h-[3rem] object-contain bg-no-repeat"></div>
            <div className="py-5">
              <h3 className="text-xl font-extrabold font-sans">99.99% uptime</h3>
              <h4 className="text-slate-400 py-1">for Flowbite, with zero <br></br>maintenance downtime</h4>
            </div>
          </div>
          <div className="py-4">
            <div style={{backgroundImage: `url(${link4})`}} className="w-[3rem] h-[3rem] object-contain bg-no-repeat"></div>
            <div className="py-5">
              <h3 className="text-xl font-extrabold font-sans">600M+ Users</h3>
              <h4 className="text-slate-400 py-1">trusted by over 600 millon users <br></br> around the world</h4>
            </div>
          </div>
          </div>
          <div className="flex justify-around">
          <div className="py-4">
            <div style={{backgroundImage: `url(${ link2})`}} className="w-[3rem] h-[3rem] object-contain bg-no-repeat"></div>
            <div className="py-5">
              <h3 className="text-xl font-extrabold font-sans">99.99% uptime</h3>
              <h4 className="text-slate-400 py-1">for Flowbite, with zero <br></br>maintenance downtime</h4>
            </div>
          </div>
          <div className="py-4">
            <div style={{backgroundImage: `url(${ link3})`}} className="w-[3rem] h-[3rem] object-contain bg-no-repeat"></div>
            <div className="py-5">
              <h3 className="text-xl font-extrabold font-sans">600M+ Users</h3>
              <h4 className="text-slate-400 py-1">trusted by over 600 millon users <br></br> around the world</h4>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}
export default Layer4