import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="w-full bg-[#222831] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
      
          <div className="flex flex-col items-center sm:items-start">
            <FaRegHeart className='text-3xl sm:text-4xl text-white mb-2' />
            <p className='text-center sm:text-left text-white text-sm sm:text-base font-semibold'>TechInnov</p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className='hover:text-[#00ADB5] transition-colors'>
              <FaTwitter className='text-2xl sm:text-3xl text-white' />
            </a>
            <a href="#" className='hover:text-[#00ADB5] transition-colors'>
              <AiFillInstagram className='text-2xl sm:text-3xl text-white' />
            </a>
            <a href="#" className='hover:text-[#00ADB5] transition-colors'>
              <FaLinkedin className='text-2xl sm:text-3xl text-white' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}



