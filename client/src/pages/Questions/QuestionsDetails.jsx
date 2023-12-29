import React from 'react';
import { useParams,Link } from 'react-router-dom'
import up from "../../assets/up.svg"
import down from "../../assets/down.svg"
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswer from './DisplayAnswer'
import './Questions.css'



function QuestionsDetails() {

    const { id } = useParams();

    var questionsList = [{
        _id: '1',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it meant to be",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "mono",
        userId: 1,
        askedOn: "Jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: '2',
        }]
    }, {
        _id: '2',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 1,
        questionTitle: "What is a function?",
        questionBody: "it meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mono",
        askedOn: "Jan 1",
        userId: '1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: '2',
        }]
    }, {
        _id: '3',
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "it meant to be",
        questionTags: ["java", "node js", "react js", "mongodb"],
        userPosted: "mono",
        askedOn: "Jan 1",
        userId: '1',
        answer: [{
            answerBody: "Answer",
            userAnswered: "kumar",
            answeredOn: "jan 2",
            userId: 2,
        }]
    }];
    return (
        <div className="question-details-page">
            {questionsList === null ?
                <h1>Loading...</h1> :
                <>
                    {questionsList.filter(question => question._id === id).map(question => (
                        <div key={question._id}>
                            <section className="question-details-cont">
                                <h1>{question.questionTitle}</h1>
                                <div className="question-details-cont2">
                                    <div className="question-votes">
                                        <img src= {up} alt="" width={18} /> 
                                        <p>{question.upVotes - question.downVotes}</p>
                                        <img src={down} alt="" width={18}/>
                                    </div>
                                    <div style={{width:"100%"}}>
                                        <p className="question-body">{question.questionBody}</p>
                                        <div className="question-details-tags">
                                            {
                                                question.questionTags.map((tag) =>(
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button'>Share</button>
                                                <button type='button'>Delete</button>

                                            </div>
                                            <div>
                                                <p>asked {question.askedOn}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                <Avatar backgrounColor="orange "px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                                </Link>
                                            </div>

                                        </div>

                                    </div> 
                                </div>
                            </section>
                            {
                                question.noOfAnswers !==0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} answers</h3>
                                        {console.log(question._id)}
                                        <DisplayAnswer key={question._id} question={question}/>
                                    </section>
                                )
                            }
                            <section className="post-ans-cont">
                                <h3>Your Answer</h3>
                                <form >
                                    <textarea name="" id="" cols="30" rows="10"></textarea>
                                    <input type="Submit" className='post-ans-btn' value='Post Your Answer' /> <br/>
                                </form>
                                <p>
                                    Browse other Question tagged
                                    {
                                        question.questionTags.map((tag) =>(
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}> ask your own question.</Link>
                                </p>
                            </section>

                        </div>

                    ))}





                </>}
        </div>
    );
}

export default QuestionsDetails