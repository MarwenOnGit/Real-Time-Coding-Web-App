import React , {useState} from 'react';
import './LoginSignup.css'
import user_icon from  '../assets/user.png'
import mail_icon from  '../assets/mail.png'
import password_icon from  '../assets/padlock.png'



 
const LoginSignup = () => {
  const [action , setAction  ] = useState("Sign up");
 
  const handleChangeLogin=()=>{
    const  button = document.getElementById("submit");
    if (button==="Login"){
      return; 
    }else {
      setAction("Login");

    }
    
  }
  const handleLogin=()=>{
    if (action==="Sign up"){
      
      return ; 
    }else {
     // navigate('/dashboard');
     
    }}
  const handleChangeSignUp=()=>{
    const  button = document.getElementById("submit");
    if (button==="Sign up"){
      return; 
    }else {
      setAction("Sign up");

    }
    
  }
  const handleSignUp=()=>{
    if (action==="Login"){
      return ; 
    }else {
     // navigate('/dashboard');
    
    }}
  return (
 
  
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
      
        {action ==="Sign up"?
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Your Username...'/>
        </div>
        <div className="input">
            <img src={mail_icon} alt="" />
            <input type="email" placeholder='Your Email...' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Your Password...' />
        </div>
      </div>
      :
      <div className="inputs">
          
        <div className="input">
            <img src={mail_icon} alt="" />
            <input type="email" placeholder='Your Email...' />
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Your Password...' />
        </div>
      </div>
      }
      <div className="submit-container">
        <div className={action==="Sign up"?"submit ":"submit gray "} onClick={handleChangeSignUp }> Sign up
          {/* <button id='submit' onClick = {</div>handleChangeSignUp}></button> */}
        </div>
      
        <div className={action==="Login"?"submit ":"submit gray"} onClick={handleChangeLogin }> Login
          {/* <button id='submit' onClick = {handleLogin}></button> */}
        </div>
      </div>
      <div className="forgot-password">Forgot your password? <span>Click Here !</span>
      </div>
    </div>
    
  )
}
export default LoginSignup;
