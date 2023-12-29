import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'
const DisplayQuestion = () => {
  return (
    <div className='home-cont-1'>
      <LeftSidebar />
      <div className="home-cont-2">
        <QuestionsDetails />
       <RightSidebar />
       </div>

    </div>
  )
}

export default DisplayQuestion