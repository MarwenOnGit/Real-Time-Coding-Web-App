import React from 'react'
import logo from '../assets/logo.png'
import { Typewriter } from 'react-simple-typewriter';
import "./Logo.css"
const Logo = () => {
  return (
    <div className='logo-container'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      
      <div className="type-writer"> <Typewriter
          words={['Let the coding begin...']} 
          loop={1} 
          cursor
          cursorStyle="|"
          typeSpeed={100} 
          deleteSpeed={50}
        /></div>
        </div>
    
  )
}

export default Logo
