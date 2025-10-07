import React from 'react'
import '../styles/Register.css'
import logo from '../assets/cat.png'

const Register = () => {
  return (
    <div className='register'>
      <div className='FormWrapper'>
        <div className="header">
          <div className='Logowrap'>
            <img src={logo} alt={logo.name} />
            <div className="logos">
              <h1>HexLogs.com</h1>
            </div>
          </div>
          <p className='minp'>Welcome Back!</p>
          <p className='maxp'>Create an  account to continue</p>
        </div>
        <div className="formBody">
          <form action="">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email' required/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password"  placeholder='Enter your password' required/>
            <div className='rememberCon'>
              <input type="checkbox" name="remember" id="remember" checked/>
              <p className='rememberp'>I agree to the <a href="/">Terms and Conditions</a></p>
            </div>
            <button type="submit">Register</button>
          </form>
          <p className='or'>or</p>
          <p className='create'>No account yet? <a href="/">Log In</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register
