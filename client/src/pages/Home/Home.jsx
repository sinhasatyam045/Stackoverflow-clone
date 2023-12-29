import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar.jsx'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'


const Home = () => {
  return (
    <div className='home-cont-1'>
      <LeftSidebar />
      <div className="home-cont-2">
       <HomeMainbar />
       <RightSidebar />

      </div>

    </div>
  )
}

export default Home