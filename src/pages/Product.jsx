import React, { useState } from 'react'
import Nav from '../components/Nav'
import { IoSearch } from "react-icons/io5";
import '../styles/Product.css'
import { FaArrowRight, FaAngleDown,FaAngleUp } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";


const accordion = [
  {
    name: "new facebook account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "facebook below 50 friend", 
    avaliable: '30',
    path: 'view all'
  },
    {
    name: "facebook above 100 friends", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "old facebook account", 
    avaliable: '30',
    path: 'view all'
  },
    {
    name: "usa facebook account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "canada facebook account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "old instagram  account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "new instagam account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "other social account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "premium vpn", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "sock5 & remote desktop proxy (RDP)", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "Texting numbers", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "Smtp and email sender", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "extactor and Validator", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "tiktok(with follower) account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "tiktok new account", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "twitter with followers", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "old twitter account with followers", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "gmail", 
    avaliable: '30',
    path: 'view all'
  },
  {
    name: "google voice", 
    avaliable: '30',
    path: 'view all'
  },
  
]

const Product = () => {
  const [isaccordion, setIsAccordion] = useState(null);
  
  const handleAccordionToggle = (i) => {
    if(isaccordion == i){
      return setIsAccordion(null);
    }
    setIsAccordion(i)
  }


  return (
    <div className='product'>
      <Nav/>
      <div className='productContainer'>
        <div className='productwrap'>
          <div className='searchBar'>
            <input type="search" name="" id="" placeholder='search product.....'/>
            <button><IoSearch size={25}/></button>
          </div>
        </div>
  
        <div className='productDiscount'>
          <div className='discountCon'>
            <h1>Reseller server 30% discount for resellers</h1>
            <a href="/"><FaArrowRight size={22}/></a>
          </div>
        </div>

        <div className="productAccordion">
          {accordion.map((accord, i)=>(
            <div className='accordItem' key={i}>
              <div className="accordHead">
                <div className='accordHeadText'>
                  <h3>{accord.name}</h3>
                  <span>{accord.avaliable}</span>
                </div>

                <div className='accordHeadBtn'>
                  <button onClick={()=> handleAccordionToggle(i)}>
                    {isaccordion == i ? <FaAngleUp size={14}/> : <FaAngleDown size={14}/>}
                  </button>
                  {accord.path ? 
                    <a href="/">View All<IoArrowForward /></a> :
                    ""
                  } 
                </div> 
              </div>

              <div className=
                {isaccordion == i ? 
                'accordBody active' : 
                'accordBody'}
              >
                {/*{products.map((product)=>(
                  <div className='productCard'>
                    <div className='pCard1'>
                      <div className='pImg'></div>
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.login}</p>
                      </div>
                    </div>

                    <div className='pCard2'>
                      <p>&#8358;{product.price}</p>
                      <button><MdShoppingCartCheckout size={20}/></button>
                      <a href="/"><BsInfoCircle size={15}/>more info</a>
                    </div>

                  </div>
                ))} */}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product 
