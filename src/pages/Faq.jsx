import React from 'react';
import '../styles/Faq.css';
import Nav from '../components/Nav';
import { FaAngleDown } from "react-icons/fa6";


const faqs = [
  {
    name: "What is HexLogs.com",
    text: "Viplogs.com is your go-to marketplace for buying and selling social media accounts like Instagram, TikTok, Facebook, YouTube, and more. We connect buyers and sellers, making it easy to boost your online presence or cash in on your accounts. It's the AWOOF plug for social media growth! 🌟"
  },
  {
    name: "is buying and selling of social media accounts safe?",
    text: "Buying and selling accounts comes with risks, like account suspension or deactivation by platforms. We provide a secure platform, but you're responsible for verifying account authenticity and complying with platform terms. Check seller ratings, reviews, and account details before making a move. Stay sharp and stay safe!"
  },
  {
    name: "Do social media paltfrom allow account sales",
    text: "Most platforms (e.g., Instagram, TikTok, Facebook) prohibit buying or selling accounts in their terms of service. Violating these rules could lead to account bans or loss of access. HexLogs.com is not affiliated with these platforms, and you use our service at your own risk. Always read platform policies before buying or selling."
  },
  {
    name: "How do i buy account on HexLogs",
    text: [
      "It's super easy!",
      "1. Sign up for a Viplogs.com account.",
      "2. Browse our listings for Instagram, TikTok, or other accounts.",
      "3. Check the account's stats, reviews, and seller reputation.",
      "4. Complete the purchase securely through our platform.",
      "5. Follow the seller's instructions to transfer the account safely.",
      "Pro tip: Double-check everything to avoid scams!"
    ]
  },
  {
    
  }
]
const Faq = () => {
  return (
    <div className='Faq'>
      <Nav></Nav>
      <div className='FaqContainer'>
        <div className="faqHeader">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our products and services.</p>
        </div>
  
        <div className='faqAccordionContainer'>
          {faqs.map((faq, i)=>(
            <div key={i} className='cards'>
              <div className="faqCardHead">
                <h2>what is HexLogs.com</h2>
                <button><FaAngleDown size={20}/></button>
              </div>
              <div className='faqBody'>
                <p></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
