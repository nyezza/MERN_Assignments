import React, { useState } from 'react'
import './LoginRegistration.css'
import user_icon from '../Assets/personjpg.jpg'
import email_icon from '../Assets/email.jpg'
import password_icon from '../Assets/password.jpg'
const LoginRegistration = () => {

    const[action , setAction]=useState('Sign Up')


  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action} </div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "login"?<></>:
            <div className="input">
                <img src={user_icon} alt="" />
                <input type='text' placeholder='name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type='email' placeholder='email'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type='password'placeholder='password' />
            </div>
        </div>
        {action === "login"?
        <div className="forgot-password">Lost Password ? <span>Click here</span></div>:<></>}
        <div className="submit-container">
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>login</div>
        </div>
    </div>
  )
}

export default LoginRegistration