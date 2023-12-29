import React from 'react'
import'./LeftSidebar.css'
import { NavLink} from "react-router-dom";
import  Globe  from "../../assets/Globe.png";


const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <nav className='side-nav'>
            <NavLink to='/' className='side-nav-links' activeClassName='active'>Home</NavLink>
            <div className="side-nav-div">
                <div><p>PUBLIC</p></div>
                <NavLink to='/Questions'className='side-nav-links' activeClassName='active'>
                    <img  src={Globe} alt="" width={18} />
                    <p style={{paddingLeft:'10px'}}>Question</p>

                </NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active'><p>Tags</p></NavLink>
                <NavLink to='/Tags' className='side-nav-links' activeClassName='active'><p>Users</p></NavLink>

            </div>
        </nav>

    </div>
  )
}

export default LeftSidebar