import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'
import { NavLink } from 'react-router-dom'
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



const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'FAQs', href: '/faq' },
  { name: 'privacy', href: '/privacy' }
]
const sidebar = [
  {name: 'product', path: '/', icon: <AiOutlineProduct size={30}/>},
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
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  }
  
  useEffect(()=>{
    if(isToggle){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = "auto";
    }
  })

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

      <div className='auth_buttons'>
        <Link to='/login' className='login_btn'>
          Login
        </Link>
        <Link to='/register' className='signup_btn'>
          Sign Up
        </Link>
      </div>

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
    </div>
  )
}

export default Nav 
