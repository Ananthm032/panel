import React from 'react'
import "./sidebar.css"
import Img3 from "../Images/Note2.png"
function Sidebar() {
  return (
    <div className='sidebar'>
  
      <div className="sidebar-img">
         <img className='img' src={Img3} alt='' width='100%' height='100%' />
         Creater'sApplication
      </div>
      
      </div>
  )
}

export default Sidebar