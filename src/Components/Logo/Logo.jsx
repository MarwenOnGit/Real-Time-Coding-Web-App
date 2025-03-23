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
          words={['Let the coding begin...']} // Words to type
          loop={1} // Set to 1 for one-time typing
          cursor
          cursorStyle="|" // Cursor style
          typeSpeed={100} // Typing speed
          deleteSpeed={50} // Deleting speed (if looping)
        /></div>
    </div>
  )
}

export default Logo
