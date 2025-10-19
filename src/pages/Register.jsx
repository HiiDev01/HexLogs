import React, { useState, useRef, useEffect } from 'react'
import '../styles/Register.css'
import logo from '../assets/cat.png'
import { supabase } from './Client'
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../context/AuthProvider';




const Register = () => {
  const user = useAuth();
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
      });



      if(error){
        if(error.message.includes("already registered") || error.message.includes("User already exists")){
          toast.error("This email is already registered. Please log in instead.");
          return;
        }
         toast.error(`Registration failed: ${error.message}`);
         return
      }

      const user_id = data.user?.id;
      if(!user_id){
        toast.error('could not get user id Try again')
        return;
      }
      const {error: walletError} = await supabase
      .from('user_balance')
      .insert([{user_id: user_id,  balance: 0.00}]);
      if(walletError){
        toast.error('failed to create wallet', walletError)
        return
      }

      toast.success("Registration successful. Check your email for comfirmation link");
      setFormData({email: "", password: "", remember: true});

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
