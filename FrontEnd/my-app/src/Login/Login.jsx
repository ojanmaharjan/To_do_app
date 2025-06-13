import React from 'react'
import './logIn.css'

const Login = () => {
  return (
    <div className='logIn'>
        <input type='name' placeholder='name' required/> <br></br>
        <input type='password' placeholder='password' required/><br></br>
        <input type='email' placeholder='email' required/><br></br>
        <button type='submit'>Submit</button>
        <p>Home</p>
    </div>
  )
}

export default Login
