import React , {useState}from 'react'

const Layer7= () => {
  const [value, setValue]= useState()
  const[value1, setValue1]= useState()
  const[value2, setValue2]= useState()
  const[value3, setValue3]= useState()

  let click = () => {
    setValue(!value)
  }
  let click1 = () => {
    setValue1(!value1)
  }
  let click2 = () => {
    setValue2(!value2)
  }
  let click3 = () => {
    setValue3(!value3)
  }

  return(
    <>
    <div className='grid grid-rows-2 items-center justify-center font-sans text-slate-400 h-[20rem] py-12'>
        <div>
            <h3 className='text-black text-xl py-4 font-extrabold '>Frequently asked questions</h3>
        </div>
        <div className='text-md font-semibold py-8 block'>
          <div className='flex gap-5'>
              <div>
                <h4>can I use flowbite in open-source projects?</h4>
                  {value?<h5>Generally, it is accepted to use Flowbite in open-source projects, as long
                    as it is not a UI library, a theme, a template, a page-builder that could be consided as an 
                    alternative to Flowbite itself.</h5>:<h5> </h5>}
              </div>
              
              <div>
              <button onClick={click} className='w-[1rem] h-[1rem] text-xl font-extrabold'>+</button>
              </div>
          </div>
          <div className='flex gap-5'>
              <div>
                  <h4>what about browser supports?</h4>
                  {value1?<h5>i will try to adapt to it
                  </h5>:<h5> </h5>}
              </div>
              
              <div>
              <button onClick={click1} className='w-[1rem] h-[1rem] text-xl font-extrabold'>+</button>
              </div>
          </div>
          <div className='flex gap-5'>
              <div>
                <h4>can i use flowbite for commercial purpose?</h4>
                  {value2?<h5>i will try to adapt to it</h5>:<h5> </h5>}
              </div>
              
              <div>
              <button onClick={click2} className='w-[1rem] h-[1rem] text-xl font-extrabold'>+</button>
              </div>
          </div>
          <div className='flex gap-5'>
              <div>
                <h4>where can i access my download files?</h4>
                  {value3?<h5>i will try to adapt to it</h5>:<h5> </h5>}
              </div>
              
              <div>
              <button onClick={click3} className='w-[1rem] h-[1rem] text-xl font-extrabold'>+</button>
              </div>
          </div>
        </div>
    </div>
    </>
  )
}
export default Layer7


// const Layer7= () => {

//   const [value, setValue]= useState()

//   let press=() => {
//     setValue(!value)
//   }
//   return(
//     <>
//     <h3>hello my ppl i wiil  like to see you gues later</h3>
//     <button onClick={press}> click here
//     {value? <h1>hello this is our work, we will be fine</h1>:<h1>click me to show our work</h1>}
//     </button>
//     </>
//   )
// }

// export default Layer7


// import React, { useState } from 'react';

// function Layer7() {
//   const [isVisible, setIsVisible] = useState();

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (

//     <>

//     {/* <div>{isVisible && <div>This is the element you want to show/hide.</div>}</div> */}
//     <button onClick={toggleVisibility}>
//     {isVisible ? 'Hide Element' : 'Show Element'}
//     </button>
//     </>
//   );
// }

// export default Layer7
