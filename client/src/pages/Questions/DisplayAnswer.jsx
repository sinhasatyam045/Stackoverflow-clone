import React from 'react'
import { Link } from 'react-router-dom'
import QuestionsDetails from './QuestionsDetails'
import Avatar from '../../components/Avatar/Avatar'
const DisplayAnswer = (question) => {
    console.log(question,'questionss')
    console.log(question.question,'questionss')
     
  return (
    <div>
        {
            question.question.answer.map((ans) =>(
                <div className="display-ans" key={ans._id}>
                    {
                        console.log(ans._id,'questionss')}
                        {console.log(ans.answerBody,'questionss')}
                       {console.log(ans.answeredOn,'questionss')}
                        {console.log(ans.userAnswered.charAt(0).toUpperCase())}
                    
                    <p>{ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button'>Share</button>
                            <button type='button'>Delete</button>
                        </div>
                        <div>
                            <p>answered {ans.answeredOn}</p>
                            <Link to={`/User/${question._userId}`} className='user-link' style={{color:'#0086d8'}}>
                                 <Avatar backgrounColor="green" px='8px' py='5px'>{ans?.userAnswered?.charAt(0)?.toUpperCase()}</Avatar>
                                 <div>
                                     {ans.userAnswered}
                                 </div>
                             </Link>
                            
                        </div>
                    </div>
                </div>
            ))
        }

    </div>
  )
}

export default DisplayAnswer