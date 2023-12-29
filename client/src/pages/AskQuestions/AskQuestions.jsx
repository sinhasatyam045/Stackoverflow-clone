import React from 'react'
import './AskQuestions.css'

const AskQuestions = () => {
  return (
    <div className='ask-question'>
      <div className="ask-ques-cont">
        <h1>Ask a public question</h1>
        <form >
          <div className="ask-form-cont">
            <label htmlFor="ask-ques-title">
              <h1>Title</h1>
              <p>Be specific and imagine you are asking a question to a real person.</p>
              <input type="text" id='ask-ques-title'placeholder='e.g. Is there an R function for finding the index in a vector?' />
            </label>
            <label htmlFor="ask-ques-body">
              <h1>Body</h1>
              <p>include all the information someone would need to answer your question</p>
              <input type="text" id='ask-ques-title' />
            </label>
            <label htmlFor="ask-ques-tags">
              <h1>Tags</h1>
              <p>Add upto 5 tags to describe what your question is about</p>
              <input type="text" id='ask-ques-title'placeholder='e.g. (xml typescript wordpress)' />
            </label>
          </div>
          <input type=" submit" className='review-btn'value='Review your question' />
        </form>
        
      </div>

    </div>
  )
}

export default AskQuestions