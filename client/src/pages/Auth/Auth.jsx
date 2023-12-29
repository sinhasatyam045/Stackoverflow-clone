import React,{useState} from 'react'
import './Auth.css' 
import AboutAuth from './AboutAuth'
import  icon from "../../assets/icon.jpg";
const Auth = () => {
  const[isSignup, setIsSignup] = useState(false)

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }
  return (
    <section class='auth-sec'>
      {isSignup && <AboutAuth/>}
      <div class='container'>
        {!isSignup &&<img width={"10%"} src={icon} alt='stack overflow' className='login-logo'/>}
        <form>
          {
            isSignup &&(
              <label htmlFor="name">
                <h4>Display Name</h4>
                <input type="text" id='name' name='name' />
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email'/>
          </label>
          <label htmlFor="password">
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4>password</h4>
              {!isSignup && <p style={{color:"#007ac6",fontSize:"13px"}}>forgot password?</p>}
            </div>
            <input type="password" name='password' id='password' />
            {isSignup&& <p style={{color:'#666767',fontSize:"13px"}}>Passwords must contain at least eight characters,<br/>
             including at least 1 letter and 1 number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type=" checkbox" id='check' />
                <p style={{fontSize:'13',color:'#666767'}}>Opt-in to receive occasional<br/>
                 product updates, user research invitations,<br/>
                 company announcements, and digests.</p>
              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Signup': 'Login'}</button>
        </form>
        <div style={{display:"flex",justifyContent:"space-evenly"}}className="abc">
          {isSignup ? 'Already have an account?': "Dont have an account?"}
          <button type='button ' className='auth-btn1' onClick={handleSwitch}>{ isSignup ? "Log in":"Signup"}</button>
          </div>
        
          {
            isSignup && (
              <p style={{color:"#666767",fontSize:"13px"}}>
                By clicking “Sign up”, you agree to our<br/>
                 <span style={{color:"#007ac6"}}>terms of service</span>,
                  <span style={{color:"#007ac6"}}>privacy policy</span> and 
                  <span style={{color:"#007ac6"}}>cookie policy</span>
              </p>
            )
          }
        

      </div>
    </section>
    
  )
}

export default Auth