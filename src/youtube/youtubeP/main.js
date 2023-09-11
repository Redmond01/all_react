import React from "react";

const Search= () => {
  return(
    <>
          <div className="w-full h-[5rem] flex justify-center items-center bg-black">
        <div className="w-1/6  h-[4rem]"></div>


        <div className="w-3/6 rounded-3xl h-[3rem] flex justify-center items-center gap-4 ">
          <div className="w-[90%] h-full flex border border-slate-300 rounded-s-3xl rounded-e-3xl ">
            <input type="search" placeholder="search" className="h-full rounded-s-3xl w-[90%] bg-black text-slate-300 p-4"></input>
          <div className="bg-slate-700 h-full rounded-e-3xl w-[10%] flex justify-center items-center">
            <button className="text-slate-400">search</button>
          </div>
          </div>
          <div className=" bg-slate-700 rounded-full w-[10%] h-full"></div>
        </div>
        <div className="w-2/6  h-[4rem] flex justify-end items-center gap-8 p-3">
          <div className="bg-white h-[1.5rem] w-[1.5rem]"></div>
          <div className="bg-white h-[1.5rem] w-[1.5rem]"></div>
          <div className="bg-white h-[1.5rem] w-[1.5rem]"></div>

        </div>
      </div>
    </>
  )
}
const Categories=() => {
  return(
    <>
    <div>
      <div className="flex h-[4rem] justify-center items-center gap-3 bg-black">
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">all</h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">gaming</h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">live</h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">premier league</h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">news </h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">lords mobile </h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">web development </h3>
        <h3 className="font-semibold p-1 px-3 capitalize bg-slate-600 text-white hover:text-black cursor-pointer hover:bg-slate-300 rounded-lg  ">computer programming </h3>
        </div>
    </div>
    </>
  )
}

const Templates =(props) => {
  return(
    <>
    <div className="px-16  py-12">
      <div className="h-[16rem] w-[17rem] space-y-2">
        <div className=" bg-white h-[65%] rounded-xl hover:cursor-pointer"></div>
        <div className="h-[33%] hover:cursor-pointer flex">

          <div className="bg-slate-600 rounded-full h-[50%] w-[15%]">{props.image}</div>

          <div className="w-[85%]">
            <div className=" h-[60%] w-[80%]"> <h3 className="w-full h-full  text-slate-300 capitalize font-semibold font-sans text-ellipsis overflow-hidden whitespace-nowrap ">{props.tilte}</h3></div>
            <div className=" h-[50%] w-[50%] py-1 space-y-2">
              <div className="  w-[70%] h-[50%] capitalize font-sans font-semibold text-slate-400 "><h3 className=" text-md text-ellipsis whitespace-nowrap overflow-hidden">{props.publisher}</h3></div>
              <div className="w-full">
                <div className=" w-full h-[80%] flex justify-start items-start gap-2 font-sans text-xs py-2 font-semibold text-slate-400">
                <div><h3>{props.views} views </h3></div>
                <div><h3>{props.date}ago</h3></div>
                </div>
              </div>
            </div>


          </div>
          







          </div>
        </div>
      </div>
    </>
  )
}



const Main=() => {
    return(
      <>
      <div className="h-[580vh] w-4/5 bg-black">
        <div className="top-0 sticky">
        <Search/>
        <Categories/>
        </div>
        <div className="grid grid-cols-3 py-8"> 
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        <Templates
         tilte='5 things you should alway do to become a good programmer'
         publisher='raymond codes'
         views='15k'
         date='20 hours'
        />
        </div>
      </div>
      </>
    )
  }
  export default Main