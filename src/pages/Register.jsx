import React, { useState } from 'react'
import '../styles/Register.css'
import logo from '../assets/cat.png'
import { supabase } from './Client'
import { ToastContainer, toast } from 'react-toastify';




const Register = () => {
  const [formData, setFormData] = useState({
    email: "", 
    password: "",
    remember: true
  });

  console.log(formData)
  const handleChange = (e) =>{
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      let { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password
      })
      if(error){
         toast.error(`Registration failed: ${error.message}`);
      }else{
        toast.success("Registration successful! Check your email to verify.");
        setFormData({email: "", password: "", remember: true})
      }
    } catch (error) {
       toast.error(`Error: ${error.message}`);
    }
  }

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
          <form action="" onSubmit={handleRegister}>
            <label htmlFor="email">email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Enter your email' 
              required
              onChange={handleChange}
            />
            <label htmlFor="password">password</label>
            <input 
              type="password" 
              name="password" 
              id="password"  
              placeholder='Enter your password' 
              required
              onChange={handleChange}
            />
            <div className='rememberCon'>
              <input  
                type="checkbox" 
                name="remember" 
                checked={formData.remember}
                onChange={handleChange}
              />
              <p className='rememberp'>I agree to the <a href="/">Terms and Conditions</a></p>
            </div>
            <button type="submit">Register</button>
          </form>
          <p className='or'>or</p>
          <p className='create'>No account yet? <a href="/login">Log In</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register
