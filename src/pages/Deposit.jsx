import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { Navigate, useNavigate } from 'react-router-dom';
import paymentImg from '../assets/payment.png'
import { toast } from 'react-toastify';
import '../styles/Deposit.css'
import { SlClose } from "react-icons/sl";

const Deposit = () => {
  const navigate = useNavigate()
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [showDetails, setShowDetails] = useState(false)

  const handlePay = (e) =>{
    e.preventDefault();

    const amount = parseFloat(paymentAmount)

    if(!amount || amount < 100){
      toast.error("Enter a valid amount greater than 100");
      return;
    }
    if(!paymentOption){
      toast.error("please select payment option");
      return
    }

    console.log("amount:", amount)
    console.log("method:", paymentOption)

    setShowDetails(true);
  }
  useEffect(()=>{
    if(showDetails){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "auto"
    }
    return () =>{
      document.body.style.overflow = "hidden"
    }
  }, [showDetails])
  return (
    <div className='deposit'>
      <Nav></Nav>
      <div className='main'>
        <div className='despositFormWrap'>
          <div className="despositFormCon">
            <div className="head">
              <div className='depositImg'><img src={paymentImg} alt="illus"/></div>
              <h2>add fund</h2>
              <p>Top up your wallet instantly with your preferred payment method.</p>
            </div>
            <div className='depositForm'>
              <form action="" onSubmit={handlePay}>
                <div className='despositAmountDiv'>
                  <label htmlFor="">enter amount (NGN)</label>
                  <input 
                    type="number"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)} 
                    name="paymentAmount"
                    id="amount"
                  />
                </div>
                <div className='despositPaymentMethod'>
                  <label htmlFor="">select payment method</label>
                  <select 
                    name="paymentOption" 
                    id="option"
                    value={paymentOption}
                    onChange={(e) => setPaymentOption(e.target.value)}
                   >
                    <option value="" >--- select payment method ---</option>
                    <option value="bank">bank transfer</option>
                    <option value="bitcoin">pay with crypto (bitcoin)</option>
                    <option value="usdt">pay with crypto (usdt) </option>
                  </select>
                </div>
                <button type="submit">pay now</button>
              </form>
              <p>After a successful instant payment, please allow the site to redirect you to your dashboard. Don't cancel, go back or reload. Wait on the page, thanks.</p>
            </div>
          </div>
        </div>

        <div className="paymentHistoryCon">
          <table>

          </table>
        </div>
      </div>
   {/*   {showDetails && (
        <div className='gateway_overlay'>
          <div className="closeBtn"><SlClose size={30}/></div>
          {paymentOption === "bank" &&(
            <div>

            </div>
          )}
        </div>
      )}  */}
    </div>
  )
}

export default Deposit
