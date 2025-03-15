import React , {useState} from 'react';
import './LoginSignup.css'
import user_icon from  '../assets/user.png'
import mail_icon from  '../assets/mail.png'
import password_icon from  '../assets/padlock.png'
const LoginSignup = () => {
  const [action , _ ] = useState  ("Login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
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
      <div className="submit-container">
        <div className={action==="Sign up"?"submit gray":"submit"}> Login</div>
        <div className={action==="Login"?"submit gray":"submit"}> Sign up</div>
      </div>
      <div className="forgot-password">Forgot your password? <span>Click Here !</span>
      </div>
    </div>
  )
}

export default LoginSignup
