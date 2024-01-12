import React from 'react'
import{FaFacebook,FaInstagram,FaLinkedinIn, FaTwitter}from "react-icons/fa"
const BannerSocialMedia = () => {
  return (
              

                <div className='flex flex-col gap-4'>
                <h2 className='text-xl uppercase font-titleFont mb-4  text-blue-500 text-center'>FOllOW US ON
                </h2>
                
                <div className='flex gap-4'>
                <a href='https://www.facebook.com/law.mashira'>
                <span className="icon">
                <FaFacebook/>
                  </span>
                </a>
                <a href='https://www.linkedin.com/in/lawson-matutu-520a07216/'>
                  <span className="icon">
                <FaLinkedinIn/>
                  </span>
                  </a>
                
                
                
                
                  <a href='http://www.github.com/LawMashira'>
                  <span className="icon">
                <FaInstagram/>
                  </span>
                  </a>
                
                
                  
                
                  <a href='http://www.github.com/LawMashira'>
                  <span className="icon">
                <FaTwitter/>
                  </span>
                  </a>
                </div>
                </div>
                
  )
}

export default BannerSocialMedia