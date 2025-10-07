import React from 'react'
import '../styles/Login.css'
import logo from '../assets/cat.png'


const Login = () => {
  return (
    <div className='login'>
      <div className='FormWrapper'>
        <div className="header">
          <div className='Logowrap'>
            <img src={logo} alt={logo.name} />
            <div className="logos">
              <h1>HexLogs.com</h1>
            </div>
          </div>
          <p className='minp'>Welcome Back!</p>
          <p className='maxp'>Sign in to your account to continue</p>
        </div>
        <div className="formBody">
          <form action="">
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" placeholder='Enter your email' required/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password"  placeholder='Enter your password' required/>
            <a href="/">forget password?</a>
            <button type="submit">Login</button>
          </form>
          <p className='or'>or</p>
          <p className='create'>No account yet? <a href="/">Register</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
