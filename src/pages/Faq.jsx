import React, { useState } from 'react';
import '../styles/Faq.css';
import Nav from '../components/Nav';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";



const faqs = [
  {
    name: "What is HexLogs.com?",
    text: "HexLogs.com is your go-to marketplace for buying and selling social media accounts like Instagram, TikTok, Facebook, YouTube, and more. We connect buyers and sellers, making it easy to boost your online presence or cash in on your accounts. It's the AWOOF plug for social media growth!"
  },
  {
    name: "is buying and selling of social media accounts safe?",
    text: "Buying and selling accounts comes with risks, like account suspension or deactivation by platforms. We provide a secure platform, but you're responsible for verifying account authenticity and complying with platform terms. Check seller ratings, reviews, and account details before making a move. Stay sharp and stay safe!"
  },
  {
    name: "Do social media paltfrom allow account sales?",
    text: "Most platforms (e.g., Instagram, TikTok, Facebook) prohibit buying or selling accounts in their terms of service. Violating these rules could lead to account bans or loss of access. HexLogs.com is not affiliated with these platforms, and you use our service at your own risk. Always read platform policies before buying or selling."
  },
  {
    name: "How do i buy account on HexLogs?",
    text: [
      "It's super easy!",
      "1. Sign up for a HexLogs.com account.",
      "2. Browse our listings for Instagram, TikTok, or other accounts.",
      "3. Check the account's stats, reviews, and seller reputation.",
      "4. Complete the purchase securely through our platform.",
      "5. Follow the seller's instructions to transfer the account safely.",
      "Pro tip: Double-check everything to avoid scams!"
    ]
  },
  {
    name: "How do i sell logs on HexLogs.com?",
    text: [
      "Ready to cash in?",
      "1. Create a HexLogs.com account and verify your identity.",
      "2. List your account with accurate details (e.g., followers, niche, engagement).",
      "3. Set a fair price and wait for buyers.",
      "4. Once sold, transfer the account securely as agreed.",
      "Make sure you have the legal right to sell the account to avoid disputes!"
    ]
  },
  {
    name: "How do i avoid scams when buying or selling?",
    text: [
      "We're all about keeping it safe! Here's how:",
      "• Buyers: Only buy from sellers with good ratings and verified accounts. Avoid deals that seem too good to be true.",
      "• Sellers: Provide accurate account info and communicate clearly with buyers.",
      "• Use Viplogs.com's secure payment system—never share sensitive info like passwords outside our platform. Report suspicious",
      "activity to us ASAP!"
    ]
  },
  {
    name: "What happend if account i bought got banned?",
    text: "Social media platforms may ban or suspend accounts, especially if they detect a transfer. Viplogs.com doesn't control platform actions and can't guarantee account longevity. Before buying, check the account's history and ask the seller for details. All sales are final unless otherwise stated by the seller."
  },
  {
    name: "Can i sell account with copyrighted content?",
    text: "Only sell accounts if you own or have permission to transfer any copyrighted content (e.g., videos, music, or images). If the content falls under fair use (like for commentary or education), make that clear in your listing. Violating copyright laws could lead to account issues or legal trouble, so play it safe!"
  },
  {
    name: "How do HexLogs.com protect my information?",
    text: "We take your privacy seriously! Your personal and payment info is protected with industry-standard encryption. We don't share your data with third parties except as needed to process transactions or comply with legal requirements. Check our Privacy Policy for more details.",
  },
  {
    name: "what if i have a disput with a buyer or seller?",
    text: "Got an issue? Contact our support team at HexLogsmarketplace@gmail.com. We'll mediate disputes fairly, but we're not responsible for resolving conflicts between users. To avoid disputes, communicate clearly, verify details, and use our secure platform for all transactions."
  },
  {
    name: "Are ther any account i can't sell on HexLogs.com?",
    text: [
      "Yep, we keep it legit! You can't sell:",
      "• Hacked or stolen accounts.",
      "• Accounts with fake followers or engagement.",
      "• Accounts promoting illegal activities, hate speech, or harassment.",
      "Violating our community guidelines could get your listing removed or your account suspended. Keep it clean!"
    ]
  },
  {
    name: "How do i know that an account's folllowers is real?",
    text: [
      "Viplogs.com encourages sellers to provide accurate follower and engagement stats. As a buyer, you can:",
      "1. Check the account's activity (e.g., comments, likes) for authenticity.<br/>",
      "2. Ask the seller for analytics or screenshots.",
      "3. Use third-party tools to analyze follower quality (at your own cost).",
      "We don't verify follower authenticity, so do your homework!"
    ]
  },
  {
    name: "Does HexLogs.com Charge fees?",
    text: "We charge a small platform fee for transactions to keep the lights on and ensure a secure experience. Fees vary based on the sale price—check our pricing page for details. No hidden costs, just straight-up AWOOF value!"
  },
  {
    name: "Can i get a refund if I'm not happy with the purchase?",
    text: "Refunds depend on the seller's policy, as listed in each account's description. Viplogs.com doesn't control refund agreements between buyers and sellers. Before buying, clarify the seller's terms and keep all communication on our platform for transparency."
  },
  {
    name: "How can i contact HexLogs.com for Help?",
    text: "We're here for you! Reach out via viplogmarketplace@gmail.com for support. Avoid sharing sensitive info on social media for your safety. Got a question we didn't cover? Holler, and we'll sort you out!"
  }
]
const Faq = () => {
  const [isFaqToggle, setIsFaqToggle] = useState(null);

  const handleFaqToggle = (i) => {
    if(isFaqToggle == i){
      return setIsFaqToggle(null);
    }
    setIsFaqToggle(i)
  }

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
            <div key={i} 
             className='FaqCards'
             onClick={()=> handleFaqToggle(i)}
            >
              <div className="faqCardHead">
                <h2>{faq.name}</h2>
                <button>
                  {isFaqToggle == i ?
                    <FaAngleUp size={14}/>:
                   <FaAngleDown size={14} />
                  }
                  
                </button>
              </div>
              <div className={isFaqToggle == i ? "faqBody active" : "faqBody"}>
                <p>{faq.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
