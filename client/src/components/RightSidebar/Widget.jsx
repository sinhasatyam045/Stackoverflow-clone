import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.svg'
import icon from '../../assets/icon.jpg'
const Widget = () => {
  return (
    <div className='widget'> 
       <h4>The Overflow Blog</h4> 
       <div className="right-sidebar-div1">
        <div className="right-sidebar-div1">
            <img src="pen" alt="" width='18' />
            <p>Our favorite apps, books, and games of 2023 (Ep. 524)</p>
        </div>
        <div className="right-sidebar-div2">
            <img src="pen" alt="" width='18' />
            <p>The Winter/Summer Bash 2022 Hat Cafe is now closed!</p>
        </div>
       </div>
       <h4>Featured on Meta</h4> 
       <div className="right-sidebar-div1">
        <div className="right-sidebar-div1">
            <img src="icon" alt="" width='18' />
            <p>Temporary policy: ChatGPT is banned</p>
        </div>
        <div className="right-sidebar-div2">
            <img src="icon" alt="" width='18' />
            <p>Should we burninate the [shipping] tag?</p>
        </div>
       </div>
       <h4>Hot Meta Posts</h4> 
       
        <div className="right-sidebar-div1">
            <p>20</p>
            <p>Our favorite apps, books, and games of 2023 (Ep. 524)</p>
        </div>
        
       </div>


    
  )
}

export default Widget