import React from "react";
import microsoft from '../project_files/Microsoft.png'
import google from '../project_files/Google.png'
import airbnb from '../project_files/Airbnb.png'
import spotify from '../project_files/Spotify.png'
import malichmip from '../project_files/Mailchimp.png'
import uber from '../project_files/uber.png'

const Layer2 = () => {
  return(
    <>
    <div className=" flex items-center justify-between py-12 px-12"> 
    <div className="hover:cursor-pointer ">
      <img src={microsoft} alt="img"></img>
    </div>
    <div className="hover:cursor-pointer ">
      <img src={google} alt="img"></img>
    </div>
    <div className="hover:cursor-pointer ">
      <img src={airbnb} alt="img"></img>
    </div>
    <div className="hover:cursor-pointer ">
      <img src={uber} alt="img"></img>
    </div>
    <div className="hover:cursor-pointer ">
      <img src={malichmip} alt="img"></img>
    </div>
    <div className="hover:cursor-pointer ">
      <img src={spotify} alt="img"></img>
    </div>
    
    </div>

    </>
  )
}
export default Layer2