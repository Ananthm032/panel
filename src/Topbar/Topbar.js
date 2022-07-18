import React from 'react'
import "./topbar.css"
import Img from "../Images/logo.png"
import Img1 from "../Images/logout.png"
import {Link} from "react-router-dom"
function Topbar() {
  return (
        <div className="topbar">
        <div className="topbar-list">
       <img src={Img} alt='' width='100%' height="100%" /> 
      </div>
       <p>Admin</p>
       <div className='img'>  <Link to="/"><img src={Img1} alt='' width='100%' height="100%" /></Link></div>
      
       </div>
  )  
}

export default Topbar