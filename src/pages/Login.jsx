import React, { useState } from 'react'
import '../styles/Login.css'
import logo from '../assets/cat.png'
import { ToastContainer, toast } from 'react-toastify';
import { supabase } from './Client'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  console.log(formData)
  const handleChange = (e) =>{
    setFormData((prev)=>{
      return{
        ...prev, 
        [e.target.name]: e.target.value
      }
    });
  }
  const handleLogin = async(e) =>{
    e.preventDefault()
    try {
      const  { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });
      if(error){
        toast.error(`Registration failed: ${error.message}`);
      }else{
        toast.success("Login successful! redirecting to dashboard");
        setFormData({email: "", password: "", remember: true})
        console.log('login succesful')
      }
      navigate("/product")
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  }
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
          <form action="" onSubmit={handleLogin}>
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
            <a href="/">forget password?</a>
            <button type="submit">Login</button>
          </form>
          <p className='or'>or</p>
          <p className='create'>No account yet? <a href="/register">Register</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
