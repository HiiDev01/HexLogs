import React from 'react'
import Nav from '../components/Nav'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import { GiCheckMark } from "react-icons/gi";
import { LuBitcoin } from "react-icons/lu";
import { PiUsersFourLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import iconOne from '../assets/communication.png';
import iconTwo from '../assets/socialmedia.png';
import iconThree from '../assets/servers.png';
import iconFour from '../assets/window.png';
import phoneImg from '../assets/phone.png'
import contact from '../assets/contact.png';
import pay from '../assets/pay.png';
import quick from '../assets/quick.png';
import message from '../assets/message.png';
import logo from '../assets/cat.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

const heroServices = [
  { name: 'Verified Accounts', icon: <GiCheckMark size={14}/> },
  { name: '24/7 supports', icon: <GiCheckMark size={14}/> },
  { name: 'multiple payment opt', icon: <LuBitcoin size={14}/> },
  { name: 'Instant Delivery', icon: <GiCheckMark size={14}/> },
  { name: 'Affordable Prices', icon: <GiCheckMark size={14}/> },
  { name: 'Trusted by Thousands', icon: <PiUsersFourLight size={14}/> },
  { name: 'Secure Transactions', icon: <GiCheckMark size={14}/> },
]

const service = [
  {  
    name: 'social account', 
    icon: iconTwo,
    price: '4',
    text: 'Get instant access to premium social media accounts. Safe, fast, and affordable — everything you need to grow your influence in one place.'
  },
  { 
    name: 'window VPS', 
    icon: iconFour, 
    price: '15',
    text : 'Get your own dedicated Windows VPS with lightning-fast SSD storage and RDP enable. Perfect for hosting apps, bots, or running your projects smoothly.'
  },
  {  
    name: 'dedicated server', 
    icon: iconThree,
    price: '100', 
    text: 'Upgrade to a server that works as hard as you do. Fast setup, 24/7 reliability, and full control—perfect for hosting, gaming, or running complex applications.'
  },
  {  
    name: 'Sender & validator', 
    icon: iconOne, 
    price: '100',
    text: 'Boost your outreach with precision! Our Sender and Validator combo helps you send messages faster while filtering out invalid contacts for maximum results.'
  }
];

const cards = [
  { 
    name: '24/7 Support', 
    text: 'Our dedicated support team is available 24/7 to assist you with any issue. Whether day or night, we’re always here to ensure your services run smoothly without interruptions.',
    img:  contact
  },
  { 
    name: 'Instant Delivery', 
    text: 'No more waiting! Enjoy instant delivery right after your purchase and start using your product or service immediately.',
    img: pay 
  },
  { 
    name: 'Easy and Flexible Payments', 
    text: 'Select the payment method that suits you best. We accept various options to make your experience easy, fast, and completely secure.',
    img: quick 
  },
  {
    name: 'Get Email Updates',
    text: 'Get instant email updates on new releases, improvements, and system alerts. Stay ahead with real-time information that matters to you.',
    img: message
  }
]


const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      <div className='HeroSection'>
        <div className='heroContent'>
          <p className='highlight'>
            <span className='dot_wave'>
            </span> 
            premium social account
          </p>
          <h3>The <span>Ultimate</span> place for social media Account</h3>
          <p className='heroText'>
            Gain instant access to verified accounts across 
            all major platforms. Elevate your marketing 
            strategy with our premium social accounts, 
            backed by 24/7 support and guaranteed satisfaction.
          </p>
          
          <div className='hero_services'>
            {heroServices.map((service) => (
              <div className='hero_service' key={service.name}>
                <span className='service_icon'>{service.icon}</span>
                <span className='service_name'>{service.name}</span>
              </div>
            ))}
          </div>


          <div className='hero_buttons'>
            <Link to='/' className='get_started'>
              Get Started
              <span><FaArrowRight size={16}/></span>
            </Link>
            <Link to='/' className='learn_more'>
              Browse Accounts
            </Link>
          </div>
        </div>
        <div className='HeroImage'>
          {/*<img src={socialImg} alt='heroImg' />*/}
        </div>
      </div>

      <div className='service'>
        <div className='serviceHeader'>
          <h1>Get Premium Account & Tools</h1>
          <p>
            Browse our different section of verified social 
            media accounts and services. We offer the highest 
            quality accounts at a very low price and with 
            guaranteed delivery.
          </p>
        </div>

        <div className='service_grid_container'>
          {service.map((serve, index) => (
            <div key={index} className='serviceItem'>
              <div className='serviceImgCon'><img src={serve.icon} alt={serve.name}/></div>
              <h2>{serve.name}</h2>
              <p>{serve.text}</p>
              <div className='serviceLinkCon'><a href="/"> starting from &#36;{serve.price}</a></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="features">
        <h2>features</h2>
        <div className='featureWrapper'>
          <div className='featuresHeader'>
            <h1>Everything You Need <br/> All in One Place</h1>
            <p>Our platform brings you all the essential features — speed, security, automation, and accuracy. Whether you’re managing servers or sending campaigns, we’ve got you covered.</p>
            <a href="/">buy premium now</a>
          </div>
          <div className='featureImgContainer'>
            <img src={phoneImg} alt="image" />
          </div>
        </div>
      </div>

      <div className='cardsContainer'>
        {cards.map((card, index)=>(
          <div className='cards' key={index}>
            <h2>{card.name}</h2>
            <p>{card.text}</p>
            <div className='cardsImgsCon'><img src={card.img} alt="image" /></div>
          </div>
        ))}
      </div>

      <div className='part'>
        <div>
          <p>Looking for a custom solution, interested in becoming a reseller, or need more information?</p>
          <h2>Contact our sales experts today!</h2>
        </div>
        <a href="/">contact us</a>
      </div>


      <footer>
        <div className='footerLogoCon'>
          <div className='LogoWrap'>
            <img src={logo} alt={logo.name} />
            <div className="logos">
              <h1>HexLogs</h1>
            </div>
          </div>
        </div>
        <p className='footertext'>
          230 Ogroup LLC <br/>
          Address: 16082 Valley highway , Oh 15073, USA
        </p>
        <div className='footerSocialContainer'>
          <div className="social">
            <a href="/">
             <FaSquareFacebook size={22}/>
            </a>
            <a href="/">
             <BsTwitterX size={22}/>
            </a>
            <a href="/">
             <FaYoutube size={22}/>
            </a>
          </div>
        </div>
        <div className='footerLinkCon'>
          {footerLink.map((link, index)=> (
            <a href={link.path} key={index}>
              {link.name}
            </a>
          ))}
        </div>
        <div className='copyright'>
          <p>© Copyright 2025 HexLogs | All Rights Reserved</p>
        </div>

      </footer>
    </div>
  )
}
const footerLink = [
  {name: 'Privacy Policy ', path: '/'},
  {name: 'Terms of Services ', path: '/'},
  {name: 'Affiliate Program', path: '/'},
  {name: 'Product', path: '/'},
  {name: 'Datacenters', path: '/'},
  {name: 'Network Status', path: '/'},
  {name: 'about us', path: '/'}
]
export default Home
