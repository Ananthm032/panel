import React from 'react'
import "./minitopbar.css"
import Topbar from '../Topbar/Topbar'
import Sidebar from '../Sidebar/Sidebar'
import {Link} from "react-router-dom"
function Minitopbar() {
  return (
    <div className='mini'>
        <Topbar/>
     <div className='mini-container'>
         <Sidebar/>
         <div className="container">
     <ul>
       <Link to="/review" style={{textDecoration:'none'}} ><li>For Review</li></Link>
        
     </ul>
     <ul>
     <Link to="/verified"  style={{textDecoration:'none'}}><li>Verified</li></Link>
        
        
     </ul>
     <ul>
     <Link to="/reject"  style={{textDecoration:'none'}}><li>Reject</li></Link>
        
        
     </ul>

       </div>
     </div>
    </div>
  )
}

export default Minitopbar