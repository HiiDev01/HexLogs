import React, { useEffect, useState, useRef } from 'react'
import '../styles/Nav.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../assets/cat.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import { FiServer } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { BsBoxSeamFill } from "react-icons/bs";
import { PiBoundingBoxDuotone } from "react-icons/pi";
import { RiAlignItemRightLine } from "react-icons/ri";
import { supabase } from '../pages/Client'
import { useAuth } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { toast } from 'react-toastify'
import { GiWallet } from "react-icons/gi";



const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'FAQs', href: '/faq' },
  { name: 'privacy', href: '/privacy' }
]
const sidebar = [
  {name: 'product', path: '/product', icon: <AiOutlineProduct size={30}/>},
  {name: 'server', path: '/', icon: <FiServer size={22}/>},
  {name: 'order history', path: '/', icon: <RiAlignItemRightLine size={30}/>},
  {name: 'payment history', path: '/', icon: <MdOutlinePayments size={30}/>},
  {name: 'fund wallet', path: '/', icon: <IoWalletOutline size={30}/>},
  {name: 'profile', path: '/', icon: <FiUserPlus size={30}/>},
  {name: 'faq', path: '/', icon: <MdOutlineQuestionMark size={30}/>},
  {name: 'community', path: '/', icon: <GrGroup size={30}/>},
  {name: 'refferal', path: '/', icon: <PiBoundingBoxDuotone size={30}/>},
  {name: 'api documentation', path: '/', icon: <BsBoxSeamFill size={30}/>},
]

const Nav = () => {
  const [payAmount, setPaymentAmount] = useState({pay_amount: '', pay_type: ''});
  const [isToggle, setIsToggle] = useState(false);
  const [balance, setBalance] = useState(0.00);
  const [gateway, setGateway] = useState(false)
  const popedRef = useRef()
  const  {user} = useAuth()
  const navigate = useNavigate();


  const handleTrackPayInfo = (e) =>{
    const {name, value} = e.target
    setPaymentAmount((prev)=>({
      ...prev, 
      [name]: value
    }))
  }
  const handlePayment = async (e) =>{
    e.preventDefault();
    const amount = Number(payAmount.pay_amount);
    const method = payAmount.pay_type.trim()
    if(!amount || !method){
      toast.error('failed: enter deposit amount and select payment type');
      return;
    }
    if(payAmount.pay_amount < 10){
      toast.error('amount can not be less than 10 naira')
      return;
    }
    console.log(payAmount);
  }
  useEffect(()=>{
    const handleCloseRef = (e) => {
      if(popedRef.current && !popedRef.current.contains(e.target)){
        setGateway(false);
      }
    }

    document.addEventListener("mousedown", handleCloseRef)
    return () =>{
      document.removeEventListener("mousedown", handleCloseRef)
    }
  }, [])

  const handlePay = () =>{
    setGateway(true)
  }
  const handleClosePaymentCon = () =>{
    setGateway(false)
  }
  const signOut = () =>{
    supabase.auth.signOut()
    navigate('/')
  }

  useEffect(()=>{
    if(isToggle){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = "auto";
    }
  })
  const handleToggle = () => {
    setIsToggle(!isToggle);
  }

  useEffect(()=>{
    if(user){
      handleBalance()
    }
  }, [user]);

  const handleBalance = async() =>{
    try {
      const {data, error} = await supabase
      .from('user_balance')
      .select("*")
      .eq('user_id', user.id)
      .single()
  
      if(error){
        toast.error('failed to get user balance');
        return
      }
      console.log('user balance', data.balance);
      const balanceFormat = Number(data.balance).toFixed(2)
      setBalance(balanceFormat)
    } catch (error) {
      toast.error('failed to get user balance');
      setBalance(0)
      console.log(error.message)
    }
  }


  return (
    <div className='navbar'>
      <div className='Logo_menu'>
        <div className="hamburger" onClick={handleToggle}>
          <GiHamburgerMenu size={25} />
        </div>
        <div className='LogoWrapper'>
          <img src={logo} alt={logo.name} />
          <div className="logo">
            <h1>HexLogs</h1>
          </div>
        </div>
      </div>

      <div className='navLinkContainer'>
        {navLinks.map((links) => (
          <NavLink 
          className={({isActive}) => (isActive ? 'navlink active' : 'navlink')}
            key={links.name} 
            to={links.href}>
            {links.name}
          </NavLink>
        ))}
      </div>

      {user ? (
        <div className='userAcc'>
          <button 
            onClick={handlePay}
            className='navpaybtn'>
            add fund
            <span>
              &#8358; {balance}
            </span>
          </button>
          <button onClick={signOut} className='navlogoutbtn'>
            logout
          </button>
        </div>
      ) : (
        <div className='auth_buttons'>
          <Link to='/login' className='login_btn'>
            Login
          </Link>
          <Link to='/register' className='signup_btn'>
            Sign Up
          </Link>
        </div>
      )}

      {isToggle && <div className='sideBar'>
        {sidebar.map((bar, index)=>(
          <a href={bar.path} key={index}>
            <li>
              <span className='barsicon'>{bar.icon}</span>
              <span>{bar.name}</span>
            </li>
          </a>
        ))}
      </div>}

      {user  && gateway && (
        <div className='gatewayOverlay'>
          <div className='gatewayCon' ref={popedRef}>
            <header>
              <button onClick={handleClosePaymentCon} className='clsBtN'><IoClose size={30}/></button>
              <h1><GiWallet size={60}/></h1>
              <h2>add fund</h2>
              <p>Top up your wallet instantly with your preferred payment method. and you are good to go</p>
            </header>
            <div className='gatewaymain'>
              <form action="">
                <div className='gatewaywrap gatewaywrapOne'>
                  <label htmlFor="amount">enter amount <small>(NGN)</small></label>
                  <input 
                    type="number" 
                    name="pay_amount" 
                    id="amount"
                    value={payAmount.pay_amount}
                    onChange={handleTrackPayInfo}/>
                </div>
                <div className='gatewaywrap  gatewaywrapTwo'>
                  <label htmlFor="select">select payment method</label>
                  <select 
                    name="pay_type" 
                    id="select"
                    value={payAmount.pay_type}
                    onChange={handleTrackPayInfo}
                  >
                    <option value="">select payment method</option>
                    <option value="">bank transfer</option>
                  </select>
                </div>
                <button type="submit">pay now</button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Nav 
