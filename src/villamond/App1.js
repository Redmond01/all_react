import React, {useState, useEffect} from "react";
import Topnav from "./project/topnav";
import Layer1 from "./project/Layer1";
import Layer2 from "./project/Layer2";
import Layer3 from "./project/Layer3";
import Footer from "./project/Footer";


const App1= () => {
  const[ slide1, setSlide1]= useState(false)
  const [slide2, setSlide2]= useState(false)
  const [slide3, setSlide3]= useState(false)
  const handlescroll= () => {
    const showslide1= window.scrollY >110
    const showslide2 = window.scrollY>1200
    const showslide3 = window.scrollY>300

    setSlide1(showslide1)
    setSlide2(showslide2)
    setSlide3(showslide3)
  }

useEffect(() => {
  return () => {
    window.onscroll=null
  }
},[])

  window.onscroll= handlescroll
  return(
    <>
    <Topnav/>
    <Layer1/>
    {slide1&&<Layer2/>}
    {slide2&&<Layer3/>}
    {slide3&&<Footer/>}
    </>
  )
}

export default App1